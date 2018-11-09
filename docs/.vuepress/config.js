module.exports = {
  title: "RChain",
  description: "Scalable. Secure. Sustainable.",
  markdown: {
    // anchor: { permalink: false },
  },

  // Insert stuff in global <head>. More info: https://vuepress.vuejs.org/config/#title
  head: [
    ['link', { rel: 'icon', href: 'https://www.rchain.coop/assets/favicon-red.png' }],
  ],

  themeConfig: {
    nav: [
      { text: "Roadmap", link: "/platform/roadmap.md" },
      { text: "Team", link: "/ecosystem/team.md" },
      { text: "Blog", link: "https://www.rchain.coop/blog" },
      { text: "Events", link: "/ecosystem/conferences.md" },
      { text: 'Community', items: [
        { text: 'Cooperative', link: 'ecosystem/rchain-coop.md' },
        { text: 'Portfolio', link: 'ecosystem/portfolio.md' },
        { text: "Developer Bounties**", link: "/ecosystem/bounty-system.md" },
        { text: "YouTube", link: "https://www.youtube.com/channel/UCSS3jCffMiz574_q64Ukj_w" },
        { text: "Discord", link: "https://discordapp.com/invite/fvY8qhx" },
        { text: "Calendar", link: "https://calendar.google.com/calendar/embed?src=2cj152c9nidh6glpr1d5g4eq28%40group.calendar.google.com&ctz=America%2FChicago" },
        { text: "Telegram", link: "https://t.me/rchain_coop" },
        { text: "Github", link: "https://github.com/rchain/" },
      ]},
      { text: "About",
       items: [
         { text: 'What is RChain?', link: '/introduction' },
         { text: "Privacy Policy", link: "https://github.com/rchain/legaldocs/blob/master/Form%20of%20Privacy%20Policy.pdf" }
         ],
      },
      /*
      { text: "Platform", 
      items: [
          { text: "Rholang", link: "/platform/rho-revolution.md" },
          { text: "Features", link: "/platform/features/scalability.md" },
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
      'introduction',
      { title: "Technology Platform",
        collapsable: false,
        children: [
          'platform/roadmap',
          'platform/rholang',
          // too rah-rah? 'platform/rho-revolution',
          // platform/features
          'platform/rnode',
          'platform/research',
        ]
      },
      { title: "Ecosystem",
        collapsable: false,
        children: [
          'ecosystem/team',
          'ecosystem/portfolio',
          'ecosystem/conferences',
          'ecosystem/rchain-coop',
          // combine with coop? 'ecosystem/bounty-system',
          'ecosystem/token-economics',
          'ecosystem/rhoc-rev',
        ],
      },
    ],
  },
};

       // ******* Fodder
      // Defines "sidebar for the /platform/ section"
        /*
          children: [ 
            '/platform/features/scalability.md',
            '/platform/features/efficiency.md',
            '/platform/features/dependability.md',
            '/platform/features/decentralisation.md',
          ],
      */
