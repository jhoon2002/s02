<script>
import 'uno.css'
import '@unocss/reset/tailwind.css'
import '~routes/styles.css'
import SideMenu from '~lib/side-menu/SideMenu.svelte'
import PageTransitions from '~lib/PageTransitions.svelte'
import 'overlayscrollbars/overlayscrollbars.css'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte'
import '~/assets/main.css'

/** @type {import('./$types').LayoutData} */
export let data

let isOpen = true
let items = [
    {
        text: 'HOME',
        icon: 'carbon:home',
        path: '/',
    },
    {
        text: '시험 대상자',
        icon: 'fluent:accessibility-16-regular',
        children: [
            {
                text: '대상자 입력',
                icon: 'fluent:alert-16-regular',
                path: '/examinees/new',
            },
            {
                text: '대상자 목록',
                icon: 'fluent:animal-cat-16-regular',
                children: [
                    {
                        text: '8월입시',
                        icon: 'fluent:attach-16-filled',
                        path: '/examinees/list8',
                    },
                    {
                        text: '10월입시',
                        icon: 'fluent:balloon-16-regular',
                        path: '/examinees/list10',
                    },
                    {
                        text: '11월입시',
                        icon: 'fluent:beaker-16-regular',
                        path: '/examinees/list11',
                    },
                ],
            },
        ],
    },
    {
        text: '개발 정보',
        icon: 'fluent:bookmark-multiple-16-regular',
        children: [
            {
                text: '개발 환경',
                icon: 'fluent:bowl-chopsticks-16-regular',
                path: '/dev/env',
            },
            {
                text: '스타일 가이드',
                icon: 'carbon:asterisk',
                path: '/dev/style-guide',
            },
        ],
    },
]
</script>

<div class="h-screen flex flex-col">
    <header
        class="flex-none h-60px flex gap-2 items-center
                border-b border-b-solid border-gray-200 px-5"
    >
        <div class="text-1.2rem">연극원 입시 관리 시스템</div>
        <button
            class="border-none p-1
                    rounded-md cursor-pointer
                    hover:bg-gray-200"
            on:click={() => (isOpen = !isOpen)}
        >
            <div class="fluent:navigation-16-regular text-1.2rem" />
        </button>
    </header>
    <div class="flex-auto flex overflow-y-hidden">
        <OverlayScrollbarsComponent
            options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 300 } }}
            class="flex-none w-250px "
        >
            <aside
                class="flex-none w-250px border-r
                   duration-200 pt-2rem
                    overflow-x-hidden overflow-y-auto"
                class:w-250px={isOpen}
                class:translate-x--250px={!isOpen}
                class:w-0={!isOpen}
            >
                <div class="pr-2">
                    <SideMenu {items} routeId={data.routeId} />
                </div>
            </aside>
        </OverlayScrollbarsComponent>
        <div class="overflow-y-auto flex-auto flex flex-col">
            <OverlayScrollbarsComponent
                options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 300 } }}
                class="flex-auto flex flex-col"
            >
                <div class="flex-auto h-full flex flex-col">
                    <article class="flex-auto">
                        <div class="p-5">
                            <PageTransitions refresh={data.routeId}>
                                <slot />
                            </PageTransitions>
                        </div>
                    </article>
                    <footer
                        class="flex-none h-70px flex items-center p-2 border-t border-t-solid border-t-gray-200"
                    >
                        <div class="text-0.9rem">Korea National University of Arts</div>
                    </footer>
                </div>
            </OverlayScrollbarsComponent>
        </div>
    </div>
</div>
