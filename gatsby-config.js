require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "Gatsby @storyblok-components core boilerplate",
    description: "Gatsby @storyblok-components core boilerplate",
    author: "Marcin Krawczyk <marckraw@icloud.com>",
    siteUrl: "https://www.example.com",
    googleSiteVerification: "your-site-verification-token"
  },
  plugins: [
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
        homeSlug: "home",
        version: process.env.NODE_ENV === "production" ? "published" : "draft"
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-plugin-sass"
  ]
};
