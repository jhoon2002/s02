export function findPath(children, path) {
    children.some((item) => item.path === path)
}
export function findRoute(children, path) {
    for (let item of children) {
        /*console.log(
            '<' + item.text + '>',
            '(' + item.path + ')',
            '===',
            '(' + path + ')',
            'children: ' + item.children?.length,
        )*/
        if (item.children?.length > 0) {
            // console.log('call findAllPath')
            if (findRoute(item.children, path) === true) {
                return true
            }
        }
        // console.log('<<<<<<<', item.path, path)
        if (item.path === path) {
            // console.log('~~~return true~~~')
            return true
        }
    }
    return false
}
