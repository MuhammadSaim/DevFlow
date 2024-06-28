import { SidebarLink, Theme } from '@/types';

// constants for the theme menu
export const theme: Array<Theme> = [
    {
        value: 'light',
        label: 'Light',
        icon: '/assets/icons/sun.svg',
    },
    {
        value: 'dark',
        label: 'Dark',
        icon: '/assets/icons/moon.svg',
    },
    {
        value: 'system',
        label: 'System',
        icon: '/assets/icons/computer.svg',
    },
];

// constants for the sidebar menu
export const sidebarLinks: Array<SidebarLink> = [
    {
        imgURL: '/assets/icons/home.svg',
        route: '/',
        label: 'Home',
    },
    {
        imgURL: '/assets/icons/users.svg',
        route: '/community',
        label: 'Community',
    },
    {
        imgURL: '/assets/icons/star.svg',
        route: '/collection',
        label: 'Collections',
    },
    {
        imgURL: '/assets/icons/suitcase.svg',
        route: '/jobs',
        label: 'Find Jobs',
    },
    {
        imgURL: '/assets/icons/tag.svg',
        route: '/tags',
        label: 'Tags',
    },
    {
        imgURL: '/assets/icons/user.svg',
        route: '/profile',
        label: 'Profile',
    },
    {
        imgURL: '/assets/icons/question.svg',
        route: '/ask-question',
        label: 'Ask a question',
    },
];
