const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = (options) => {
  const { feed = true, feedTitle = `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog` } = options

  return {
    siteMetadata: {
      siteTitle: `DeepthiWilson`,
      siteTitleAlt: `Blog`,
      siteHeadline: `Blog`,
      siteUrl: `https://deepthiwilson.netlify.app/`,
      siteDescription: `Personal Blog.`,
      siteLanguage: `en`,
      siteImage: `/banner.jpg`,
      author: `@deepthiwilson`,
    },
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
        options,
      },
      feed && {
        resolve: `gatsby-plugin-feed`,
        options: newsletterFeed(feedTitle),
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
  }
}
