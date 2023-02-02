export function load(e) {
    const { url, route } = e
    const page = url.searchParams.get('page')
    return {
        routeId: route.id,
        page: isNaN(parseInt(page)) || parseInt(page) < 1 ? 1 : parseInt(page),
        params: url.searchParams.toString(),
    }
}
