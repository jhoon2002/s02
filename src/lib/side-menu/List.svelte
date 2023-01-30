<script>
import MenuIcon from './MenuIcon.svelte'
import { findRoute } from '$lib/utils/route.js'
import { onMount } from 'svelte'

export let item
let isOpen = false
let isOver = false
let hasRoute = false

export let routeId
$: hasRoute = findRoute(item.children, routeId)
let isRoute = false
$: isRoute = hasRoute
// console.log(findRoute(item.children, routeId))
// isOpen = hasRoute
onMount(() => {
    isOpen = hasRoute
})
</script>

<li>
    <button
        type="button"
        class="flex items-center w-full p-2 text-base font-normal h-45px
                text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100
                 dark:text-white dark:hover:bg-gray-700 side-menu-button"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        on:mouseover={() => (isOver = true)}
        on:focus={isOver}
        on:mouseleave={() => (isOver = false)}
        on:click={() => (isOpen = !isOpen)}
    >
        <div class="w-25px flex justify-center">
            <MenuIcon name={item.icon} {isOver} />
        </div>
        <span
            class="flex-1 ml-3 text-left whitespace-nowrap"
            class:text-black={hasRoute}
            class:font-600={hasRoute}
            class:underline-dotted={hasRoute}
        >
            {item.text}
        </span>
        <div
            class="fluent:chevron-right-12-regular duration-100"
            class:rotate-90={isOpen}
            class:rotate-0={!isOpen}
        />
    </button>
    <div
        class="overflow-hidden"
        class:max-ease-out={!isOpen}
        class:max-h-0={!isOpen}
        class:max-ease-in={isOpen}
        class:max-h-100vw={isOpen}
    >
        <slot />
    </div>
</li>
