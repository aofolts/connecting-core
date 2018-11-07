const path = require('path')

const templates = {
  service: path.resolve('./src/templates/single-service.js'),
  article: path.resolve('./src/templates/single-article.js')
}

exports.createPages = ({graphql,actions}) => {
  const {
    createPage
  } = actions

  const createServicePages = new Promise((resolve,reject) => {
    resolve(
      graphql(
        `
          {
            entries: allContentfulService {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const entries = result.data.entries.edges
        
        entries.forEach(entry => {
          let slug = entry.node.slug

          createPage({
            path: `/services/${slug}`,
            component: templates.service,
            context: {
              slug
            }
          })
        })
      })
    )
  })

  const createArticlePages = new Promise((resolve,reject) => {
    resolve(
      graphql(
        `
          {
            entries: allContentfulBlogPost {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const entries = result.data.entries.edges
        
        entries.forEach(entry => {
          let slug = entry.node.slug

          createPage({
            path: `/blog/${slug}`,
            component: templates.article,
            context: {
              slug
            }
          })
        })
      })
    )
  })

  return Promise.all([
    createServicePages,
    createArticlePages
  ])
}