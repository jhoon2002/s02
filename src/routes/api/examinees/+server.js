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
    const disqualified = url.searchParams.get('disqualified')
    const category = url.searchParams.getAll('category')
    const season = url.searchParams.getAll('season')
    const type = url.searchParams.getAll('type')
    const majors = url.searchParams.getAll('majors')
    // const degrees = url.searchParams.getAll('degrees')
    // const types = []
    // console.log('type', type)
    // console.log(type.map((item) => ({ type: item })))

    const department = url.searchParams.get('department')
    // const some = url.searchParams.get('some')

    // console.log('=======> some', some)

    const res = await prisma.examinees.findMany({
        select: {
            name: true,
            id: true,
            disqualified_flag: true,
            category: true,
            degrees: true,
            season: true,
            type: true,
            majors: true,
        },
        where: {
            AND: [
                {
                    OR: category.map((item) => ({ category: item })),
                },
                {
                    OR: season.map((item) => ({ season: item })),
                },
                {
                    OR: type.map((item) => ({ type: item })),
                },
                {
                    OR: majors.map((item) => ({ majors: item })),
                },
            ],
        },
        orderBy: [{ id: 'asc' }, { category: 'asc' }],
        skip: 0,
        take: 20,
    })

    return json(res)
}
