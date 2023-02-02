<script context="module">
export let params
export let page
export let rowsPer
export async function load({ fetch }) {
    const response = await fetch('/api/examinees?' + params)
    // await response.json()
    return {
        props: {
            items: 'aaaa',
        },
    }
}
// $: startNum = (page - 1) * rowsPer + 1
</script>

<script>
import ToJson from '$lib/ToJson.svelte'

export let items
</script>

{items}
<ToJson target={items} />
<!--

<div>총 {cnt}건</div>
<table class="table-fixed">
    <thead>
        <tr>
            <th>No</th>
            <th>구분</th>
            <th>시기</th>
            <th>전형</th>
            <th>과(전공)</th>
            <th>수험번호</th>
            <th>이름</th>
            <th>자격탈락</th>
        </tr>
    </thead>
    <tbody>
        {#each res.items as item, i}
            <tr>
                <td>{startNum + i}</td>
                <td>{item.category}</td>
                <td>{item.season}</td>
                <td>{item.type}</td>
                <td>{item.majors}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.disqualified_flag}</td>
            </tr>
        {/each}
    </tbody>
</table>

<BoardNav {page} total={cnt} {rowsPer} />
-->
<!--
<style>
table {
    @apply w-full;
}
th,
td {
    @apply px-2 py-2 border-b text-0.9rem text-left;
}
th {
    @apply text-0.8rem bg-gray-200;
}
</style>
-->
