import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'de-DE',
    title: 'Kicktemp Dokumentation',
    description: 'Just playing around',

    // configure default theme
    theme: defaultTheme({
        logo: '/images/signet.png',
        repo: 'Kicktemp/docs',
        docsDir: 'docs',
        navbar: [
            // NavbarItem
            {
                text: 'DSGVO',
                link: '/dsgvo/',
            },
            // NavbarYOOtheme
            {
                text: 'YOOtheme Pro',
                children: [
                    {
                        text: 'Banners Source',
                        link: '/yootheme/bannerssource.md'
                    },
                    {
                        text: 'Colors',
                        link: '/yootheme/colors.md'
                    },
                    {
                        text: 'Contacts Source',
                        link: '/yootheme/contactssource.md'
                    },
                    {
                        text: 'ExitIntent',
                        link: '/yootheme/exitintent.md'
                    },
                    {
                        text: 'Files',
                        link: '/yootheme/files.md'
                    },
                    {
                        text: 'Form',
                        link: '/yootheme/form.md'
                    },
                    {
                        text: 'OpenGraph',
                        link: '/yootheme/opengraph.md'
                    },
                    {
                        text: 'rapidmail',
                        link: '/yootheme/rapidmail.md'
                    },
                    {
                        text: 'Sendinblue',
                        link: '/yootheme/sendinblue.md'
                    },
                    {
                        text: 'Sidebar',
                        link: '/yootheme/sidebar.md'
                    }
                ],
            }
        ],
    }),

    // use plugins
    plugins: [
        searchPlugin({
            // options
        }),
    ],
})
