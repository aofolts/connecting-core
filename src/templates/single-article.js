import React, {Component} from 'react'
import { withLayout } from '../components/layout';
import {graphql} from 'gatsby'

class SingleArticle extends Component {
  render() {
    return (
      null
    )
  }
}

export default withLayout(SingleService)

export const query = graphql`
  query ($slug: String!) {
    contentfulService(slug: {eq: $slug}) {
      ...serviceInfo
    }
  }
`

export const articleInfoFragment = graphql`
  fragment articleInfo on ContentfulBlogPost {
    id
    title
    slug
    category
    seo {
      ...seoFields
    }
  }
`