import appPool from '../db';

async function up() {
    const migrationClient = await appPool.connect();
    try {
        await migrationClient.query(
            `CREATE TABLE IF NOT EXISTS users ( 
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                password_hash TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT NOW()
            )
            `
        );
        console.log(`Table users created.`);
    } catch (err) {
        if (err instanceof Error) {
            console.error('MIGRATION ERROR', err.stack);
        }
    } finally {
        migrationClient.release();
        await appPool.end();
    }
}

up();
