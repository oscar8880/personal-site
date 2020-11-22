require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'Oscar Zealley',
    description: "Oscar Zealley's portfolio website",
    author: 'Oscar Zealley',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Oscar Zealley',
        short_name: 'Oscar',
        start_url: '/',
        background_color: '#f5f5f5',
        theme_color: '#020202',
        display: 'minimal-ui',
        icon: 'src/images/oLogo.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
  ],
};
