export function load(e) {
    const { url, route } = e
    const page = url.searchParams.get('page')
    const rowsPer = url.searchParams.get('rowsPer')
    // url.searchParams.delete('page')

    return {
        routeId: route.id,
        page: isNaN(parseInt(page)) || parseInt(page) < 1 ? 1 : parseInt(page),
        rowsPer: isNaN(parseInt(rowsPer)) || parseInt(rowsPer) < 1 ? 10 : parseInt(rowsPer),
        params: url.searchParams.toString(),
    }
}
