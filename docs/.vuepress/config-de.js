module.exports = {
    selectText: 'Sprachen',
    label: 'Deutsch',
    title: 'Hallo test',
    description: 'Ich bin eine Beschreibung',
    // text for the edit-on-github link
    editLinkText: 'Bearbeitet diese Seite auf GitHub',

    sidebar: {
        '/plugins/': [
            {
                title: 'KickCleanhead',
                collapsable: false,
                children: [
                    ['', 'kickcleanhead-intro'],
                    'kickcleanhead-requirements',
                    'kickcleanhead-config',
                ]
            },
            {
                title: 'KickGDPR',
                collapsable: false,
                children: [
                    ['', 'kickgdpr-intro'],
                    'kickgdpr-requirements',
                    'kickgdpr-config',
                ]
            }
        ],
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
                    'plugins/',
                    'komponenten/'
                ]
            },
        ]
    }
};
