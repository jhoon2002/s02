import prisma from '$lib/prisma'

export async function load({ params }) {
    const data = await prisma.examinees.findMany({
        where: {
            name: '이은지',
        },
    })

    return {
        data,
    }
}
