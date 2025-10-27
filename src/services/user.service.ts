import appPool from '../db';
import { User, UserServiceType } from '../types/user.type';

export class UserService implements UserServiceType<User> {
    constructor(private readonly db = appPool) {}

    async findAll(): Promise<User[] | Error | undefined> {
        try {
            const users = await this.db.query('SELECT * FROM users');
            return users.rows;
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.stack, 'Error fetching users from database');
                throw new Error('Failed to fetch users from database');
            }
        }
    }

    async findById(id: number): Promise<User | undefined> {
        try {
            const user = await this.db.query('SELECT * FROM users WHERE id = $1', [id])
            return user.rows[0]
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.stack, 'Error fetching user from database')
                throw new Error('Failed to fetch user from database')
            }
        }
    }

    async findByEmail(email: string): Promise<User | undefined> {
        try {
            const user = await this.db.query('SELECT * FROM users WHERE email = $1', [email])
            return user.rows[0]
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.stack, 'Error fetching user from database')
                throw new Error('Failed to fetch user from database')
            }
        }
    }

    async createUser(email: string, hashedPassword: string): Promise<undefined> {
        try {
            const duplicateUser = await this.findByEmail(email);
            if (!duplicateUser) {

            }
        }
    }
}
