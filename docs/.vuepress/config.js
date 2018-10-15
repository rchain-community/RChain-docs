module.exports = {
  title: "RChain",
  description: "The concurrent blockchain",
  markdown: {
    anchor: { permalink: false },
  },
  themeConfig: {
    nav: [
      { text: "Platform", 
      items: [
          { text: "Overview", link: "/platform/introduction.md" },
          { text: "Rho [R]evolution", link: "/platform/rho-revolution.md" },
          { text: "Features", link: "/platform/platform/scalability.md" },
          { text: "Platform Architecture", link: "/platform/archdoc/introduction.md" },
          { text: "Research", link: "/platform/research.md" },
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
            { text: "RHOC/REV swap", link: "https://developer.rchain.coop/token-swap" },
          ]},
          { text: 'Community', items: [
            { text: "Discord", link: "https://discordapp.com/invite/fvY8qhx" },
            { text: "Telegram", link: "https://t.me/rchain_coop" },
            { text: "Github", link: "https://github.com/rchain/" },
            { text: "Bounty Program", link: "/ecosystem/bounty-system.md" },
          ]},
          { text: 'Tooling', items: [
            { text: "Cryptofex IDE", link: "https://cryptofex.io/" },
            { text: "RChain.cloud", link: "https://rchain.cloud/" },
            { text: "Wallets", link: "/" },
            { text: "Block Explorers", link: "/" },
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
            { text: "DApps portfolio", link: "https://www.rchain.coop/portfolio" },  // This one 
            // { text: "RCHain 'State of the DApps'", link: "/ecosystem/state-of-the-dapps.md" },
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
      // Defines "sidebar for the /platform/ section"
      '/platform/': [   
        ['/platform/introduction.md', 'Introduction'],
        '/platform/rho-revolution.md',
        {
          title: 'Features',
          collapsable: false,
          children: [ 
            '/platform/platform/scalability.md',
            '/platform/platform/efficiency.md',
            '/platform/platform/dependability.md',
            '/platform/platform/decentralisation.md',
          ],
        },
        {
          title: 'Architecture',
          collapsable: false,
          children: [ 
            '/platform/archdoc/motivation.md',
            '/platform/archdoc/introduction.md',
            '/platform/archdoc/comparison-of-blockchains.md',
            '/platform/archdoc/architecture-overview.md',
            '/platform/archdoc/node-and-blockchain-semantics.md',
            '/platform/archdoc/contract-design.md',
            '/platform/archdoc/namespace-logic.md',
            '/platform/archdoc/execution-model.md',
            '/platform/archdoc/storage-and-query.md',
            '/platform/archdoc/casper-consensus-algorithm.md',
            '/platform/archdoc/applications.md',
            '/platform/archdoc/references.md',
          ],
        },
      ],


      // '/rholang/': [   // Defines "sidebar for the /Rholang/ section"
      //   ['/platform/introduction.md', 'Introduction'],
      //   '/platform/rho-revolution.md',
      //   {
      //     title: 'Features',
      //     collapsable: false,
      //     children: [ 
      //       '/platform/platform/scalability.md',
      //       '/platform/platform/efficiency.md',
      //       '/platform/platform/dependability.md',
      //       '/platform/platform/decentralisation.md',
      //     ],
      //   },
      //   {
      //     title: 'Architecture',
      //     collapsable: false,
      //     children: [ 
      //       '/platform/archdoc/introduction.md',
      //     ],
      //   },
      // ],


      // Fallback Sidebar (same as platform)
      '/': [
        ['/platform/introduction.md', 'Introduction'],
        '/platform/rho-revolution.md',
        {
          title: 'Features',
          collapsable: false,
          children: [ 
            '/platform/platform/scalability.md',
            '/platform/platform/efficiency.md',
            '/platform/platform/dependability.md',
            '/platform/platform/decentralisation.md',
          ],
        },
        {
          title: 'Architecture',
          collapsable: false,
          children: [ 
            '/platform/archdoc/motivation.md',
            '/platform/archdoc/introduction.md',
            '/platform/archdoc/comparison-of-blockchains.md',
            '/platform/archdoc/architecture-overview.md',
            '/platform/archdoc/node-and-blockchain-semantics.md',
            '/platform/archdoc/contract-design.md',
            '/platform/archdoc/namespace-logic.md',
            '/platform/archdoc/execution-model.md',
            '/platform/archdoc/storage-and-query.md',
            '/platform/archdoc/casper-consensus-algorithm.md',
            '/platform/archdoc/applications.md',
            '/platform/archdoc/references.md',
          ],
        },
      ],
    },
  },
};
