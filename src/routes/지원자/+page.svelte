<script>
import ToJson from '$lib/ToJson.svelte'
import ExamineesTable from '$lib/examinees-table/ExamineesTable.svelte'
import PageNav from '$lib/page-nav/PageNav.svelte'
import { goto } from '$app/navigation'

export let data
async function rowsPerHandler(e) {
    goto(`${data.pathname}?${data.search.replaceAll(/&*rowsPer=\d*/g, '')}&rowsPer=${e.detail}`)
}
</script>

<ExamineesTable
    items={data.items}
    count={data.count}
    begin={data.begin}
    on:changeRowsPer={rowsPerHandler}
/>
<PageNav count={data.count} page={data.page} pathname={data.pathname} search={data.search} />
