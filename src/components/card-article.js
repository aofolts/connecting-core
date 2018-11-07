import React from 'react'
import {graphql,Link} from 'gatsby'
import PropTypes from 'prop-types'
import css from '../less/card-article.module.less'
import BackgroundImage from './image-background';

const ArticleCard = ({
  title,
  slug,
  category,
  featuredImage,
  content
}) => {
  const excerpt = content.childMarkdownRemark.excerpt
  return (
    <Link to={`/blog/${slug}`} className={css.card}>
      <div className={css.media}>
        <BackgroundImage {...featuredImage}/>
      </div>
      <div className={css.content}>
        <div className={css.category}>{category}</div>
        <h3 className={css.title}>{title}</h3>
        <p className={css.excerpt}>{excerpt}</p>
      </div>
    </Link>
  )
}

ArticleCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired
}

export default ArticleCard

export const articleCardFragment = graphql`
  fragment articleCard on ContentfulBlogPost {
    ...articleInfo
    featuredImage {
      ...assetMeta
      ...cardImage
    }
    author {
      photo {
        ...smallFixedImage
      }
    }
    content {
      childMarkdownRemark {
        excerpt(pruneLength: 120)
      }
    }
  }
`