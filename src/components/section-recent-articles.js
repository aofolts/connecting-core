import React from 'react'
import css from '../less/section-recent-articles.module.less'
import ArticleCard from '../components/card-article'

const Articles = ({
  entries
}) => {
  const cards = entries.map(entry => <ArticleCard key={entry.id} {...entry}/>)

  return (
    <div className={css.articles}>
      {cards}
    </div>
  )
}

const RecentArticlesSection = ({
  entries
}) => {
  return (
    <section id='recentArticles'>
      <div className='mainWrap'>
        <h4 className={css.subHeadline}>Articles</h4>
        <h2 className={css.headline}>Latest News &amp; Tips</h2>
        <Articles entries={entries}/>
      </div>
    </section>
  )
}

export default RecentArticlesSection