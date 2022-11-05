import UsersEntity, { User } from "../entities/users.entity";
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()

const _usersEntity = new UsersEntity();
const saltRounds = parseInt(process.env.SALT_ROUNDS as string) ?? 10;
const bcryptSecret = process.env.BCRYPT_SECRET as string;
const JWTSecret = process.env.JWT_SECRET as string;

class AuthService {
    async register(user: User): Promise<User> {
        user.password = await bcrypt.hash(user.password as string + bcryptSecret, saltRounds);
        const createdUser = await _usersEntity.createUser(user);
        return createdUser;
    }

    async login(user: User): Promise<User> {
        const { username, password } = user;

        // check if user exists (get user by username)
        const userExists = await _usersEntity.getUserByUsername(username);
        if (userExists === undefined)
            throw new Error("User does not exist")
        // check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password as string + bcryptSecret, userExists.password as string);
        if (!isPasswordCorrect)
            throw new Error("Password is incorrect")

        // generate token
        const token = this.generateToken(userExists);

        // remove password from user
        delete userExists.password;

        // return user with token
        return { ...userExists, token };
    }

    generateToken(user: User): string {
        // generate token
        const token = jwt.sign({ sub: user.username }, JWTSecret, {
            expiresIn: 60 // expires in 24 hours
        });

        return token;
    }
}

const authGuard = async (req: any, res: any, next: any): Promise<void> => {
    try {
        // get token from request header
        const token = req.headers.authorization?.split(" ")[1];

        // check if token exists
        if (token === undefined)
            throw new Error("Token is missing")

        // decode token
        const decodedToken = jwt.verify(token as string, JWTSecret);

        // check if token is valid
        if (decodedToken === undefined)
            throw new Error("Invalid token");

        // get user by username
        const user = await _usersEntity.getUserByUsername(decodedToken?.sub as string);

        // check if user exists
        if (user === undefined)
            throw new Error("User does not exist");

        // attach user to request object
        res.locals.user = user;

        next();
    } catch (e: any) {
        return res.status(401).json({
            message: "Unauthorized",
            error: e?.message
        });
    }
}

export { authGuard }
export default AuthService;