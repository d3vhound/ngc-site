module.exports = {
  siteMetadata: {
    title: 'NextGen Code Company v2',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,400,700,800`,
          `IBM plex mono\:400,600`
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
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: 'CZP30',
      },
		},
		{
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./assets/images/favicon.png",
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  },
  ],
}
