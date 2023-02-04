<script>
import Icon from '@iconify/svelte'

export let count
export let page = 1
export let rowsPer = 10
export let navsPer = 10
export let search
export let pathname

$: search = search.replaceAll(/&*page=\d*/g, '')

$: total = count

$: page = parseInt(page) < 1 ? 1 : parseInt(page)

$: totalPages = Math.ceil(total / rowsPer)

$: beginPage = Math.floor((page - 1) / navsPer) * navsPer + 1

$: endPage = rowsPer * (beginPage + navsPer - 1) <= total ? beginPage + navsPer - 1 : totalPages

const pages = []
$: {
    pages.length = 0
    for (let i = beginPage; i <= endPage; i++) {
        pages.push(i)
    }
}
</script>

<div class="flex flex-row items-center justify-center gap-1px mt-7">
    {#if pages[0] > 1}
        <a
            href="{pathname}{search}&page=1"
            class="px-2 py-8px hover:bg-gray-200 rounded cursor-pointer duration-100 text-0.9rem"
        >
            <Icon icon="fluent:arrow-previous-12-filled" />
        </a>
        <a
            href="{pathname}{search}&page={pages[0] - 1}"
            class="px-2 py-8px hover:bg-gray-200 rounded cursor-pointer duration-100 text-0.9rem"
        >
            <Icon icon="fluent:chevron-left-12-filled" class="mb-1px" />
        </a>
    {/if}
    {#each pages as nPage}
        <a
            href="{pathname}{search}&page={nPage}"
            class="px-2 py-1 hover:bg-gray-200 rounded cursor-pointer duration-100 text-0.9rem"
            class:shadow-sm={page === nPage}
            class:shadow-gray-600={page === nPage}
        >
            {nPage}
        </a>
    {/each}
    {#if endPage < totalPages}
        <a
            href="{pathname}{search}&page={endPage + 1}"
            class="px-2 py-8px hover:bg-gray-200 rounded cursor-pointer duration-100 text-0.9rem"
        >
            <Icon icon="fluent:chevron-right-12-filled" />
        </a>
        <a
            href="{pathname}{search}&page={totalPages}"
            class="px-2 py-8px hover:bg-gray-200 rounded cursor-pointer duration-100 text-0.9rem"
        >
            <Icon icon="fluent:arrow-next-12-filled" />
        </a>
    {/if}
</div>
