export const actions = {
    hello: async ({ request, fetch }) => {
        const data = await request.formData()
        console.log('~~~~~도달했음~~~~', data)
        const response = await fetch(
            '/api/examinees?' +
                new URLSearchParams({
                    aaa: '7777',
                }).toString(),
        )
        const items = await response.json()
        return {
            items,
        }
        /*return {
            count: 10,
        }*/
    },
}
