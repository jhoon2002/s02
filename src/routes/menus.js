const menus = [
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
export default menus
