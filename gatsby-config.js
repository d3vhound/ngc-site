module.exports = {
  siteMetadata: {
    title: 'NextGen Code Company v2',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:400,700`,
          `open sans\:700,800` // you can also specify font weights and styles
        ]
      }
    }  
  ],
}
