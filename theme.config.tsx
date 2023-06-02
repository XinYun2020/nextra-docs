import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./src/components/Icons/Logo";
import TwitterIcon from "./src/components/Icons/TwitterIcon";
import ThemeToggle from "./src/components/ThemeToggle/ThemeToggle";
import { MY } from "./src/constants";

// node_modules/nextra-theme-docs/dist/index.tsx
const config: DocsThemeConfig = {
  logo: <Logo />,
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
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </>
  ),

  footer: {
    text: `\xA9 ${/* @__PURE__ */ new Date().getFullYear()} Xinyun Zhang.`,
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: false,
    titleComponent({ title, type }) {
      if (type === "separator") {
        return (
          <div style={{ background: "teal", textAlign: "center" }}>{title}</div>
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
  useNextSeoProps: () => ({
    titleTemplate: "%s \u2013 Xinyun Zhang",
    description: "Xinyun Zhang | %s",
  }),
  navigation: {
    prev: true,
    next: true,
  },
  gitTimestamp: <></>,
  main: ({ children }) => (
    <div style={{ maxWidth: 1024, margin: "0 auto" }}>{children}</div>
  ),
  navbar: {
    extraContent: (
      <>
        <TwitterIcon />
        <ThemeToggle />
      </>
    ),
  },
  themeSwitch: {},
  darkMode: false,
  nextThemes: {
    defaultTheme: "system",
  },
};

export default config;
