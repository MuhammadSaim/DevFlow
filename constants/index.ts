import { Theme } from '@/types';

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
