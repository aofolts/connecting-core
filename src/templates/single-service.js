import React, {Component} from 'react'
import { withLayout } from '../components/layout';

class SingleService extends Component {
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

export const serviceInfoFragment = graphql`
  fragment serviceInfo on ContentfulService {
    id
    title
    slug
    seo {
      ...seoFields
    }
  }
`