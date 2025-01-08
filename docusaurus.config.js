// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require("prism-react-renderer/themes/github");
//const darkCodeTheme = require("prism-react-renderer/themes/dracula");


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Playbooks Creator Workflows",
  tagline: "Guias Estratégicos para Potencializar Automação e Eficiência com ServiceNow Creator Workflows",
  url: "https://sncrwf.github.io",
  trailingSlash: false,
  baseUrl: "/playbooks/", // Set the /<baseUrl>/ pathname under which your site is served. For GitHub pages deployment, it is often '/<projectName>/'
  favicon: "img/favicon.ico",
  organizationName: "sncrwf", // GitHub pages deployment config.
  projectName: "workshops",

  staticDirectories: ["static"],

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  plugins: [
    "docusaurus-plugin-sass",
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },

    /*
     * TELEWORK CASE MGMT 101
     */
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "playbooks/clustering-automation",
        id: "clusteringautomation",
        routeBasePath: "playbooks/clustering-automation",
        sidebarPath: require.resolve("./playbooks/clustering-automation/sidebar.js"),
        breadcrumbs: false,
      }
    ],

    /*
     * ITSM MANUAL AUTOMATION
     */
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "playbooks/itsm-manual-automation",
        id: "itsmmanualautomation",
        routeBasePath: "playbooks/itsm-manual-automation",
        sidebarPath: require.resolve("./playbooks/itsm-manual-automation/sidebar.js"),
        breadcrumbs: false,
      },
    ],

  ],


  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        gtag: {
          trackingID: "G-P6HQJZPT0C",
        },
      },
    ],



  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: "img/creatorworkflowsnow.github.io.png",
      navbar: {
        title: "",
        logo: {
          alt: "Workshop Creator Workflows",
          src: "img/servicenow-logo.png",
          srcDark: "img/servicenow-logo_dark.png",
          href: "/",
          target: "_self",
        },
        items: [
          {
            label: 'Developer',
            href: 'https://developer.servicenow.com/',
            position: 'left',
            target: '_blank',
          },
          {
            label: 'Documentation',
            href: 'https://docs.servicenow.com/',
            position: 'left',
            target: '_blank',
          },
          {
            label: 'Training',
            href: 'https://nowlearning.servicenow.com/',
            position: 'left',
            target: '_blank',
          },
          {
            href: "https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io",
            position: "right",
            target: "_blank",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ].filter(Boolean),
      },

      footer: {
        style: "light",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Blog",
                href: "https://developer.servicenow.com/blog.do",
              },
              {
                label: "Dev Community",
                href: "https://www.servicenow.com/community/developer/ct-p/Developer",
              },
              {
                label: "Learning Paths",
                href: "https://developer.servicenow.com/dev.do#!/learn",
              },
              {
                label: "FREE ServiceNow Instance",
                href: "https://developer.servicenow.com/",
              },
              {
                label: "ServiceNow Community",
                href: "https://www.servicenow.com/community/",
              },
              {
                label: "Training",
                href: "https://nowlearning.servicenow.com/",
              },
            ],
          },
          {
            title: "Reference",
            items: [
              {
                label: "API Reference",
                href: "https://developer.servicenow.com/dev.do#!/reference",
              },
              {
                label: "Developer Glossary",
                href: "https://developer.servicenow.com/dev.do#!/guides/vancouver/now-platform/glossary/developer-glossary",
              },
              {
                label: "Now Create",
                href: "https://nowlearning.servicenow.com/nowcreate",
              },
              {
                label: "Product Documentation",
                href: "https://docs.servicenow.com/",
              },
            ],
          },
          {
            title: "About ServiceNow",
            items: [
              {
                label: "Customer Success Center",
                href: "https://www.servicenow.com/success.html",
              },
              {
                label: "Knowledge Conference",
                href: "https://knowledge.servicenow.com/",
              },
              {
                label: "LowCodeWorkshops.com",
                href: "http://lowcodeworkshops.com/",
              },
              {
                label: "ServiceNow.com",
                href: "https://www.servicenow.com/",
              },
              {
                label: "ServiceNow Blogs",
                href: "https://www.servicenow.com/blogs.html",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/servicenow",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/servicenow/",
                icon: 'instagram',
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/servicenow",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/servicenow",
              },
              {
                label: "TikTok",
                href: "https://www.tiktok.com/@servicenow",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/user/servicenowinc",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ServiceNow`,
      },

      /*
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      */

      // https://docusaurus.io/docs/search#using-algolia-docsearch
      algolia: {
        // The application ID provided by Algolia
        appId: "LE7UCUELDB",

        // Public API key: it is safe to commit it
        apiKey: "198c4f247869bbef524efbc0bfa89c95",

        indexName: "creatorworkflowsnowio",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
    }),
};

module.exports = config;