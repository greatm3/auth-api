export interface User {
    id: number;
    email: string;
    created_at: string;
}

export interface UserService<T> {
    findAll(): Promise<T[]>,
    findById(): Promise<T | null>,
    findByEmail(): Promise<T | null>,
    createUser(email: string, hashedPassword: string): Promise<T | null>,
    deleteUser(email: string): Promise<T | null>
}