import React from 'react'
import {graphql} from 'gatsby'
import css from '../less/section-downloads.module.less'

const Items = ({
  assets
}) => {
  const cards = assets.map(({
    title,
    alt,
    file
  }) => {
    return (
      <a key={title} title={title} alt={alt} href={file.url} download className={css.download}>
        {title}
      </a>
    )
  })
  return (
    <div className={css.items}>
      {cards}
    </div>
  )
}

const DownloadsSection = ({
  assets
}) => {
  return (
    <section id='downloads' className={css.section}>
      <div className='mainWrap'>
        <div className={css.subHeadline}>Download</div>
        <h2 className={css.headline}>Forms &amp; Documents</h2>
        <Items assets={assets}/>
      </div>
    </section>
  )
}

export default DownloadsSection

export const homeDownloadsSectionFragment = graphql`
  fragment homeDownloadsSection on ContentfulHomePageLayout {
    downloads: files {
      ...assetMeta
      file {
        url
      }
    }
  }
`