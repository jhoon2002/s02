const common = () => {
    console.log('common...')
}
export const load = () => {
    common()
    console.log('~~load~~')
    return {
        kkk: 'kkkk',
        api: common,
        some: '**some**',
    }
}
