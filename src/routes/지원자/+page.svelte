<script>
import ToJson from '$lib/ToJson.svelte'
import ExamineesTable from '$lib/examinees-table/ExamineesTable.svelte'
import PageNav from '$lib/page-nav/PageNav.svelte'

export let data
function rowsPerHandler(e) {
    console.log('여기요..', e.detail)
}
</script>

<!-- <ToJson target={data} /> -->
<ExamineesTable
    items={data.items}
    count={data.count}
    begin={data.begin}
    on:changeRowsPer={rowsPerHandler}
/>
<PageNav count={data.count} page={data.page} pathname={data.pathname} search={data.search} />
