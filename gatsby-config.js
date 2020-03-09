module.exports = {
  siteMetadata: {
    title: `mvasigh.dev`,
    description: `Mehdi Vasigh is a Sr. Software Engineer who is currently building amazing experiences for Arundo Analytics`,
    author: `@mehdi_vasigh`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mehdi Vasigh`,
        short_name: `mvasigh.dev`,
        start_url: `/`,
        background_color: `#0b132b`,
        theme_color: `#0b132b`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
