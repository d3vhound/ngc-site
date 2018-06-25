/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('src/templates/project.js')
    resolve(
      graphql(`
        {
          allContentfulProject (limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
       `).then((result) => {
          if (result.errors) {
            reject(result.errors)
          }

          result.data.allContentfulProject.edges.forEach((edge) => {
            createPage({
              path: '/projects/' + edge.node.slug,
              component: projectTemplate,
              context: {
                slug: edge.node.slug
              }
            })
          })
          return
        })
    )
  })
}