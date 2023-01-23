<script>
import Item from './Item.svelte'
import List from './List.svelte'
export let items
export let routeId
</script>

<ul class="pl-2">
    {#each items as item}
        {#if item.children?.length > 0}
            <List {item} {routeId}>
                <svelte:self items={item.children} {routeId} />
            </List>
        {:else}
            <Item {item} {routeId} />
        {/if}
    {/each}
</ul>
