import db from '../providers/database.provider';

interface User {
    id?: number;
    name: string;
    username: string;
    password?: string;
    token?: string;
}

class UsersEntity {
    async createUser(user: User): Promise<User> {
        const { name, username, password } = user;
        const { rows } = await db.query(
            'INSERT INTO users (name, username, password) VALUES ($1, $2, $3) RETURNING *',
            [name, username, password]
        );
        return rows[0];
    }

    async getUserByUsername(username: string): Promise<User> {
        const { rows } = await db.query('SELECT * FROM users WHERE username = $1', [username]);
        return rows[0];
    }
}


export { User };
export default UsersEntity;