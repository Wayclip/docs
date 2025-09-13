import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions = (): BaseLayoutProps => {
    return {
        nav: {
            title: <>Wayclip</>,
        },
        githubUrl: 'https://github.com/wayclip',
        links: [
            {
                text: 'Dashboard',
                url: 'https://dash.wayclip.com/dash',
            },
            {
                text: 'Docs',
                url: '/docs',
                active: 'nested-url',
            },
        ],
    };
};
