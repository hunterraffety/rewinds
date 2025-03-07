import type { StackItems } from "~/types";

export const dataMainStacks: StackItems = [
  {
    url: "https://typescriptlang.org",
    name: "TypeScript",
    isChecked: true,
    description:
      "Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    subItems: [
      {
        name: "usehooks-ts",
        url: "https://usehooks-ts.com",
      },
    ],
  },
  {
    url: "https://nodejs.org",
    name: "Node.js",
    isChecked: true,
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    subItems: [
      {
        name: "npm",
        url: "https://npmjs.com",
      },
    ],
  },
  {
    url: "https://remix.run",
    name: "Remix",
    isChecked: true,
    description:
      "Full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience.",
    subItems: [
      {
        name: "@balavishnuvj/remix-seo",
        url: "https://github.com/balavishnuvj/remix-seo",
      },
      {
        name: "sergiodxa/remix-utils",
        url: "https://github.com/sergiodxa/remix-utils",
      },
      {
        name: "SeasonedSoftware/remix-forms",
        url: "https://remix-forms.seasoned.cc",
      },
    ],
  },
  {
    url: "https://tailwindcss.com",
    name: "Tailwind CSS v3",
    isChecked: true,
    description: "Utility-first CSS framework",
    subItems: [
      {
        name: "@tailwindcss/typography",
        url: "",
      },
      {
        name: "@tailwindcss/forms",
        url: "",
      },
      {
        name: "@tailwindcss/line-clamp",
        url: "",
      },
    ],
  },
  {
    url: "https://postcss.org",
    name: "PostCSS v8",
    isChecked: true,
    description: "Tool for transforming CSS with JavaScript",
  },
  {
    url: "https://react-icons.github.io/react-icons",
    name: "React Icons v1",
    isChecked: true,
    description:
      "SVG React icons of popular icon packs using ES6 imports. Such as Font Awesome, Heroicons, Material Design icons, and more.",
  },
  {
    url: "https://heroicons.com",
    name: "Heroicons v1",
    isChecked: true,
    description: "Beautiful hand-crafted SVG icons",
  },
  {
    url: "https://headlessui.dev",
    name: "Headless UI v1",
    isChecked: true,
    description:
      "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.",
  },
  {
    url: "https://radix-ui.com",
    name: "Radix UI v0",
    isChecked: true,
    description:
      "Unstyled, accessible components for building high‑quality design systems and web apps in React.",
    subItems: [
      {
        url: "https://tailwindcss-radix.vercel.app",
        name: "Tailwind CSS Radix",
        description:
          "Tailwind CSS utilities and variants for styling Radix state",
      },
      {
        name: "@radix-ui/react-icons",
        url: "",
      },
    ],
  },
  {
    url: "https://reach.tech",
    name: "Reach UI v0",
    isChecked: true,
    description: "Accessible foundation of your React-based design system.",
  },
  {
    url: "https://vechaiui.com",
    name: "Vechai UI v0",
    isChecked: true,
    description: "React Tailwind CSS components",
  },
  {
    url: "https://www.downshift-js.com",
    name: "Downshift",
    isChecked: true,
    description: "",
  },
  {
    url: "https://react-spectrum.adobe.com/react-aria",
    name: "React Aria v3",
    isChecked: false,
    description:
      "React Aria v3 — Library of React Hooks that provides accessible UI primitives for your design system",
  },
  {
    url: "https://ariakit.org",
    name: "Ariakit (v2)",
    isChecked: false,
    description: "Toolkit for building accessible web apps with React",
    subItems: [
      {
        url: "https://reakit.io",
        name: "Reakit",
        isChecked: false,
        description: "Toolkit for building accessible UIs",
      },
    ],
  },
  {
    url: "https://react-hook-form.com",
    name: "React Hook Form",
    isChecked: true,
    description:
      "Performant, flexible and extensible forms with easy-to-use validation.",
  },
  {
    url: "https://github.com/twobin/react-lazyload",
    name: "React Lazyload",
    isChecked: true,
    description:
      "Lazyload your components, images, or anything matters the performance.",
  },
  {
    url: "https://tanstack.com",
    name: "TanStack",
    isChecked: true,
    description:
      "Headless, type-safe, powerful utilities for complex workflows like Data Management, Data Visualization, Charts, Tables, and UI Components.",
    subItems: [
      {
        url: "https://tanstack.com/table/v8",
        name: "TanStack Table v8",
        description: "Headless UI for building powerful tables & datagrids.",
      },
      {
        url: "https://tanstack.com/virtual/v3",
        name: "TanStack Virtual v3",
        description: "Headless UI for Virtualizing Large Element Lists.",
      },
    ],
  },
  {
    url: "https://fonts.google.com",
    name: "Google Fonts",
    isChecked: true,
    description:
      "Making the web more beautiful, fast, and open through great typography.",
    subItems: [
      {
        url: "https://fontbit.io",
        name: "fontbit.io",
        isChecked: true,
        description: "Simple and privacy-friendly Google Fonts proxy.",
      },
    ],
  },
  {
    url: "https://markdoc.io",
    name: "Markdoc",
    isChecked: true,
    description: "Powerful, flexible, Markdown-based authoring framework.",
  },
  {
    url: "https://prismjs.com",
    name: "Prism.js",
    description:
      "Lightweight, extensible syntax highlighter, built with modern web standards in mind.",
  },
  {
    url: "https://prettier.io",
    name: "Prettier",
    isChecked: true,
    description: "Opinionated Code Formatter",
    subItems: [
      {
        url: "https://github.com/tailwindlabs/prettier-plugin-tailwindcss",
        name: "prettier-plugin-tailwindcss",
        isChecked: true,
        description:
          "A Prettier plugin for Tailwind CSS v3.0+ that automatically sorts classes based on our recommended class order.",
      },
      {
        url: "https://prettier.io/docs/en/precommit.html",
        name: "Pre-commit Hook with Prettier",
        isChecked: true,
        description:
          "You can use Prettier with a pre-commit tool. This can re-format your files that are marked as `staged` via `git add` before you commit.",
      },
    ],
  },
  {
    url: "https://eslint.org",
    name: "ESLint v8",
    isChecked: true,
    description:
      "Find and fix problems in your JavaScript code. Plugable JavaScript/TypeScript linter.",
  },
  {
    url: "https://stylelint.io",
    name: "Stylelint v14",
    isChecked: true,
    description:
      "Mighty, modern linter that helps you avoid errors and enforce conventions in your styles.",
  },
  {
    url: "https://commitlint.js.org",
    name: "commitlint",
    isChecked: true,
    description: "Lint commit messages.",
  },
  {
    url: "https://typicode.github.io/husky",
    name: "Husky Git hooks",
    isChecked: true,
    description: "Modern native git hooks made easy",
  },
  {
    url: "https://github.com/okonet/lint-staged",
    name: "lint-staged",
    isChecked: true,
    description:
      "Run linters against staged git files and don't let 💩 slip into your code base!",
  },
  {
    url: "",
    name: "",
    isChecked: true,
    description: "",
  },
];

export const dataReferenceStacks: StackItems = [
  {
    url: "https://tailwindui.com",
    name: "Tailwind UI",
    description: "Official Tailwind CSS Components",
  },
  {
    url: "https://hyperui.dev",
    name: "HyperUI",
    description: "Collection of free Tailwind CSS components",
  },
  {
    url: "https://layoutsfortailwind.lalokalabs.dev",
    name: "LaLoka Layouts",
    description: "Useful layouts for Tailwind CSS",
  },
  {
    url: "https://captaincss.hexdigital.com",
    name: "CaptainCSS",
    description:
      "Tailwind plugin to rapidly build layouts and compositions that scale with elegance",
  },
  {
    url: "https://flowbite.com",
    name: "Flowbite v1",
    description: "Tailwind CSS components",
  },
  {
    url: "https://daisyui.com",
    name: "daisyUI v2",
    description: "Tailwind CSS components",
  },
  {
    url: "https://snippets.alexandru.so",
    name: "Pondorasti/tailwindcss-snippets",
    description: "Collection of animation snippets made for Tailwind CSS",
  },
];
