import appPool from '../db';
import { User, UserServiceType } from "../types/user.type"

export class UserService implements UserServiceType<User> {
    constructor(private readonly db = appPool) {}
    
    async findAll(): Promise<User[] | Error | undefined> {
        try {
            const users = await this.db.query('SELECT * FROM users')
            return users.rows
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.stack, 'Error fetching users from database')
                throw new Error('Failed to fetch users from database')
            }
        }
    }
}
