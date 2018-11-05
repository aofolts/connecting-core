import React from 'react'
import {graphql,Link} from 'gatsby'
import PropTypes from 'prop-types'
import css from '../less/card-article.module.less'
import BackgroundImage from './image-background';

const ArticleCard = ({
  id,
  title,
  slug,
  author,
  category,
  featuredImage
}) => {
  return (
    <Link to={`/articles/${slug}`} className={css.card}>
      <div className={css.media}>
        <BackgroundImage {...featuredImage}/>
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
  }
`