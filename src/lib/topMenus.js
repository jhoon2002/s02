import SideSelector from '$lib/side-selector/SideSelector.svelte'
import Test from '$lib/Test.svelte'

const topMenus = [
    {
        text: '첫화면',
        path: '/',
        side: Test,
    },
    {
        text: '등록',
        path: '/등록',
        side: Test,
    },
    {
        text: '지원자',
        path: '/지원자',
        side: SideSelector,
    },
    {
        text: '연기과',
        children: [
            {
                text: '예술사',
                path: '/연기과/예술사',
                side: Test,
            },
            {
                text: '예술전문사',
                path: '/연기과/예술전문사',
                side: Test,
            },
        ],
    },
    {
        text: '무대미술과',
        children: [
            {
                text: '예술사',
                path: '/무대미술과/예술사',
                side: Test,
            },
            {
                text: '예술전문사',
                path: '/무대미술과/예술전문사',
                side: Test,
            },
        ],
    },
    {
        text: '연출과',
        children: [
            {
                text: '예술사',
                path: '/연출과/예술사',
                side: Test,
            },
            {
                text: '예술전문사',
                path: '/연출과/예술전문사',
                side: Test,
            },
        ],
    },
    {
        text: '극작과(극작)',
        children: [
            {
                text: '예술사',
                path: '/극작과(극작)/예술사',
                side: Test,
            },
            {
                text: '예술전문사',
                path: '/극작과(극작)/예술전문사',
                side: Test,
            },
        ],
    },
    {
        text: '극작과(서사창작)',
        children: [
            {
                text: '예술사',
                path: '/극작과(서사창작)/예술사',
                side: Test,
            },
            {
                text: '예술전문사',
                path: '/극작과(서사창작)/예술전문사',
                side: Test,
            },
        ],
    },
    {
        text: '연극학과(연극학)',
        children: [
            {
                text: '예술사',
                path: '/연극학과(연극학)/예술사',
                side: Test,
            },
            {
                text: '예술전문사',
                path: '/연극학과(연극학)/예술전문사',
                side: Test,
            },
        ],
    },
    {
        text: '연극학과(예술경영)',
        children: [
            {
                text: '예술사',
                path: '/연극학과(예술경영)/예술사',
                side: Test,
            },
            {
                text: '예술전문사',
                path: '/연극학과(예술경영)/예술전문사',
                side: Test,
            },
        ],
    },
    {
        text: '테스트',
        path: '/테스트',
        side: Test,
    },
]
export default topMenus
