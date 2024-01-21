import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

const ogDescription = "我的开源项目中心";
const ogImage = "https://picbed.cloudchewie.com/img/favicon.ico";
const ogTitle = "App Center";
const ogUrl = "https://apps.cloudchewie.com";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "App Center",
  description: "我的开源项目中心",
  lang: "zh",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://picbed.cloudchewie.com/img/favicon.ico",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@RobertStackflow" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
  ],
  themeConfig: {
    nav: [
      { text: "主页", link: "https://www.cloudchewie.com/" },
      { text: "博客", link: "https://blog.cloudchewie.com/" },
      {
        text: "项目",
        items: [
          { text: "CloudOTP", link: "/cloudotp/introduction" },
          { text: "HUST-Courses-Archive", link: "/hust-cources-archive/introduction" },
        ],
      },
      {
        text: "联系我",
        items: [
          { text: "邮箱", link: "mailto:2014027378@qq.com" },
          { text: "Bilibili", link: "https://space.bilibili.com/651449217" },
          { text: "Github", link: "https://github.com/Robert-Stackflow" } ,
        ],
      },
    ],

    sidebar: [
      {
        text: "CloudOTP",
        link: "/cloudotp/introduction",
      },
      {
        text: "快速上手",
        items: [
          {
            text: "页面配置 📦",
            collapsed: false,
            items: [
              { text: "front-matter的基本认识", link: "/cloudotp/front-matter" },
              { text: "标签页配置", link: "/cloudotp/tags" },
              { text: "分类页配置", link: "/cloudotp/classify" },
              { text: "404页面配置", link: "/cloudotp/404" },
            ],
          },
          {
            text: "进阶配置 🚀",
            collapsed: false,
            items: [
              { text: "友情链接配置", link: "/cloudotp/links" },
              { text: "留言板页面配置", link: "/cloudotp/message" },
              { text: "我的装备页面配置", link: "/cloudotp/equipment" },
              { text: "追番页面配置", link: "/cloudotp/bilibili" },
              { text: "关于页面配置", link: "/cloudotp/about" },
              { text: "音乐馆页配置", link: "/cloudotp/music" },
              { text: "朋友圈页面配置", link: "/cloudotp/fcircle" },
              { text: "相册页面配置", link: "/cloudotp/album" },
              { text: "首页即刻说说页面配置", link: "/cloudotp/essay" },
            ],
          },
        ],
      },
    ],

    // algolia: {
    //   appId: "CITURDDECN",
    //   apiKey: "e5c83518b67da17a254574c31759596b",
    //   indexName: "anheyu",
    //   // searchParameters: {
    //   //   facetFilters: ["tags:en"],
    //   // },
    //   locales: {
    //     zh: {
    //       placeholder: "搜索文档",
    //       translations: {
    //         button: {
    //           buttonText: "搜索文档",
    //           buttonAriaLabel: "搜索文档",
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: "清除查询条件",
    //             resetButtonAriaLabel: "清除查询条件",
    //             cancelButtonText: "取消",
    //             cancelButtonAriaLabel: "取消",
    //           },
    //           startScreen: {
    //             recentSearchesTitle: "搜索历史",
    //             noRecentSearchesText: "没有搜索历史",
    //             saveRecentSearchButtonTitle: "保存至搜索历史",
    //             removeRecentSearchButtonTitle: "从搜索历史中移除",
    //             favoriteSearchesTitle: "收藏",
    //             removeFavoriteSearchButtonTitle: "从收藏中移除",
    //           },
    //           errorScreen: {
    //             titleText: "无法获取结果",
    //             helpText: "你可能需要检查你的网络连接",
    //           },
    //           footer: {
    //             selectText: "选择",
    //             navigateText: "切换",
    //             closeText: "关闭",
    //             searchByText: "搜索提供者",
    //           },
    //           noResultsScreen: {
    //             noResultsText: "无法找到相关结果",
    //             suggestedQueryText: "你可以尝试查询",
    //             reportMissingResultsText: "你认为该查询应该有结果？",
    //             reportMissingResultsLinkText: "点击反馈",
    //           },
    //         },
    //       },
    //     },
    //   },
    // },

    footer: {
      message: `Released under the MIT License.`,
      copyright: "Copyright © 2024 Cloudchewie",
    },

    editLink: {
      pattern: "https://github.com/Robert-Stackflow/AppCenter/edit/main/:path",
      text: "在Github上编辑此页面",
    },
    lastUpdated: {
      text: "更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    lightModeSwitchTitle: "切换至浅色模式",
    darkModeSwitchTitle: "切换至深色模式",
    search: {
      provider: 'local'
    }
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  locales: {
    root: { label: "简体中文", lang: "zh" },
  },
});
