module.exports = {
  siteMetadata: {
    title: 'NextGen Code Company',
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
    // {
    //   resolve: 'gatsby-plugin-drift',
    //   options: {
    //     appId: '5descdcc8vrz',
    //   },
    // },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'sb19c99vsgt1',
        accessToken: 'f0e3778507d1bd5b6c59827f584506d5fb62d529aceb9d3fbe09c922d608f64d'
      }
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-122819099-1",
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is also optional
				respectDNT: true,
			},
		},
  ],
}
