module.exports = {
    theme: 'craftdocs',
    shouldPrefetch: () => false,
    locales: {
        '/': {
            lang: 'de-DE',
            title: 'Kicktemp Dokumentation',
        },
        '/en/': {
            lang: 'en-US',
            title: 'Kicktemp Documentation',
        }
    },
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated',
        docsRepo: 'kicktemp/docs',
        docsDir: 'docs',
        docsBranch: 'develop',
        editLinks: true,
        locales: {
            '/': require('./config-de'),
            '/en/': require('./config-en')
        },
        nav: [
            {
                text: 'Plugins',
                link: '/plugins/',
                // items: [
                //     {
                //         text: 'KickCleanhead',
                //         link: '/plugins/kickcleanhead/'
                //     },
                //     {
                //         text: 'KickGDPR',
                //         link: '/plugins/kickgdpr/'
                //     }
                // ]
            },
            {
                text: 'Komponenten',
                link: '/komponenten/',
                // items: [
                //     {
                //         text: 'KickGDPRChecker',
                //         link: '/komponenten/kickgpdrchecker'
                //     }
                // ]
            },
            {
                text: 'Onlineshop',
                link: 'https://kicktemp.shop'
            },
            {
                text: 'Support',
                link: 'https://support.kicktemp.com'
            }
        ],
        codeLanguages: {
            php: 'PHP',
            twig: 'Twig',
            css: 'CSS'
        }
    },
    markdown: {
        anchor: {
            level: [2, 3]
        },
        config(md) {
            let markup = require('vuepress-theme-craftdocs/markup')
            md.use(markup)
        }
    },
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }]
    ]
}
