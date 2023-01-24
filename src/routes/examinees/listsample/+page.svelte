<script>
import ButtonExaminees from './button.svelte'
</script>

<div class="text-1.5rem mb-2rem">수험생 입력</div>
<div class="text-1.2rem mb-2rem">연극원 수험생 현황</div>

<table>
    <thead>
        <tr>
            <th>구분</th>
            <th>차수</th>
            <th>전형</th>
            <th>지원자</th>
            <th>자격탈락(미등록)</th>
            <th>대상자</th>
            <th>합격자</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="16">8월입시</th>
            <th rowspan="8">1차시험</th>
            <th class="submit1">합계</th>
            <td>1,250</td>
            <td>260 </td>
            <td>15 </td>
            <td>13 </td>
        </tr>
        <tr>
            <th class="submit2">정원내전형</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
        </tr>
        <tr>
            <th>일반전형</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
        </tr>
        <tr>
            <th class="submit2">정원외전형</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
        </tr>
        <tr>
            <th>교육기회균등</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
        </tr>
        <tr>
            <th>재외국민및외국인</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
        </tr>
        <tr>
            <th>특수교육대상자</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
        </tr>
    </tbody>
</table>

<style>
table {
    @apply w-full;
}
td,
th {
    @apply text-0.9rem text-gray-500 px-6 py-2 border-b w-100;
}
thead th {
    @apply text-0.8rem;
}
th {
    @apply text-left;
}
td {
    @apply text-right;
}
.submit1,
.submit1 ~ td {
    @apply bg-gray-100;
}
.submit2,
.submit2 ~ td {
    @apply bg-green-50;
}
tbody th:not(.submit1):not(.submit2) {
    @apply pl-3rem;
}
.ex-tr {
    @apply border-b;
}
.submit1-td {
}
.submit2-td {
}
th.td,
th.td {
    @apply pl-1rem;
}
</style>
