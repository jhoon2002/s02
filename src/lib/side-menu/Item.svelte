<script>
import MenuIcon from './MenuIcon.svelte'
export let item
let isOver = false
export let routeId
</script>

<li>
    <a
        href={item.path}
        class="flex items-center p-2 text-base font-normal h-45px
                text-gray-900 rounded-lg dark:text-white hover:bg-gray-100
                dark:hover:bg-gray-700"
        on:mouseover={() => (isOver = true)}
        on:focus={isOver}
        on:mouseleave={() => (isOver = false)}
    >
        <div class="w-25px flex justify-center">
            <MenuIcon name={item.icon} {isOver} />
        </div>

        <span
            class="ml-3 duration-500"
            class:font-500={item.path === routeId}
            class:text-gray-900={item.path !== routeId}
            class:text-rose-600={item.path === routeId}
            class:underline={item.path === routeId}
            class:underline-dashed={item.path === routeId}
            class:underline-offset-6={item.path === routeId}
        >
            {item.text}
        </span>
    </a>
</li>
