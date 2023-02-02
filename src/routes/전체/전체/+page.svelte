<script>
import ToJson from '$lib/ToJson.svelte'
import ExamineesTable from '$lib/examinees-table/ExamineesTable.svelte'

export let data
export let rowsPer = 10
const { page, params } = data
// $: startNum = (page - 1) * rowsPer + 1
</script>

<!-- <ToJson target={data} /> -->
<ExamineesTable {page} {rowsPer} {params} />
