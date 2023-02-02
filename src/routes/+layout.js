/** @type {import('./$types').LayoutLoad} */
export function load({ route }) {
    const rowsPers = {
        '/전체/전체': 15,
    }

    return {
        rowsPers,
        routeId: route.id,
    }
}
/*
export async function load(event) {
    const response = await event.fetch('/api/examinees?' + new URLSearchParams({}).toString(), {
        method: 'GET',
    })
    const items = await response.json()
    return {
        items,
    }
}
*/
