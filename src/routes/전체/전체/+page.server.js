export const load = async (e) => {
    const { url, fetch } = e
    // console.log(url)
    const response = await fetch('/api/examinees?' + url.searchParams.toString())
    const items = await response.json()
    // console.log(items)
    return {
        items,
    }
}
export const actions = {
    hello: async ({ request, fetch, url }) => {
        /*const data = await request.formData()
        console.log('~~~~~도달했음~~~~', data)
        const response = await fetch(
            '/api/examinees?' +
                new URLSearchParams({
                    some: '7777',
                }).toString(),
        )
        const items = await response.json()
        console.log(items)
        return {
            items,
        }*/
        /*return {
            count: 10,
        }*/
    },
}
