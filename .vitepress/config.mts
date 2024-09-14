import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

const ogDescription = "My open source project center";
const ogImage =
  "https://picbed.cloudchewie.com/blog/index/favicon-transparent.png!mini";
const ogTitle = "App Center";
const ogUrl = "https://apps.cloudchewie.com";

export default defineConfig({
  lang: "zh_CN",
  cleanUrls: true,
  title: "App Center",
  titleTemplate: "Cloudchewie",
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
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    toc: { level: [1, 2, 3, 4, 5, 6, 7] },
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  themeConfig: {
    search: {
      provider: "local",
      options: {
        locales: {
          zh_CN: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "重置搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "暂无搜索结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "输入",
                  navigateText: "导航",
                  navigateUpKeyAriaLabel: "上箭头",
                  navigateDownKeyAriaLabel: "下箭头",
                  closeText: "关闭",
                  closeKeyAriaLabel: "esc",
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Robert-Stackflow/AppCenter/",
      },
    ],
  },
  locales: {
    zh_CN: {
      label: "简体中文",
      lang: "zh_CN",
      description: "我的开源项目中心",
      themeConfig: {
        outline: { level: [1, 3], label: "目录" },
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
              {
                text: "Bilibili",
                link: "https://space.bilibili.com/651449217",
              },
              { text: "GitHub", link: "https://github.com/Robert-Stackflow" },
            ],
          },
        ],
        sidebar: {
          "/zh_CN/cloudotp/": [
            { text: "简介", link: "/zh_CN/cloudotp/introduction" },
            { text: "下载", link: "/zh_CN/cloudotp/downloads" },
            {
              text: "基本介绍",
              collapsed: false,
              items: [
                { text: "关于OTP", link: "/zh_CN/cloudotp/about-otp" },
                { text: "添加令牌", link: "/zh_CN/cloudotp/add-token" },
              ],
            },
            {
              text: "进阶配置",
              collapsed: false,
              items: [
                { text: "手势锁", link: "/zh_CN/cloudotp/gesture-lock" },
                {
                  text: "数据库加密",
                  link: "/zh_CN/cloudotp/database-encrypt",
                },
                { text: "SQLCipher库丢失", link: "/zh_CN/cloudotp/sqlcipher" },
              ],
            },
            {
              text: "导入导出",
              collapsed: true,
              items: [
                { text: "导入", link: "/zh_CN/cloudotp/import" },
                {
                  text: "从第三方应用导入",
                  link: "/zh_CN/cloudotp/import-third-party",
                },
                { text: "导出", link: "/zh_CN/cloudotp/export" },
              ],
            },
            {
              text: "云备份",
              collapsed: true,
              items: [
                { text: "Onedrive", link: "/zh_CN/cloudotp/onedrive" },
                { text: "Dropbox", link: "/zh_CN/cloudotp/dropbox" },
                { text: "WebDAV", link: "/zh_CN/cloudotp/webdav" },
                { text: "符合S3标准的云存储", link: "/zh_CN/cloudotp/s3" },
              ],
            },
          ],
          "/zh_CN/loftify/": [
            { text: "简介", link: "/zh_CN/loftify/introduction" },
            { text: "外观设置", link: "/zh_CN/loftify/appearance-setting" },
            { text: "图片设置", link: "/zh_CN/loftify/image-setting" },
            { text: "LOFTER设置", link: "/zh_CN/loftify/lofter-setting" },
            { text: "实验室", link: "/zh_CN/loftify/experiment-setting" },
          ],
          "/zh_CN/moment/": [
            { text: "简介", link: "/zh_CN/moment/introduction" },
            { text: "展示页面", link: "/zh_CN/moment/preview" },
            {
              text: "内容管理",
              collapsed: false,
              items: [
                { text: "图片列表", link: "/zh_CN/moment/image-list" },
                { text: "分类列表", link: "/zh_CN/moment/category-list" },
              ],
            },
            {
              text: "系统管理",
              collapsed: false,
              items: [
                { text: "通用设置", link: "/zh_CN/moment/general-setting" },
                { text: "网站设置", link: "/zh_CN/moment/meta-setting" },
                { text: "内容设置", link: "/zh_CN/moment/blog-setting" },
                { text: "存储设置", link: "/zh_CN/moment/storage-setting" },
                { text: "菜单管理", link: "/zh_CN/moment/menu-manage" },
              ],
            },
          ],
        },
        docFooter: {
          prev: "上一篇",
          next: "下一篇",
        },
        footer: {
          message: `根据 MIT 许可证发布`,
          copyright: "Copyright © 2024 Cloudchewie",
        },
        langMenuLabel: "语言",
        lightModeSwitchTitle: "切换至浅色模式",
        darkModeSwitchTitle: "切换至深色模式",
        notFound: {
          title: "页面未找到",
          quote: "这里什么都没有",
          linkLabel: "返回首页",
          linkText: "返回首页",
          code: "404",
        },
        lastUpdated: {
          text: "最后更新于",
        },
      },
    },
    root: {
      label: "English",
      lang: "en",
      description: "My open source project center",
      themeConfig: {
        outline: { level: [1, 3], label: "On this page" },
        nav: [
          { text: "Home", link: "https://www.cloudchewie.com/" },
          { text: "Blog", link: "https://blog.cloudchewie.com/" },
          {
            text: "Projects",
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
            text: "Contact",
            items: [
              { text: "Email", link: "mailto:2014027378@qq.com" },
              {
                text: "Bilibili",
                link: "https://space.bilibili.com/651449217",
              },
              { text: "GitHub", link: "https://github.com/Robert-Stackflow" },
            ],
          },
        ],
        sidebar: {
          "/cloudotp/": [
            { text: "Introduction", link: "/cloudotp/introduction" },
            { text: "Downloads", link: "/cloudotp/downloads" },
            {
              text: "Basic",
              collapsed: false,
              items: [
                { text: "About OTP", link: "/cloudotp/about-otp" },
                { text: "Add Token", link: "/cloudotp/add-token" },
              ],
            },
            {
              text: "Advanced",
              collapsed: false,
              items: [
                { text: "Gesture Lock", link: "/cloudotp/gesture-lock" },
                {
                  text: "Database Encrypt",
                  link: "/cloudotp/database-encrypt",
                },
                {
                  text: "SQLCipher library is missing",
                  link: "/cloudotp/sqlcipher",
                },
              ],
            },
            {
              text: "Export and Import",
              collapsed: true,
              items: [
                { text: "Import", link: "/cloudotp/import" },
                {
                  text: "Import from third-party apps",
                  link: "/cloudotp/import-third-party",
                },
                { text: "Export", link: "/cloudotp/export" },
              ],
            },
            {
              text: "Cloud Backup",
              collapsed: true,
              items: [
                { text: "Onedrive", link: "/cloudotp/onedrive" },
                { text: "Dropbox", link: "/cloudotp/dropbox" },
                { text: "WebDAV", link: "/cloudotp/webdav" },
                { text: "S3-compliant cloud storage", link: "/cloudotp/s3" },
              ],
            },
          ],
          "/loftify/": [
            { text: "Introduction", link: "/loftify/introduction" },
            { text: "Appearance", link: "/loftify/appearance-setting" },
            { text: "Image", link: "/loftify/image-setting" },
            { text: "LOFTER", link: "/loftify/lofter-setting" },
            { text: "Experiment", link: "/loftify/experiment-setting" },
          ],
          "/moment/": [
            { text: "Introduction", link: "/moment/introduction" },
            { text: "Preview", link: "/moment/preview" },
            {
              text: "Content",
              collapsed: false,
              items: [
                { text: "Image List", link: "/moment/image-list" },
                { text: "Category List", link: "/moment/category-list" },
              ],
            },
            {
              text: "System",
              collapsed: false,
              items: [
                { text: "General", link: "/moment/general-setting" },
                { text: "Meta", link: "/moment/meta-setting" },
                { text: "Blog", link: "/moment/blog-setting" },
                { text: "Storage", link: "/moment/storage-setting" },
                { text: "Menu", link: "/moment/menu-manage" },
              ],
            },
          ],
        },
        footer: {
          message: `Released under the MIT License.`,
          copyright: "Copyright © 2024 Cloudchewie",
        },
        lightModeSwitchTitle: "Switch to light mode",
        darkModeSwitchTitle: "Switch to dark mode",
      },
    },
  },
});
