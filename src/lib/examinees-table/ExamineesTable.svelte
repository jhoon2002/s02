<script>
import ToJson from '$lib/ToJson.svelte'
import PageNav from '$lib/page-nav/PageNav.svelte'
import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()

export let items
export let count
export let begin

let rows
let options = [
    { id: 1, text: '10' },
    { id: 2, text: '12' },
    { id: 3, text: '15' },
    { id: 4, text: '20' },
]
</script>

<div class="flex justify-between mb-1">
    <div>총 {count}건</div>
    <div>
        <select
            bind:value={rows}
            on:change={() => {
                dispatch('changeRowsPer', rows)
            }}
            class="text-0.9rem bg-gray-400 text-white p-1 rounded"
        >
            {#each options as option}
                <option value={option}>{option.text}</option>
            {/each}
        </select>
        <!-- <input
            type="input"
            class="rounded w-40px px-2 text-center text-0.9rem bg-gray-300 text-white"
            bind:value={rows}
            on:change={() => {
                dispatch('changeRowsPer', rows)
            }}
        /> -->
    </div>
</div>
<table class="table-fixed">
    <thead>
        <tr>
            <th class="rounded-l-lg w-6%" style="text-align: center">No</th>
            <th class="w-13%">구분</th>
            <th class="w-13%">시기</th>
            <th class="w-15%">전형</th>
            <th class="w-15%">과(전공)</th>
            <th class="w-21%">수험번호</th>
            <th class="w-10%">이름</th>
            <th class="rounded-r-lg w-7%">자격탈락</th>
        </tr>
    </thead>
    <tbody>
        {#each items as item, i}
            <tr class:bg-gray-50={i % 2 === 1} class="hover:bg-warmgray-100">
                <td class="text-center">{begin + i}</td>
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
    @apply px-2 py-2 text-0.9rem;
}
td {
    @apply border-b;
}
th {
    @apply text-0.8rem bg-gray-400 text-white text-left;
}
</style>
