import { defineConfig } from 'vitepress';
import Nav from './nav.json';
import NavEn from './nav.en.json';
import Sidebar from './sidebar';
import SidebarEn from './sidebar.en';
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Kicktemp',
    description: 'Anleitungen und Dokumentationen für Kicktemp.shop Erweiterungen.',
    srcDir: 'src',
    markdown: {
        config: (md) => {
            md.use(mathjax3)
        }
    },
    outDir: 'dist',
    cleanUrls: true,
    srcExclude: ['**/_partials/*.md'],
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
    ],
    sitemap: {
        hostname: 'https://docs.kicktemp.com',
    },
    locales: {
        root: {
            label: 'Deutsch',
            lang: 'de-DE',
            themeConfig: {
                nav: Nav,
                sidebar: Sidebar,
                outline: { label: 'Auf dieser Seite' },
                docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
                editLink: {
                    pattern: 'https://github.com/kicktemp/docs/edit/main/src/:path',
                    text: 'Diese Seite auf GitHub bearbeiten',
                },
                darkModeSwitchLabel: 'Darstellung',
                sidebarMenuLabel: 'Menü',
                returnToTopLabel: 'Nach oben',
                langMenuLabel: 'Sprache wechseln',
                notFound: {
                    title: 'Seite nicht gefunden',
                    quote: 'Diese Seite gibt es (noch) nicht – vielleicht nur in einer anderen Sprache.',
                    linkText: 'Zur Startseite',
                },
            },
        },
        en: {
            label: 'English',
            lang: 'en-GB',
            link: '/en/',
            description: 'Guides and documentation for Kicktemp.shop extensions.',
            themeConfig: {
                nav: NavEn,
                sidebar: SidebarEn,
                notFound: {
                    title: 'Page not found',
                    quote: 'This page does not exist in English yet – most of our documentation is available in German.',
                    linkText: 'Go to the English home page',
                },
            },
        },
    },
    themeConfig: {
        logo: '/kicktemp_horiz.svg',
        siteTitle: false,
        editLink: {
            pattern: 'https://github.com/kicktemp/docs/edit/main/src/:path',
        },
        // https://vitepress.dev/reference/default-theme-config
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
