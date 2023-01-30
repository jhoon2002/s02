<script>
import Tojson from '$lib/ToJson.svelte'
// import { Table } from 'sveltestrap'

export let data
</script>

<table>
    <thead>
        <tr>
            <th>과정</th>
            <th>시기</th>
            <th>수험번호</th>
            <th>이름</th>
            <th>과</th>
            <th>전공</th>
            <th>생년월일</th>
            <th>휴대폰</th>
            <th>졸업연도</th>
            <th>학교명</th>
        </tr>
    </thead>
    <tbody>
        {#each data.data as item}
            <tr>
                <td>{item.category}</td>
                <td>{item.season}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.department}</td>
                <td>{item.major}</td>
                <td>{item.birthday}</td>
                <td>{item.cellphone}</td>
                <td>{item.ns_year}</td>
                <td>{item.ns_name}</td>
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
