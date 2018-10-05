module.exports = {
  title: "Alvalor",
  description: "A Radically Modular Blockchain Ecosystem",
  markdown: {
    anchor: { permalink: false },
  },
  themeConfig: {
    nav: [
      { text: "Project",
        items : [
          { text: "Website", link: "https://www.alvalor.org" },
          { text: "Airdrop", link: "https://drop.alvalor.org" },
          { text: "Github", link: "https://github.com/alvalor" },
        ],
      },
      // { text: "Ecosystem",
      //   items: [
      //     { text: "Butler", link: "#" },
      //     { text: "Explorer", link: "#" },
      //   ],
      // },
      // { text: "Partners",
      //   items: [
      //     { text: "Partner 1", link: "#" },
      //   ],
      // },
      { text: "Social",
        items: [
          { text: "Telegram", link: "https://t.me/alvalor" },
          { text: "Twitter", link: "https://twitter.com/alvalorproject" },
          { text: "Youtube", link: "https://www.youtube.com/channel/UCEthRszpNe452k56TYeU6mQ" },
        ],
      },
    ],
    sidebar: [
      "/introduction",
      "/roadmap",
      {
        title: "Philosophy",
        children: [
          "/philosophy/minimalism",
          "/philosophy/adaptability",
          "/philosophy/evolution",
        ],
      },
      // {
      //   title: "Technology",
      //   children: [
      //     "/technology/baselayer",
      //     "/technology/secondlayer",
      //     "/technology/crosschain",
      //   ]
      // },
      // {
      //   title: "Components",
      //   children: [
      //     "/components/microtransactions",
      //     "/components/conditional",
      //     "/components/tokenization",
      //   ]
      // },
      // {
      //   title: "Research",
      //   collapsable: true,
      //   children: [
      //     "/research/blockparams",
      //     "/research/difficulty",
      //     "/research/engine",
      //     "/research/chainlinks",
      //   ]
      // },
    ],
  },
};
