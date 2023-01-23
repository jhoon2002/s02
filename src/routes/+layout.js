/** @type {import('./$types').LayoutLoad} */
export function load({ route }) {
    // console.log('route', route)
    return {
        routeId: route.id,
    }
}
