<script>
import 'uno.css'
import '@unocss/reset/tailwind.css'
import PageTransitions from '$lib/PageTransitions.svelte'
import 'overlayscrollbars/overlayscrollbars.css'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte'
import '$lib/css/styles.css'
import TopMenu from '$lib/top-menu/TopMenu.svelte'
import { goto } from '$app/navigation'
import topMenus from '$lib/topMenus.js'
import { getSide } from '$lib/utils/route.js'

/** @type {import('./$types').LayoutData} */
export let data

let sidesObj = getSide(topMenus, {})
let isOpen = true
</script>

<div class="h-screen flex flex-col">
    <header
        class="flex-none h-60px flex gap-2 items-center
                border-b border-b-solid border-gray-200 px-1rem"
    >
        <div
            class="text-1.2rem hover:bg-gray-100 px-2 py-1 rounded cursor-pointer"
            on:click={() => {
                goto('/')
            }}
            on:keyup={() => {
                goto('/')
            }}
        >
            연극원 입시 관리 시스템
        </div>
        <button
            class="border-none p-1
                    rounded-md cursor-pointer
                    hover:bg-gray-200"
            on:click={() => (isOpen = !isOpen)}
        >
            <div class="fluent:navigation-16-regular text-1.2rem" />
        </button>
        <div>
            <TopMenu items={topMenus} />
        </div>
    </header>
    <div class="flex-auto flex overflow-y-hidden">
        <div
            class="flex-none w-250px duration-200 flex overflow-x-hidden"
            class:w-250px={isOpen}
            class:translate-x--250px={!isOpen}
            class:w-0={!isOpen}
        >
            <OverlayScrollbarsComponent
                options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 300 } }}
                class="flex-auto"
            >
                <aside class="pt-0.5rem overflow-y-auto w-250px">
                    <div class="pr-2">
                        <!-- <SideMenu {items} routeId={data.routeId} /> -->
                        <PageTransitions type="fade" refresh={data.routeId}>
                            <svelte:component this={sidesObj[data.routeId]} />
                        </PageTransitions>
                    </div>
                </aside>
            </OverlayScrollbarsComponent>
        </div>
        <div class="overflow-y-auto flex-auto flex flex-col">
            <OverlayScrollbarsComponent
                options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 300 } }}
                class="flex-auto flex flex-col"
            >
                <div class="flex-auto h-full flex flex-col">
                    <article class="flex-auto">
                        <div class="px-1.8rem pt-1.5rem pb-5rem">
                            <PageTransitions refresh={data.routeId}>
                                <slot />
                            </PageTransitions>
                        </div>
                    </article>
                    <footer class="flex-none h-70px flex items-center justify-center p-2">
                        <div class="text-0.6rem uppercase tracking-2px">
                            Drama School, Korea National University of Arts
                        </div>
                    </footer>
                </div>
            </OverlayScrollbarsComponent>
        </div>
    </div>
</div>
