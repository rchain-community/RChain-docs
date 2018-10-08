module.exports = {
  title: "RChain",
  description: "The concurrent blockchain",
  markdown: {
    anchor: { permalink: false },
  },
  themeConfig: {
    nav: [
      { text: "Guide", 
      items: [
          { text: "Introduction", link: "/guide/introduction.md" },
          { text: "The Rho [R]evolution", link: "/guide/rho-revolution.md" },
          { text: "Features", link: "/guide/platform/scalability.md" },
          { text: "Platform Architecture", link: "/guide/archdoc/introduction.md" },
          { text: "Research", link: "/guide/research.md" },
        ],
      },
      { text: "Rholang", link: "/rholang/overview.md" },
      { text: "API reference",
        items: [
          { text: "RNode", link: "/API-reference/rnode.md" },
          { text: "RSpace", link: "/API-reference/rspace.md" },
          { text: "Casper POS", link: "/API-reference/casper-pos.md" },
          { text: "LADL", link: "/API-reference/ladl.md" },
        ],
      },
      { text: "Ecosystem",
        items: [
          { text: 'Governance', items: [
            { text: "Philosophy", link: "/ecosystem/philosophy.md" },
            { text: "RChain Coop", link: "/ecosystem/rchain-coop.md" },
            { text: "Token Economics", link: "/ecosystem/token-economics.md" },
            { text: "Team", link: "/ecosystem/team.md" },
            { text: "RHOC/ROV swap", link: "/ecosystem/rhoc-rev-swap.md" },
          ]},
          { text: 'Community', items: [
            { text: "Discord", link: "https://www.discord.com" },
            { text: "Telegram", link: "https://www.telegram.com" },
            { text: "Bounty Program", link: "/ecosystem/bounty-system.md" },
          ]},
          { text: 'Tooling', items: [
            { text: "Cryptofex", link: "/API-reference/rnode.md" },
            { text: "RChain.cloud", link: "/API-reference/rspace.md" },
            { text: "Wallets", link: "/API-reference/casper-pos.md" },
            { text: "Block Explorers", link: "/API-reference/ladl.md" },
          ]},
          { text: 'News', items: [
            { text: "Weekly News", link: "/API-reference/rnode.md" },
            { text: "Roadmap", link: "/ecosystem/roadmap.md" },
            { text: "Conferences & Meetups", link: "/ecosystem/conferences.md" },
            { text: "Blog", link: "https://www.rchain.coop/blog" },
            { text: "Jobs", link: "/ecosystem/jobs.md" },
          ]},
          { text: 'Partners', items: [
            { text: "Pyrofex", link: "/API-reference/rnode.md" },
            { text: "Pithia", link: "/API-reference/rspace.md" },
            { text: "Reflective", link: "/API-reference/casper-pos.md" },
            { text: "RCHain 'State of the DApps'", link: "/ecosystem/state-of-the-dapps.md" },
          ]},
        ],
      },
      { text: "Getting Started",
        items: [
          { text: "Validators", link: "/API-reference/rnode.md" },
          { text: "Learn Rholang", link: "/API-reference/rspace.md" },
          { text: "Build DApps on RChain", link: "/API-reference/casper-pos.md" },
          { text: "Buy & Sell REV", link: "/API-reference/ladl.md" },
          { text: "Become a member", link: "/API-reference/ladl.md" },
        ],
      },
      { text: "Translations",
        items: [
          { text: "English", link: "/" },
          { text: "日本語", link: "/API-reference/rspace.md" },
        ],
      },
    ],



    sidebar: { 
      // Defines "sidebar for the /guide/ section"
      '/guide/': [   
        ['/guide/introduction.md', 'Introduction'],
        '/guide/rho-revolution.md',
        {
          title: 'Features',
          collapsable: false,
          children: [ 
            '/guide/platform/scalability.md',
            '/guide/platform/efficiency.md',
            '/guide/platform/dependability.md',
            '/guide/platform/decentralisation.md',
          ],
        },
        {
          title: 'Architecture',
          collapsable: false,
          children: [ 
            '/guide/archdoc/introduction.md',
          ],
        },
      ],


      // '/rholang/': [   // Defines "sidebar for the /Rholang/ section"
      //   ['/guide/introduction.md', 'Introduction'],
      //   '/guide/rho-revolution.md',
      //   {
      //     title: 'Features',
      //     collapsable: false,
      //     children: [ 
      //       '/guide/platform/scalability.md',
      //       '/guide/platform/efficiency.md',
      //       '/guide/platform/dependability.md',
      //       '/guide/platform/decentralisation.md',
      //     ],
      //   },
      //   {
      //     title: 'Architecture',
      //     collapsable: false,
      //     children: [ 
      //       '/guide/archdoc/introduction.md',
      //     ],
      //   },
      // ],


      // Fallback Sidebar (same as Guide)
      '/': [
        ['/guide/introduction.md', 'Introduction'],
        '/guide/rho-revolution.md',
        {
          title: 'Features',
          collapsable: false,
          children: [ 
            '/guide/platform/scalability.md',
            '/guide/platform/efficiency.md',
            '/guide/platform/dependability.md',
            '/guide/platform/decentralisation.md',
          ],
        },
        {
          title: 'Architecture',
          collapsable: false,
          children: [ 
            '/guide/archdoc/introduction.md',
          ],
        },
      ],
    },
  },
};
