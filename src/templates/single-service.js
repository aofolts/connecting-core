import React, {Component,Fragment} from 'react'
import { withLayout } from '../components/layout';
import {graphql} from 'gatsby'
import Hero from '../components/hero-secondary'
import RichText from '../components/rich-text'

class SingleService extends Component {
  render() {
    const {
      title,
      featuredImage,
      content: contentData
    } = this.props.data.page

    const content = contentData.childMarkdownRemark.html

    return (
      <Fragment>
        <Hero {...{title,featuredImage}}/>
        <div className='blogWrap'>
          <RichText html={content}/>
        </div>
      </Fragment>
    )
  }
}

export default withLayout(SingleService)

export const query = graphql`
  query ($slug: String!) {
    page: contentfulService(slug: {eq: $slug}) {
      ...serviceInfo
    }
  }
`

export const serviceInfoFragment = graphql`
  fragment serviceInfo on ContentfulService {
    id
    title
    content {
      childMarkdownRemark {
        html
      }
    }
    slug
    seo {
      ...seoFields
    }
    featuredImage {
      ...heroImage
    }
  }
`