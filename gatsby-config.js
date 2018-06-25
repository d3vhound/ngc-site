module.exports = {
  siteMetadata: {
    title: 'NextGen Code Company v2',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:400,700,800` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-drift',
      options: {
        appId: '5descdcc8vrz',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'sb19c99vsgt1',
        accessToken: 'f0e3778507d1bd5b6c59827f584506d5fb62d529aceb9d3fbe09c922d608f64d'
      }
    },  
  ],
}
