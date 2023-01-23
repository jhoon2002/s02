<script>
import Button from '@smui/button'
import { findRoute } from '../lib/utils/route.js'
let items = [
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
                text: '2대상자 목록',
                icon: 'fluent:airplane-take-off-16-regular',
                path: '/sample/s1',
            },
            {
                text: '3대상자 입력',
                icon: 'fluent:align-bottom-16-regular',
                path: '/sample/s2',
            },
            {
                text: '4대상자 목록',
                icon: 'fluent:animal-cat-16-regular',
                children: [
                    { text: '서브메뉴1', icon: 'fluent:attach-16-filled', path: '/sample/s3' },
                    {
                        text: '서브메뉴1',
                        icon: 'fluent:balloon-16-regular',
                        path: '/sample/s4',
                    },
                    { text: '서브메뉴2', icon: 'fluent:beaker-16-regular', path: '/sample/s5' },
                ],
            },
            {
                text: '5대상자 입력',
                icon: 'fluent:board-16-regular',
                path: '/sample/s6',
            },
            {
                text: '6대상자 목록',
                icon: 'fluent:book-open-16-regular',
                path: '/sample/s7',
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
                children: [
                    {
                        text: '서브메뉴1',
                        icon: 'fluent:building-factory-16-regular',
                        path: '/sample/s8',
                    },
                    {
                        text: '서브메뉴2',
                        icon: 'fluent:calendar-ltr-16-regular',
                        path: '/sample/s9',
                    },
                    {
                        text: '서브메뉴2',
                        icon: 'fluent:camera-16-regular',
                        path: '/sample/s10',
                    },
                ],
            },
            {
                text: '스타일 가이드',
                icon: 'carbon:asterisk',
                children: [
                    { text: '서브메뉴1', icon: 'fluent:chat-16-regular', path: '/sample/s11' },
                    {
                        text: '서브메뉴2',
                        icon: 'fluent:classification-16-regular',
                        path: '/sample/s12',
                    },
                    {
                        text: '서브메뉴2',
                        icon: 'fluent:code-text-16-regular',
                        path: '/sample/s13',
                    },
                    { text: '서브메뉴2', icon: 'fluent:color-16-regular', path: '/sample/s14' },
                ],
            },
        ],
    },
    {
        text: '개발 정보',
        icon: 'fluent:communication-16-regular',
        path: '/sample/s15',
    },
]
let flag = findRoute(items, '/sample/s8')
</script>

<Button class="bg-green text-white">Confirm</Button>
