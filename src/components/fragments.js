import {graphql} from 'gatsby'

export const imageMetaFragment = graphql`
  fragment imageMeta on ContentfulAsset {
    title
    description
  }
`

export const imageSizesFragment = graphql`
  fragment imageSizes on ContentfulFluid {
    base64
    aspectRatio
    srcSet
    srcSetWebp
    sizes
  }
`