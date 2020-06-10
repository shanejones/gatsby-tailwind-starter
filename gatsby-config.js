module.exports = {
  siteMetadata: {
    title: `Gatsby Tailwind Starter`,
    description: `My Gatsby starter that comes with everything I tend to install on projects.`,
    author: `@shanejones`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        openGraph: {
          type: "website",
          locale: "en_GB",
          url: "https://shanejones.co.uk/",
          site_name: "Shane Jones",
        },
        twitter: {
          handle: "@shanejones",
          site: "@shanejones",
          cardType: "summary_large_image",
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fira+Sans`,
            variants: [`700`],
            subsets: [`latin`],
          },
          {
            family: `Open+Sans`,
            variants: [`400`],
            subsets: [`latin`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/favicon-logo.png`,
        name: `Site Name`,
        short_name: `Site Name`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://domain.com/`,
      },
    },
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-IDTODO`,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
        defaultDataLayer: { platform: `gatsby` },

        // // Specify optional GTM environment details.
        // gtmAuth: `YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING`,
        // gtmPreview: `YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME`,
        // dataLayerName: `YOUR_DATA_LAYER_NAME`,
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        allPageHeaders: ["Built-By: Shane Jones - shanejones.co.uk"],
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
