<script>
import Menu from '$lib/top-menu/Menu.svelte'
export let items
</script>

<div class="ml-4rem flex">
    {#each items as item}
        <Menu {item} />
    {/each}
</div>
