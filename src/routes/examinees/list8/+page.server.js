import prisma from '$lib/prisma'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const users = await prisma.member.findMany()

    return {
        users: users,
    }
}
