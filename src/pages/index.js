import React,{Component, Fragment} from 'react'
import {graphql,Link} from 'gatsby'
import {withLayout} from '../components/layout'
import css from '../less/home.module.less'
import BackgroundImage from '../components/image-background'
import CoachingIcon from '../svg/icon-coaching'
import ResearchIcon from '../svg/icon-research'
import MediationIcon from '../svg/icon-mediation'
import Testimonials from '../components/testimonials'
import RecentArticlesSection from '../components/section-recent-articles';

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

const ServicesSection = ({
  services
}) => {
  const serviceIcons = {
    'life-coaching': CoachingIcon,
    'market-research': ResearchIcon,
    'mediation': MediationIcon
  }

  const cards = services.map(({
    title,
    content,
    slug
  }) => {
    const Icon = () => {
      const TagName = serviceIcons[slug] || ResearchIcon
      return <TagName className={css.serviceCardIcon} alt={`${title} icon`} />
    }
    
    return (
      <div key={slug} className={css.serviceCard}>
        <Icon/>
        <div className={css.serviceCardInfo}>
          <div className={css.serviceCardText}>
            <h3>{title}</h3>
            <p className='p2'>{content.childMarkdownRemark.excerpt}</p>
          </div>
          <Link className={css.serviceCardLink} to={`/${slug}`}>Learn More</Link>
        </div>
      </div>
    )
  })

  return (
    <section id='services'>
      <div className={['mainWrap',css.servicesWrap].join(' ')}>
        <div className={css.servicesGrid}>
          {cards}
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
      page,
      testimonials,
      articles
    } = data

    const {
      introHeadline,
      introParagraph,
      introHeadshot,
      services
    } = page.layout

    return (
      <Fragment>
        <Intro
          headline={introHeadline}
          paragraph={introParagraph}
          headshot={introHeadshot}
        />
        <ServicesSection services={services} />
        <Testimonials entries={testimonials.edges.map(entry => entry.node)}/>
        <RecentArticlesSection entries={articles.edges.map(entry => entry.node)}/>
      </Fragment>
    )
  }
}

export default withLayout(Index)

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "home"}) {
      ...pageInfo
      featuredImage {
        ...heroImage
      }
      ...homePageLayout
    }
    testimonials: allContentfulTestimonial(limit: 3) {
      edges {
        node {
          ...testimonial
        }
      }
    }
    articles: allContentfulBlogPost(limit: 3) {
      edges {
        node {
          ...articleCard
        }
      }
    }
  }
`

export const homePageLayoutFragment = graphql`
  fragment homePageLayout on ContentfulPage {
    layout {
      introHeadline
      introParagraph
      introHeadshot {
        ...assetMeta
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid
        }
      }
      services {
        ...serviceInfo
        content {
          childMarkdownRemark {
            excerpt(pruneLength: 160)
          }
        }
      }
    }
  }
`