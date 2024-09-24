import { defineConfig } from 'vitepress';
import Nav from './nav.json';
import Sidebar from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Kicktemp',
    description: 'Guides and Documentation for Essential Addons.',
    srcDir: 'src',
    outDir: 'dist',
    cleanUrls: true,
    srcExclude: ['**/_partials/*.md'],
    themeConfig: {
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
        ],
        footer: {
            //message: 'Essentials for YOOtheme Pro and ZOO',
            copyright:
                'Copyright © <a href="https://kicktemp.shop" target="_blank">Kicktemp Shop</a>',
        },
    },
});
