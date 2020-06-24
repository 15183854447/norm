module.exports = {
    title: '前端开发规范初稿',
    description: '前端开发规范初稿',
    base: '/webnorm/', // 将部署站点的基本URL
    head: [],
    DEST: '.vuepress/dist', // 指定输出目录
    themeConfig: {
        lastUpdated: '上次更新',
        serviceWorker: {
            updatePopup: {
                message: '发现新内容可用',
                buttonText: '刷新'
            }
        },
        displayAllHeaders: true, // 展开所有标题
        editLinks: true,
        nav: [
            {
                text: "快速入门",
                link: "/"
            },
            {
                text: "项目规范",
                link: "/name/"
            },
            {
                text: '代码规范',
                items: [
                    {
                        text: 'HTML',
                        link: '/html/'
                    },
                    {
                        text: 'CSS',
                        link: '/css/'
                    },
                    {
                        text: 'JavaScript',
                        link: '/javascript/'
                    },
                    {
                        text: 'ECMAScript 6',
                        link: '/es6/'
                    }
                ]
            },
        ],
        sidebar: {
            // 命名规范
            '/name/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/name/']
                }
            ],
            // 代码规范 html
            '/html/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/html/']
                }
            ],
            // 代码规范 css
            '/css/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/css/']
                }
            ],
            // 代码规范 javascript
            '/javascript/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/javascript/']
                }
            ],
            // 代码规范 es6
            '/ES6/': [
                {
                    title: '',
                    collapsable: false,
                    children: ['/ES6/']
                }
            ],
        }
    },
    Markdown: {
        lineNumbers: true,// 是否在每个代码块的左侧显示行号。
    }
};
