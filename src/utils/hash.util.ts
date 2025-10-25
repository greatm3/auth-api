import bcrypt from "bcrypt";

const saltRounds = 10;

export async function hashPassword(password: string): Promise<string | Error | undefined> {
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        return hash
    } catch (err) {
        if (err instanceof Error) {
            return err;
        }
    }
}