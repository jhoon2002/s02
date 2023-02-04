<script>
import ToJson from '$lib/ToJson.svelte'
import ExamineesTable from '$lib/examinees-table/ExamineesTable.svelte'

export let data
let res, cnt, page, rowsPer, params
$: {
    res = data.res
    cnt = data.cnt
    page = data.page
    rowsPer = data.rowsPer
    params = data.params.replaceAll(/&*page=\d*/g, '')
}
</script>

<ExamineesTable items={res} {cnt} {page} {rowsPer} {params} />
