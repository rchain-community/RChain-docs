module.exports = {
  title: "RChain",
  description: "Scalable. Secure. Sustainable.",
  markdown: {
    anchor: { permalink: false },
  },

  // Insert stuff in global <head>. More info: https://vuepress.vuejs.org/config/#title
  head: [
    ['link', { rel: 'icon', href: 'https://www.rchain.coop/assets/favicon-red.png' }],
  ],

  themeConfig: {
    nav: [
      { text: "Roadmap", link: "/ecosystem/roadmap.md" },
      { text: "Team", link: "/ecosystem/team.md" },
      { text: "Blog", link: "https://www.rchain.coop/blog" },
      { text: "Events", link: "/ecosystem/conferences.md" },
      { text: 'Community', items: [
        { text: "YouTube", link: "https://www.youtube.com/channel/UCSS3jCffMiz574_q64Ukj_w" },
        { text: "Discord", link: "https://discordapp.com/invite/fvY8qhx" },
        { text: "Calendar", link: "https://calendar.google.com/calendar/embed?src=2cj152c9nidh6glpr1d5g4eq28%40group.calendar.google.com&ctz=America%2FChicago" },
        { text: "Telegram", link: "https://t.me/rchain_coop" },
        { text: "Github", link: "https://github.com/rchain/" },
        { text: "Bounty Program", link: "/ecosystem/bounty-system.md" },
      ]},
      { text: "About",
       items: [
         { text: "Privacy Policy", link: "https://github.com/rchain/legaldocs/blob/master/Form%20of%20Privacy%20Policy.pdf" }
         ],
      },
      /*
      { text: "Platform", 
      items: [
          { text: "Overview", link: "/platform/introduction.md" },
          { text: "Rholang", link: "/platform/rho-revolution.md" },
          { text: "Features", link: "/platform/features/scalability.md" },
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
            { text: "Token Economics", link: "/ecosystem/token-economics.md" },
          ]},
          { text: 'Tooling', items: [
            { text: "Block Explorers", link: "/" },
          ]},
          { text: 'News', items: [
            { text: "Weekly News", link: "/API-reference/rnode.md" },
            { text: "Jobs", link: "/ecosystem/jobs.md" },
          ]},
          { text: 'Partners', items: [
            { text: "Pyrofex", link: "https://pyrofex.net" },
            { text: "Pithia", link: "/API-reference/rspace.md" },
            { text: "Reflective", link: "https://www.reflectiveventures.io/" },
            { text: "DApps portfolio", link: "https://www.rchain.coop/portfolio" },  // This one 
            // { text: "RCHain 'State of the DApps'", link: "/ecosystem/state-of-the-dapps.md" },
          ]},
        ],
      },
      { text: "Translations",
        items: [
          { text: "English", link: "/" },
          { text: "日本語", link: "/API-reference/rspace.md" },
        ],
      },
*/
    ],


    sidebar: [
      { title: "Technology Platform",
        collapsable: false,
        children: [
          'platform/',
          'platform/examples',
          'platform/ladl',
          'platform/rho-revolution',
          'platform/build.md',
          'platform/casper-pos',
          // platform/features
          'platform/research',
          'platform/rspace',
          'platform/rnode',
        ]
      },
      { title: "Ecosystem",
        collapsable: false,
        children: [
          'ecosystem/token-economics',
          'ecosystem/state-of-the-dapps',
          'ecosystem/rchain-coop',
          'ecosystem/rhoc-rev',
          'ecosystem/team',
          'ecosystem/conferences',
          'ecosystem/bounty-system',
          'ecosystem/roadmap',
        ],
      },
    ],
      // Root / Fallback Sidebar
      /*
      '/': [
        { text: "Coop Members",
         items: [
           { text: "Become a member", link: "/ecosystem/rchain-coop.md" },
           { text: "Weekly Community Debrief", link: "https://www.rchain.coop/blog/category/community-debriefs/" },
           { text: "Discord", link: "https://discordapp.com/invite/fvY8qhx" },
           { text: "Calendar", link: "https://calendar.google.com/calendar/embed?src=2cj152c9nidh6glpr1d5g4eq28%40group.calendar.google.com&ctz=America%2FChicago" },
           { text: "Bylaws and Board Meetings", link: "https://github.com/rchain/board" },
         ]
        },
        { text: "Supporters",
         items: [
           { text: "Pre-order REV with RHOC", link: "/ecosystem/rhoc-rev.md" },
         ],
        },
      ],
    },
    */
    /*
    sidebar: [
      {
        title: 'Halp!',
        collapsable: false,
        children: [
          '/platform/README.md',
        ],
      }
    ],
*/
  },
};

       // ******* Fodder
      // Defines "sidebar for the /platform/ section"
        /*
      '/platform/': [   
        ['/platform/introduction.md', 'Introduction'],
        '/platform/rho-revolution.md',
        {
          title: 'Features',
          collapsable: false,
          children: [ 
            '/platform/features/scalability.md',
            '/platform/features/efficiency.md',
            '/platform/features/dependability.md',
            '/platform/features/decentralisation.md',
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
        '/platform/research',
      ],
      */


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
