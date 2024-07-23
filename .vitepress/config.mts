import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

const ogDescription = "我的开源项目中心";
const ogImage =
  "https://picbed.cloudchewie.com/blog/index/favicon-transparent.png!mini";
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
        href: "https://picbed.cloudchewie.com/blog/index/favicon-transparent.png!mini",
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
          {
            text: "Loftify",
            link: "https://github.com/Robert-Stackflow/Loftify",
          },
          {
            text: "Moment",
            link: "https://github.com/Robert-Stackflow/Moment",
          },
          {
            text: "CloudOTP",
            link: "https://github.com/Robert-Stackflow/CloudOTP",
          },
        ],
      },
      {
        text: "联系我",
        items: [
          { text: "邮箱", link: "mailto:2014027378@qq.com" },
          { text: "Bilibili", link: "https://space.bilibili.com/651449217" },
          { text: "Github", link: "https://github.com/Robert-Stackflow" },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Robert-Stackflow/AppCenter/' },
    ],

    sidebar: {
      "/cloudotp/": [
        {
          text: "简介",
          link: "/cloudotp/introduction",
        },
        {
          text: "基本介绍",
          collapsed: false,
          items: [
            { text: "关于OTP", link: "/cloudotp/about-otp" },
            { text: "添加令牌", link: "/cloudotp/add-token" },
            { text: "导入和导出", link: "/cloudotp/export-import" },
          ],
        },
        {
          text: "进阶配置",
          collapsed: false,
          items: [
            { text: "密码锁", link: "/cloudotp/lock" },
            { text: "Dropbox", link: "/cloudotp/dropbox" },
          ],
        },
      ],
      "/loftify/": [
        { text: "简介", link: "/loftify/introduction" },
        { text: "外观设置", link: "/loftify/appearance-setting" },
        { text: "图片设置", link: "/loftify/image-setting" },
        { text: "LOFTER设置", link: "/loftify/lofter-setting" },
        { text: "实验室", link: "/loftify/experiment-setting" },
      ],
      "/moment/": [
        { text: "简介", link: "/moment/introduction" },
        { text: "展示页面", link: "/moment/preview" },
        {
          text: "内容管理",
          collapsed: false,
          items: [
            { text: "图片列表", link: "/moment/image-list" },
            { text: "分类列表", link: "/moment/category-list" },
          ],
        },
        {
          text: "系统管理",
          collapsed: false,
          items: [
            { text: "通用设置", link: "/moment/general-setting" },
            { text: "网站设置", link: "/moment/meta-setting" },
            { text: "内容设置", link: "/moment/blog-setting" },
            { text: "存储设置", link: "/moment/storage-setting" },
            { text: "菜单管理", link: "/moment/menu-manage" },
          ],
        },
      ],
    },

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
    lightModeSwitchTitle: "切换至浅色模式",
    darkModeSwitchTitle: "切换至深色模式",
    search: {
      provider: "local",
    },
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    toc: { level: [1, 2, 3, 4, 5, 6, 7] },
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  locales: {
    root: { label: "简体中文", lang: "zh" },
  },
});
