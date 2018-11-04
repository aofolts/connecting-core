import React,{Component} from 'react'
import {graphql} from 'gatsby'
import {withLayout} from '../components/layout'
import css from '../less/home.module.less'
import BackgroundImage from '../components/image-background'

const Intro = ({
  headline,
  paragraph,
  headshot
}) => {
  return (
    <section id='intro'>
      <div className='mainWrap'>
        <div className={css.introContent}>
          <div className={css.introText}>
            <h1 className={css.introHeadline}>{headline}</h1>
            <p>{paragraph}</p>
          </div>
          <div className={css.introHeadshot}>
            <BackgroundImage {...headshot} />
          </div>
        </div>
      </div>
    </section>
  )
}

class Index extends Component {

  render() {
    const {
      data
    } = this.props

    const {
      page
    } = data

    const {
      introHeadline,
      introParagraph,
      introHeadshot
    } = page.layout

    return (
      <Intro 
        headline={introHeadline} 
        paragraph={introParagraph}
        headshot={introHeadshot}
      />
    )
  }
}

export default withLayout(Index)

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "home"}) {
      ...pageInfo
      ...pageFeaturedImage
      ...homePageLayout
    }
  }
`

export const homePageLayoutFragment = graphql`
  fragment homePageLayout on ContentfulPage {
    layout {
      introHeadline
      introParagraph
      introHeadshot {
        ...imageMeta
        sizes: fluid(maxWidth: 1000) {
          ...imageSizes
        }
      }
      services {
        ...serviceInfo
      }
    }
  }
`