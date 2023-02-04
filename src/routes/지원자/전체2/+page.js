export async function load({ fetch, parent }) {
    /* parent
        routeId: route.id,
        page: isNaN(parseInt(page)) || parseInt(page) < 1 ? 1 : parseInt(page),
        rowsPer: isNaN(parseInt(rowsPer)) || parseInt(rowsPer) < 1 ? 10 : parseInt(rowsPer),
        params: url.searchParams.toString(),
     */
    const { routeId, page, rowsPer, params } = await parent()

    const response = await fetch('/api/examinees?' + params)
    return await response.json()
}
