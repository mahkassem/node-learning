import UsersEntity, { User } from "../entities/users.entity";

const _usersEntity = new UsersEntity();

class UsersService {
    async getUserById(id: number): Promise<User | undefined> {
        const user = await _usersEntity.getUserById(id);
        user.password = "********";
        return user;
    }
}

export default UsersService;