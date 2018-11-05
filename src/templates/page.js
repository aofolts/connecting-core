import {graphql} from 'gatsby'

export const pageFieldsFragment = graphql`
  fragment pageInfo on ContentfulPage {
    title
    id
    slug
    seo {
      ...seoFields
    }
  }
`