const summary = require('./summary.js');

module.exports = {
    title: 'とらとらTravis',
    description: '黒い画面を使うとしぬ呪いをかけられてしまったら。',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    themeConfig: {
        nav: [
            { text: 'ホーム', link: '/' },
            { text: '作品一覧', link: 'https://jamcha-aa.github.io/About/' },
            { text: 'GitHub', link: 'https://github.com/jamcha-aa/travisci/' }
        ],
        sidebar: {
            '/article/': summary.genSidebarConfig('目次')
        },
        search: false,
    },
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }]
    ],
    base: '/travisci/',
    dest: '.vuepress/dist'
}
