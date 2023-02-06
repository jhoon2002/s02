<script>
import Menu from '$lib/top-menu/Menu.svelte'
export let items
</script>

<div class="ml-4rem flex">
    {#each items as item}
        {#if item.path !== '/'}
            <Menu {item} />
        {/if}
    {/each}
</div>
