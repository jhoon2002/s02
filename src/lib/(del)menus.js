const delMenus = [
    {
        text: 'HOME',
        icon: 'ph:house-line-bold',
        path: '/',
    },
    {
        text: '등록',
        icon: 'ph:person-simple-bold',
        children: [
            {
                text: '등록',
                icon: 'ph:fingerprint-duotone',
                path: '/지원자/대상자 입력',
            },
        ],
    },
    {
        text: '연기과',
        icon: 'ph:mask-happy-bold',
        children: [
            {
                text: '예술사',
                icon: 'ph:graduation-cap',
                path: '/연기과/예술사',
            },
            {
                text: '예술전문사',
                icon: 'ph:graduation-cap-fill',
                path: '/연기과/예술전문사',
            },
        ],
    },
    {
        text: '무대미술과',
        icon: 'ph:paint-brush-household-bold',
        children: [
            {
                text: '예술사',
                icon: 'ph:graduation-cap',
                path: '/무대미술과/예술사',
            },
            {
                text: '예술전문사',
                icon: 'ph:graduation-cap-fill',
                path: '/무대미술과/예술전문사',
            },
        ],
    },
    {
        text: '연출과',
        icon: 'ph:megaphone-bold',
        children: [
            {
                text: '예술사',
                icon: 'ph:graduation-cap',
                path: '/연출과/예술사',
            },
            {
                text: '예술전문사',
                icon: 'ph:graduation-cap-fill',
                path: '/연출과/예술전문사',
            },
        ],
    },
    {
        text: '극작과(극작)',
        icon: 'ph:film-script-bold',
        children: [
            {
                text: '예술사',
                icon: 'ph:graduation-cap',
                path: '/극작과(극작)/예술사',
            },
            {
                text: '예술전문사',
                icon: 'ph:graduation-cap-fill',
                path: '/극작과(극작)/예술전문사',
            },
        ],
    },
    {
        text: '극작과(서사창작)',
        icon: 'ph:pen-nib-straight-bold',
        children: [
            {
                text: '예술사',
                icon: 'ph:graduation-cap',
                path: '/극작과(서사창작)/예술사',
            },
            {
                text: '예술전문사',
                icon: 'ph:graduation-cap-fill',
                path: '/극작과(서사창작)/예술전문사',
            },
        ],
    },
    {
        text: '연극학과(연극학)',
        icon: 'ph:book-open-bold',
        children: [
            {
                text: '예술사',
                icon: 'ph:graduation-cap',
                path: '/연극학과(연극학)/예술사',
            },
            {
                text: '예술전문사',
                icon: 'ph:graduation-cap-fill',
                path: '/연극학과(연극학)/예술전문사',
            },
        ],
    },
    {
        text: '연극학과(예술경영)',
        icon: 'ph:chart-line-up-bold',
        children: [
            {
                text: '예술사',
                icon: 'ph:graduation-cap',
                path: '/연극학과(예술경영)/예술사',
            },
            {
                text: '예술전문사',
                icon: 'ph:graduation-cap-fill',
                path: '/연극학과(예술경영)/예술전문사',
            },
        ],
    },
    {
        text: '개발 정보',
        icon: 'ph:info-bold',
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
export default delMenus
