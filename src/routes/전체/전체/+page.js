export const load = async (e) => {
    const { url, fetch } = e
    const response = await fetch('/api/examinees?' + url.searchParams.toString())
    const page = url.searchParams.get('page')
    const items = await response.json()
    return {
        page,
        items: items.res,
        count: items.cnt,
    }
}
