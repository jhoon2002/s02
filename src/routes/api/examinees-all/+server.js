import prisma from '$lib/prisma'
import { error } from '@sveltejs/kit'
import { json } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const rowsPer = url.searchParams.get('rowsPer') ? url.searchParams.get('rowsPer') : '10'
    let page =
        isNaN(parseInt(url.searchParams.get('page'))) || parseInt(url.searchParams.get('page')) < 1
            ? 1
            : parseInt(url.searchParams.get('page'))
    const name = url.searchParams.get('name') ? url.searchParams.get('name') : ''
    const id = url.searchParams.get('id') ? url.searchParams.get('id') : ''
    const disqualified = url.searchParams.get('disqualified')
    const category = url.searchParams.getAll('category')
    const season = url.searchParams.getAll('season')
    const type = url.searchParams.getAll('type')
    const majors = url.searchParams.getAll('majors')
    // const degrees = url.searchParams.getAll('degrees')
    // const department = url.searchParams.get('department')

    const where = {
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
                {
                    name: { contains: name },
                },
                {
                    id: { contains: id },
                },
            ],
        },
    }
    const cnt = {
        ...where,
    }
    const count = await prisma.examinees.count(cnt)

    page = page > Math.ceil(count / rowsPer) ? 1 : page // rowsPer 의 변화로 현재 페이지가 없는 페이지가 된 경우

    const select = {
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
    }
    const orderAndSkip = {
        orderBy: [{ id: 'asc' }, { category: 'asc' }],
        // skip: (parseInt(page) - 1) * parseInt(rowsPer),
        // take: parseInt(rowsPer),
    }
    const contents = {
        ...select,
        ...where,
        ...orderAndSkip,
    }
    const items = await prisma.examinees.findMany(contents)
    return json({ items, count, page, rowsPer })
}
