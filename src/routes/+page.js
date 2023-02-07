export async function load({ fetch, url }) {
    const response = await fetch('/api/examinees-all' + url.search)
    /*
    json: { items, count, page } //from api
   */
    const json = await response.json()
    return {
        ...json,
        pathname: url.pathname,
        search: url.searchParams.toString(),
        begin: (json.page - 1) * json.items.length + 1,
    }
}
