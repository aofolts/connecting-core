import React, {Component,Fragment} from 'react'
import { withLayout } from '../components/layout';
import {graphql} from 'gatsby'
import Hero from '../components/hero-secondary'
import css from '../less/single-article.module.less'
import RichText from '../components/rich-text'
import BackgroundImage from '../components/image-background';

const Meta = ({
  author,
  publishDate
}) => {
  const {
    company,
    name,
    photo
  } = author

  return (
    <div className={css.meta}>
      <div className={css.authorPhoto}>
        <BackgroundImage {...photo}/>
      </div>
      <div className={css.metaDetails}>
        <h4 className={css.authorCompany}>{company}</h4>
        <h2 className={css.authorName}>{name}</h2>
        <div className={css.publishDate}>{publishDate}</div>
      </div>
    </div>
  )
}

class SingleArticle extends Component {
  render() {
    const {
      title,
      featuredImage,
      content: contentData,
      author,
      publishDate
    } = this.props.data.page

    const content = contentData.childMarkdownRemark.html

    return (
      <Fragment>
        <Hero {...{title,featuredImage}}/>
        <div className='blogWrap'>
          <Meta {...{author,publishDate}}/>
          <RichText html={content}/>
        </div>
      </Fragment>
    )
  }
}

export default withLayout(SingleArticle)

export const query = graphql`
  query ($slug: String!) {
    page: contentfulBlogPost(slug: {eq: $slug}) {
      ...articleInfo
      author {
        ...personInfo
        photo {
          ...smallFluidImage
        }
      }
    }
  }
`

export const articleInfoFragment = graphql`
  fragment articleInfo on ContentfulBlogPost {
    id
    title
    slug
    category
    publishDate(formatString: "MMMM D, YYYY")
    content {
      childMarkdownRemark {
        html
      }
    }
    featuredImage {
      ...heroImage
    }
    seo {
      ...seoFields
    }
  }
`