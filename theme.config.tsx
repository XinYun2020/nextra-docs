import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

// node_modules/nextra-theme-docs/dist/index.tsx
const config: DocsThemeConfig = {
  logo: <span>XinYun2020 Zettelkasten</span>,
  project: {
    link: "https://github.com/XinYun2020",
  },
  banner: {
    dismissible: true,
    key: "nextra-banner",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  darkMode: true,
  direction: "ltr",
  faviconGlyph: "✦",
  docsRepositoryBase: "https://github.com/XinYun2020/nextra-docs",
  editLink: {
    text: " ",
  },
  feedback: {
    // content: "Question? Provide feedback \u2192",
    content: " ",
    labels: "feedback",
  },
  footer: {
    text: `Copyright ${
      /* @__PURE__ */ new Date().getFullYear()
    } \xA9 XinYun2020.`,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: false,
  },
  toc: {
    float: true,
    title: "Page Contents",
  },
  useNextSeoProps: () => ({ titleTemplate: "%s \u2013 XinYun2020" }),
};

export default config;
