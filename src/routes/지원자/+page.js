export async function load({ fetch, url }) {
    console.log(url)
    const response = await fetch('/api/examinees?' + url.searchParams.toString())
    const json = await response.json()
    return {
        ...json,
        pathname: url.pathname,
        search: url.search.replaceAll(/\?+/g, '?'),
    }
}
