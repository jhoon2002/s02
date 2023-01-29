import prisma from '$lib/prisma'
import { error } from '@sveltejs/kit'
import { json } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    /*const res = await prisma.examinees.findMany({
        select: {
            name: true,
            school: true,
            department: true,
            major: true,
        },
        where: {
            AND: [
                /!*{
                    OR: {
                        name: {
                            contains: '종훈',
                        },
                        id: {
                            contains: '23-0002',
                        },
                    },
                },*!/
                {
                    OR: [
                        {
                            disqualified_flag: false,
                        },
                    ],
                },
                {
                    OR: [
                        {
                            category: '예술사',
                        },
                    ],
                },
                {
                    OR: [
                        {
                            season: '8월입시',
                        },
                    ],
                },
                {
                    OR: [
                        {
                            department: '연기과',
                        },
                    ],
                },
                {
                    OR: [
                        {
                            major: '연기(여)',
                        },
                    ],
                },
            ],
        },
        orderBy: [
            {
                major: 'asc',
            },
            {
                department: 'asc',
            },
            {
                id: 'asc',
            },
        ],
        skip: 0,
        take: 2,
    })

    const res = await prisma.examinees.findMany()

    return res*/
    // console.log('url', url)
    const name = url.searchParams.get('name')
    const id = url.searchParams.get('id')
    const disqualified_flag = url.searchParams.get('disqualified_flag')
    const category = url.searchParams.get('category')
    const degrees = url.searchParams.get('degrees')
    const season = url.searchParams.get('season')
    const type = url.searchParams.get('type')
    const department = url.searchParams.get('department')
    const aaa = url.searchParams.get('aaa')

    console.log('=======> aaa', aaa)

    const res = await prisma.examinees.findMany({
        select: {
            name: true,
            id: true,
            disqualified_flag: true,
            category: true,
            degrees: true,
            season: true,
            type: true,
            department: true,
            major: true,
        },
        where: {
            type: '교육기회균등',
        },
        orderBy: [{ id: 'asc' }, { category: 'asc' }],
        skip: 0,
        take: 5,
    })

    return json(res)
}
