import UsersEntity, { User } from '../entities/users.entity';
const _usersEntity = new UsersEntity();

const userData: User = {
    name: 'John Doe',
    username: 'johndoe',
    password: 'password'
}

describe("Users entity tests", () => {
    it("should create a user", async () => {
        const createdUser = await _usersEntity.createUser(userData);
        expect(createdUser.id).toBeGreaterThan(0);
        expect(createdUser.name).toEqual(userData.name);
        expect(createdUser.username).toEqual(userData.username);

        userData.id = createdUser.id;
    });

    it("should get a user by id", async () => {
        const user = await _usersEntity.getUserById(userData.id as number);
        expect(user.id).toEqual(userData.id);
    });

    it("should get a user by username", async () => {
        const user = await _usersEntity.getUserByUsername(userData.username);
        expect(user.username).toEqual(userData.username);
    });

});