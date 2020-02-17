let facebook_pixel = ''
let gtm = ''

module.exports = {
  siteMetadata: {
    title: `TeckAid`,
    description: `Multi-Channel eCommerce brand and product management services.`,
    author: `Nasir Ali`,
    siteUrl: `https://teckaid.com/`,
    phone: '832-856-3488',
    fax: '000-000-0000',
    address: 'Sugar Land, TX 77479',
    email: 'hello@teckaid.com',
  },
  slider: {
    slide1: 'Let us do the heavy lifting for your brand.',
    slideP1: 'Test this P1',
    slide2: 'We wil do the heavy lifting for your brand.',
    slideP2: 'Test this P2',
    slide3: 'We wil do the heavy lifting for your brand.',
    slideP3: 'Test this P3',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: gtm,
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/teckaidfav.png'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     queryLimit: 1000, // Default to 100
    //     contentTypes: ['article'],
    //     // Possibility to login with a strapi user, when content types are not publically available (optional).
    //     loginData: {
    //       identifier: "",
    //       password: "",
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-styled-components`
  ],
}
