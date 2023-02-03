export async function load(e) {
    const { url, fetch } = e
    console.log(url.searchParams.toString())
    // const params = url.searchParams.toString()
    // console.log(params)
    // const response = await fetch('/api/examinees?' + params)
    // return await response.json()
}
