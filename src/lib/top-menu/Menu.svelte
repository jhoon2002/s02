<script>
import { clickOutside } from '$lib/utils/clickOutside.js'
import { fade } from 'svelte/transition'
import Item from '$lib/top-menu/Item.svelte'
export let item
// export let subItems
export let open = false
</script>

<div class="relative flex">
    {#if !item.path}
        <div
            class="hover:bg-gray-100 px-15px py-10px rounded cursor-pointer duration-200"
            on:click={() => {
                open = !open
            }}
            on:keyup={() => {
                open = !open
            }}
            use:clickOutside
            on:click_outside={() => {
                open = false
            }}
        >
            {item.text}
        </div>
    {:else}
        <a
            href={item.path}
            class="hover:bg-gray-100 px-15px py-10px rounded cursor-pointer duration-200"
        >
            <div>
                {item.text}
            </div>
        </a>
    {/if}
    {#if open}
        <div
            transition:fade={{ duration: 100 }}
            class="border px-0 py-2 w-110px rounded absolute left-5px top-40px bg-white shadow-md z-1000"
        >
            {#each item.children as item}
                <Item {item} />
            {/each}
        </div>
    {/if}
</div>
