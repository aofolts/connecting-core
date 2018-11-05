import React, {Component} from 'react'
import css from '../less/testimonials.module.less'
import {graphql} from 'gatsby'

class Testimonial extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      quoteIsExpanded: false
    }
  }

  expandQuote = () => {
    this.setState({
      quoteIsExpanded: true
    })
  }

  render() {
    const {
      id,
      authorName,
      authorTitle,
      authorCompany,
      quote,
      activeTestimonialId
    } = this.props

    const {
      quoteIsExpanded
    } = this.state

    const longQuote = quote.quote
    const shortQuote = quote.childMarkdownRemark.excerpt

    const Quote = () => {
      if (quoteIsExpanded) return (
        <div className={css.longQuote}>
          "{longQuote}""
        </div>
      )

      const ReadMore = () => {
        if (longQuote.length > shortQuote.length) {
          return (
            <span className={css.readMore} onClick={this.expandQuote}>
              Read More
            </span>
          )
        }

        return null
      }

      return (
        <div className={css.shortQuote}>
          {shortQuote} <ReadMore/>
        </div>
      )
    }

    const testimonialClasses = [
      css.testimonial,
      activeTestimonialId === id ? null : css.inactiveTestimonial
    ].join(' ')

    return (
      <div key={id} className={testimonialClasses}>
        <Quote/>
        <div className={css.authorMeta}>
          <div className={css.author}>
            <span className={css.authorName}>{authorName}</span> — {authorTitle}
          </div>
          <div className={css.authorCompany}>{authorCompany}</div>
        </div>
      </div>
    )
  }
}

export const Testimonials = ({
  entries,
  activeTestimonialId
}) => {
  const cards = entries.map(entry => (
    <Testimonial key={entry.id} {...{...entry,activeTestimonialId}} />
  ))

  return (
    <div className={css.testimonials}>
      {cards}
    </div>
  )
}

const Nav = ({
  activeTestimonialId,
  entries,
  setActiveTestimonialId
}) => {
  const items = entries.map(({
    id
  }) => {
    const itemClasses = [
      css.navItem,
      id === activeTestimonialId ? css.activeNavItem : null
    ].join(' ')

    const handleClick = () => setActiveTestimonialId(id)

    return (
      <li key={id} className={itemClasses} onClick={handleClick}></li>
    )
  })
  return (
    <nav className={css.nav}>
      <ul className={css.menu}>
        {items}
      </ul>
    </nav>
  )
}

class TestimonialsSection extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      activeTestimonialId: props.entries[0].id
    }
  }

  setActiveTestimonialId = id => {
    this.setState({
      activeTestimonialId: id
    })
  }

  render() {
    const {
      entries
    } = this.props

    const {
      activeTestimonialId
    } = this.state

    const {
      setActiveTestimonialId
    } = this

    return (
      <section id='testimonials' className={css.section}>
        <div className='mainWrap'>
          <Testimonials {...{entries,activeTestimonialId}} />
          <Nav {...{entries,activeTestimonialId,setActiveTestimonialId}}/>
        </div>
      </section>
    )
  }
}

export default TestimonialsSection

export const testimonialFragment = graphql`
  fragment testimonial on ContentfulTestimonial {
    id 
    authorName
    authorTitle
    authorCompany
    quote {
      quote
      childMarkdownRemark {
        excerpt(pruneLength: 180)
      }
    }   
  }
`