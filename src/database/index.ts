import { PrismaClient } from '../generated/prisma/client';
const database = new PrismaClient({
    log: ["query", "info", "warn", "error"]
});

export { database };