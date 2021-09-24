module.exports = {
    title: 'wjm的网络笔记',
    description: '优雅',
    dest: '../docs/dest',
    port: '7777',
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://tse1-mm.cn.bing.net/th?id=OIP-C.jDcv2JKzvTces6Hfi9f8iAHaFj&w=123&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
        }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: 'https://profile.csdnimg.cn/A/2/9/3_wang_jiangmin',
        // 导航栏
        nav: [{
                text: '前端',
                items: [{
                        text: 'html',
                        link: '/guide/html'
                    },
                    {
                        text: 'js',
                        link: '/guide/js'
                    },
                    {
                        text: 'vue',
                        link: '/guide/vue'
                    }
                ]
            },
            {
                text: '后端',
                items: [{
                        text: 'java',
                        link: '/guide/java'
                    },
                    {
                        text: 'javaEE',
                        link: '/guide/javaEE'
                    }
                ]
            },
            {
                text: '服务器',
                items: [{
                        text: 'tomcat',
                        link: '/guide/server/tocmat'
                    },
                    {
                        text: 'httpd',
                        link: '/guide/server/httpd'
                    }
                ]
            },
            {
                text: '系统',
                items: [
                    {text:'linux',link:'/guide/os/linux/basics'},
                    {text:'windows',link:'/guide/os/windows'}
                ]
            },
            {
                text: '外链',
                items: [{
                        text: '百度',
                        link: 'www.baidu.com'
                    },
                    {
                        text: 'bing',
                        link: 'www.bing.com'
                    },
                    {
                        text: 'google',
                        link: 'www.google.com'
                    },
                    {
                        text: 'qson',
                        link: 'http://blog.qson.tech'
                    }
                ]
            }
        ],
        //  侧边栏
        sidebar: 'auto',
        sidebarDepth: 2, //栏目深度
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}