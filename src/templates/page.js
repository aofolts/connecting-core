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

export const seoFragment = graphql`
  fragment seoFields on ContentfulSeo {
    title
    description {
      description
      childMarkdownRemark {
        excerpt(pruneLength: 120)
      }
    }
    keywords   
  }
`

export const PageHeroFragment = graphql`
  fragment pageFeaturedImage on ContentfulPage {
    featuredImage {
      ...heroImage
    }
  }
`

export const heroImageFragment = graphql`
  fragment heroImage on ContentfulAsset {
    title
    description
  }
`