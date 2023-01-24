// str: '2022-08-22 오전 9:40:04'
export function toDate(str) {
    if (str.includes('오전')) {
        const dates = str.split(' 오전 ')
        const times = dates[1].split(':')
        return dates[0] + ' ' + times[0].padStart(2, '0') + ':' + times[1] + ':' + times[2]
        // return str.replace(' 오전', '')
    } else if (str.includes('오후')) {
        const dates = str.split(' 오후 ')
        const times = dates[1].split(':')
        const h = times[0] * 1 === 12 ? 12 : times[0] * 1 + 12
        return dates[0] + ' ' + h + ':' + times[1] + ':' + times[2]
    } else {
        return
    }
}
