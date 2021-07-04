/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Pick Up Pro",
    titleTemplate: "%s · The Real Hero",
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/amazon.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-modal-routing`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
