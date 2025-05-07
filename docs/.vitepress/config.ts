import { defineConfig } from 'vitepress'

export default defineConfig({
    title: '哪吒UI',
    description: 'NZ-UI 组件库',
    themeConfig: {
        lastUpdated: {
            text: '最后更新时间'
        },
        editLink: {
            text: '编辑此网站',
            pattern: 'https://github.com/NZ-UI/NZ-UI/edit/main/:path',
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present NZ-UI'
        },
        nav: [
            { text: '指南', link: '/guide/introduce' },
            { text: '组件', link: '/components/icon', activeMatch: '/components/' },
            { text: '主题', link: '/theme/introduce' },
            { text: '其他', link: '/other/introduce' }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    items: [
                        { text: '安装', link: '/guide/install' },
                        { text: '快速开始', link: '/guide/quickstart'} 
                    ]
                }
            ],
            '/components/': [
                {
                    text: '组件',
                    items: [
                        { text: '按钮 Button', link: '/components/button' },
                        { text: '图标 Icon', link: '/components/icon' }
                    ]
                }
            ]
        }
    }
})