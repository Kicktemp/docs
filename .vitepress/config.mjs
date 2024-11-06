import { defineConfig } from 'vitepress';
import Nav from './nav.json';
import Sidebar from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Kicktemp',
    description: 'Anleitungen und Dokumentationen für Kicktemp.shop Erweiterungen.',
    srcDir: 'src',
    outDir: 'dist',
    cleanUrls: true,
    srcExclude: ['**/_partials/*.md'],
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
    ],
    sitemap: {
        hostname: 'https://docs.kicktemp.com',
    },
    themeConfig: {
        logo: '/kicktemp_horiz.svg',
        siteTitle: false,
        editLink: {
            pattern: 'https://github.com/kicktemp/docs/edit/main/src/:path',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: Nav,
        sidebar: Sidebar,
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/kicktemp/docs',
            },
            {
                icon: 'youtube',
                link: 'https://youtube.com/@kicktemp',
            },
            {
                icon: 'discord',
                link: 'https://discord.gg/fC45UbMQdg',
            },
        ],
        footer: {
            //message: 'Essentials for YOOtheme Pro and ZOO',
            copyright:
                'Copyright © 2024 <a href="https://kicktemp.shop" target="_blank">Kicktemp GmbH</a>',
        },
    },
});
