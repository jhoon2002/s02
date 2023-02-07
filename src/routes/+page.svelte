<script>
import DataGrid from 'svelte-data-grid'
import MyCustomCell from '$lib/MyCustomCell.svelte'
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte'

export let data

let myColumnDefinitions = [
    {
        display: 'No',
        dataName: 'index',
        width: 50,
        cellComponent: MyCustomCell,
    },
    {
        display: '구분',
        dataName: 'category', // The key of a row to get the column's data from
        width: 100, // Width, in pixels, of column
        disallowResize: true, // Optional - disables resizing this column
    },
    {
        display: '시기',
        dataName: 'season',
        width: 100,
        disallowResize: true,
    },
    {
        display: '전형',
        dataName: 'type',
        width: 100,
        disallowResize: true,
    },
    {
        display: '과(전공)',
        dataName: 'season',
        width: 100,
        disallowResize: true,
    },
    {
        display: '수험번호',
        dataName: 'id',
        width: 150,
        disallowResize: true,
    },
    {
        display: '이름',
        dataName: 'name',
        width: 100,
        disallowResize: true,
    },
]
// console.log('data.items', data.items)
</script>

<!--
<OverlayScrollbarsComponent
    options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 300 } }}
    class="flex-auto"
>-->
<DataGrid columns={myColumnDefinitions} rows={data.items} allowColumnReordering={true} />
<!--</OverlayScrollbarsComponent>-->
