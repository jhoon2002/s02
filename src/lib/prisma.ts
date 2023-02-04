/*
import Prisma, * as PrismaAll from '@prisma/client'

const PrismaClient = Prisma?.PrismaClient || PrismaAll?.PrismaClient

const prisma = new PrismaClient()
export default prisma
*/
import { PrismaClient } from '@prisma/client'

if (!global.prisma) {
    global.prisma = new PrismaClient({
        // log: ['query'],
    })
}
export default global.prisma
