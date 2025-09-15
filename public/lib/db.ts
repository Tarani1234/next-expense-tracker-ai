import {PrismaClient} from '@prisma/client'

declare global{
    var Prisma : PrismaClient | undefined;
}

export const db = global.Prisma || new PrismaClient();

if(process.env.NODE_ENV!== 'production'){
    globalThis.Prisma = db;
}