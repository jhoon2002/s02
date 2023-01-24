import PrismaClient from '$lib/prisma'
const prisma = new PrismaClient()

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const users = await prisma.member.findMany()

    return {
        users: users,
    }
}
