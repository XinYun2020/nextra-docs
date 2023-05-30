import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

// node_modules/nextra-theme-docs/dist/index.tsx
const config: DocsThemeConfig = {
  logo: <span>@XinYun2020 Zettelkasten</span>,
  project: {
    link: "https://github.com/XinYun2020",
  },
  banner: {
    key: "2023-CV-released",
    text: (
      <a href="/cv" target="_blank">
        🎉 2023 CV is released. Read more →
      </a>
    ),
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
    text: `\xA9 ${/* @__PURE__ */ new Date().getFullYear()} Xinyun Zhang.`,
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: false,
    titleComponent({ title, type }) {
      if (type === "separator") {
        return (
          <div style={{ background: "cyan", textAlign: "center" }}>{title}</div>
        );
      }
      if (title === "About") {
        return <>❓ {title}</>;
      }
      return <>{title}</>;
    },
  },
  toc: {
    float: true,
    title: "Page Contents",
  },
  useNextSeoProps: () => ({ titleTemplate: "%s \u2013 Xinyun Zhang" }),
  navigation: {
    prev: true,
    next: true,
  },
  // i18n: [
  //   { locale: "en", text: "English" },
  //   { locale: "zh", text: "中文" },
  // ],
};

export default config;
