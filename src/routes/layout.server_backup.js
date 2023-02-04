export async function load(event) {
    // const response = await event.fetch('/api/examinees?' + new URLSearchParams({}).toString(), {
    //     method: 'GET',
    // })
    // const items = await response.json()
    const items = []
    return {
        items,
    }
}

/*
export const actions = {
    hello: async (event) => {
        const response = await event.fetch(
            '/api/examinees?' +
                new URLSearchParams({
                    some: 'aaaaaa',
                }).toString(),
            {
                method: 'GET',
            },
        )
        const items = await response.json()
        return {
            items,
        }
    },
}
*/
