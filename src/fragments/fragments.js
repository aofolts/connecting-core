import {graphql} from 'gatsby'

export const assetMetaFragment = graphql`
  fragment assetMeta on ContentfulAsset {
    title
    alt: description
  }
`

export const fluidImageSizesFragment = graphql`
  fragment fluidImageSizes on ContentfulFluid {
    base64
    aspectRatio
    srcSet
    srcSetWebp
    sizes
    src
    srcWebp
  }
`

export const cardImageFragment = graphql`
  fragment cardImage on ContentfulAsset {
    ...assetMeta
    fixed(width: 400) {
      ...GatsbyContentfulFixed
    }
  }
`

export const smallFixedImageFragment = graphql`
  fragment smallFixedImage on ContentfulAsset {
    ...assetMeta
    fixed(width: 250) {
      ...GatsbyContentfulFixed
    }
  }
`

export const smallFluidImageFragment = graphql`
  fragment smallFluidImage on ContentfulAsset {
    ...assetMeta
    fluid(maxWidth: 250) {
      ...GatsbyContentfulFluid
    }
  }
`

export const heroImageFragment = graphql`
  fragment heroImage on ContentfulAsset {
    ...assetMeta
    fluid(maxWidth: 1920) {
      ...GatsbyContentfulFluid
    }
  }
`

export const personFragment = graphql`
  fragment personInfo on ContentfulPerson {
    id
    name
    email
    company
    title
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