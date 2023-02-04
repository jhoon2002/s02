<script>
import ToJson from '$lib/ToJson.svelte'
import ExamineesTable from '$lib/examinees-table/ExamineesTable.svelte'
import PageNav from '$lib/page-nav/PageNav.svelte'

export let data
$: serialBeginNum = (data.page - 1) * data.items.length + 1
</script>

<!-- <ToJson target={data} /> -->
<ExamineesTable items={data.items} count={data.count} begin={serialBeginNum} />
<PageNav count={data.count} page={data.page} pathname={data.pathname} search={data.search} />
