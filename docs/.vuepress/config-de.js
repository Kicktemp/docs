module.exports = {
    selectText: 'Sprachen',
    label: 'Deutsch',
    title: 'Kicktemp Dokumentation',
    description: 'Kicktemp',
    // text for the edit-on-github link
    editLinkText: 'Bearbeitet diese Seite auf GitHub',
    sidebar: {
        '/plugins/': [
            {
                title: 'KickCleanhead',
                collapsable: false,
                children: [
                    ['kickcleanhead/', 'Einleitung'],
                    'kickcleanhead/requirements',
                    'kickcleanhead/configuration',
                ]
            },
            {
                title: 'KickGDPR',
                collapsable: false,
                children: [
                    ['kickgdpr/', 'Einleitung'],
                    'kickgdpr/requirements',
                    'kickgdpr/configuration',
                ]
            }
        ],
        '/komponenten/': [
            {
                title: 'KickGDPRChecker',
                collapsable: false,
                children: [
                    ['kickgdprchecker/', 'Einleitung'],
                    'kickgdprchecker/requirements',
                    'kickgdprchecker/configuration',
                ]
            },
        ],
        // fallback
        '/': [
            {
                title: 'Einleitung',
                collapsable: false,
                children: [
                    ''
                ]
            },
            {
                title: 'Plugins',
                collapsable: false,
                children: [
                    '/plugins/kickcleanhead/',
                    '/plugins/kickgdpr/'
                ]
            },
            {
                title: 'Komponenten',
                collapsable: false,
                children: [
                    '/komponenten/kickgdprchecker/'
                ]
            },
        ]
    }
};
