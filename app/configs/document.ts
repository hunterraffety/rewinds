import styles from "~/styles/out.css";

/**
 * Config Document Links
 *
 * Favicons
 * Manifest
 * Fonts
 * Style Sheets
 *
 * Please also check styles/global.css
 */

// EDITME
export const fontFamilies = [
  `family=Archivo:wght@400;700`,
  `family=Public+Sans`,
  `family=Gaegu`,
].join("&");

export const faviconLinks = [
  // Use this if you want to change the favicon quickly using emoji
  // {
  //   rel: "shortcut icon",
  //   href: "https://fav.farm/⏪",
  // },
  {
    rel: "shortcut icon",
    href: "/favicons/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicons/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicons/favicon-16x16.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicons/apple-touch-icon.png",
  },
];

const manifestLinks = [
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

const fontLinks = [
  {
    href: "https://fontbit.io",
    rel: "preconnect",
  },
  {
    href: `https://fontbit.io/css2?${fontFamilies}&display=swap`,
    rel: "stylesheet",
  },
];

const stylesheetLinks = [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export const configDocumentLinks = [
  ...faviconLinks,
  ...manifestLinks,
  ...fontLinks,
  ...stylesheetLinks,
];
