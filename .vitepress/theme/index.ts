import { h } from "vue";
import Theme from "vitepress/theme";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import "./style.css";

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
    });
  },
  enhanceApp({ app, router, siteData }) {
    enhanceAppWithTabs(app);
  },
};

export interface Project {
  avatar: string
  name: string
  title?: string
  org?: string
  orgLink?: string
  desc?: string
  links?: string
  sponsor?: string
  actionText?: string
}