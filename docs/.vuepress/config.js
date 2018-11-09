/**
 ** Name: config.js
 ** Date：2018/11/09 11:59
 ** Author: muyi tongtong
 ** Description:
 **/

module.exports = {
  title: 'Vue standard - 代码规范',
  description: 'Vue-代码规范',
  // head: [
  //     ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `https://img1.rrcimg.com/dist/pc/images/favicon-60ac45c9.ico` }]
  // ],
  base: '/vue-standard/',
  host: '0.0.0.0',
  port: 8100,
  themeConfig: {
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        children: [
          ['/', '介绍'],
          ['/htmlStarted', 'Html 规则'],
          ['/cssStarted', 'Css 规则'],
          ['/vueStarted', 'Vue 规则'],
        ]
      }
    ],
    nav: [
      { text: 'HTML', link: 'htmlStarted' },
      { text: 'CSS', link: 'cssStarted' },
      { text: 'Vue', link: 'vueStarted' },
    
    ]
  }
}