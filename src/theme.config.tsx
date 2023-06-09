import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo, NavbarIcons } from "./components/Icons";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { MY } from "./constants";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { Pre } from "./components/Pre";

// node_modules/nextra-theme-docs/dist/index.tsx
const config: DocsThemeConfig = {
  banner: {
    key: "2023-CV-released",
    text: (
      <a href="/cv" target="_blank">
        🎉 2023 CV is released. Read more →
      </a>
    ),
  },
  // head: <Head />,
  logo: <Logo />,
  darkMode: false,
  primaryHue: 172.5,
  // primaryHue: 190.9,
  themeSwitch: {},
  nextThemes: {
    defaultTheme: "system",
  },
  project: {
    link: "https://github.com/XinYun2020",
  },
  direction: "ltr",
  faviconGlyph: "✦",
  docsRepositoryBase: "https://github.com/XinYun2020/nextra-docs",
  editLink: {
    component: () => null,
  },
  feedback: {
    content: () => null,
  },

  footer: {
    text: `\xA9 ${/* @__PURE__ */ new Date().getFullYear()} Xinyun Zhang.`,
  },
  components: {
    pre: Pre,
  },
  sidebar: {
    // defaultMenuCollapseLevel: 2,
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
    extraContent: <NavbarIcons />,
  },
};

export default config;
