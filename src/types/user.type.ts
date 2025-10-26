export interface User {
    id: number;
    email: string;
    created_at: string;
}

export interface UserServiceType<T> {
    findAll(): Promise<T[] | Error | undefined>,
    findById(id: number): Promise<T | null>,
    findByEmail(email: string): Promise<T | null>,
    createUser(email: string, hashedPassword: string): Promise<T | null>,
    deleteUser(email: string): Promise<T | null>
}