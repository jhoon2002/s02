<script>
import ToJson from '$lib/ToJson.svelte'

export let data
</script>

<table>
    <thead>
        <tr>
            <th>구분</th>
            <th>시기</th>
            <th>전형</th>
            <th>과(전공)</th>
            <th>수험번호</th>
            <th>이름</th>
            <th>지원자격</th>
        </tr>
    </thead>
    <tbody>
        {#each data.items as item}
            <tr>
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
