import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo, NavbarIcons } from "./components/Icons";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { MY } from "./constants";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { Pre } from "./components/Pre";
import DocslyClient from "@/components/DocslyClient";

const currentYear = new Date().getFullYear();

// node_modules/nextra-theme-docs/dist/index.tsx
const config: DocsThemeConfig = {
  banner: {
    key: `${currentYear}-CV-released`,
    text: (
      <a href="/cv" target="_blank" rel="noopener noreferrer">
        🎉 {currentYear} CV is released. Read more →
      </a>
    )
  },
  // head: <Head />,
  logo: <Logo />,
  darkMode: false,

  // primaryHue: 172.5,
  // primaryHue: 190.0,
  primaryHue: 210.0, // hyperlink color
  themeSwitch: {},
  nextThemes: {
    defaultTheme: "system"
  },
  project: {
    link: "https://github.com/XinYun2020"
  },
  direction: "ltr",
  faviconGlyph: "✦",
  docsRepositoryBase: "https://github.com/XinYun2020/nextra-docs",
  editLink: {
    component: () => null
  },
  feedback: {
    content: () => null
  },

  footer: {
    text: `\xA9 ${/* @__PURE__ */ new Date().getFullYear()} Xinyun Zhang.`,
    component: () => (
      <>
        {/* Your footer code */}
        <DocslyClient />
      </>
    )
  },
  components: {
    pre: Pre
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
    }
  },
  toc: {
    float: true,
    title: "Page Contents"
  },
  useNextSeoProps: () => ({
    titleTemplate: "%s \u2013 Xinyun Zhang",
    description: "Xinyun Zhang | %s"
  }),
  navigation: {
    prev: true,
    next: true
  },
  gitTimestamp: <></>,
  main: ({ children }) => (
    <div style={{ maxWidth: 1024, margin: "0 auto" }}>{children}</div>
  ),
  navbar: {
    extraContent: <NavbarIcons />
  }
};

export default config;
