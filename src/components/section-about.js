import React from 'react'
import {graphql} from 'gatsby'
import css from '../less/home-section-about.module.less'
import BackgroundImage from './image-background';

// const AboutSection = ({
//   headline,
//   paragraphData: paragraph
// }) => {

//   const paragraph = paragraphData.childMarkdownRemark.html

//   return (
//     <section id='about' className={css.section}>
//       <div className='mainWrap'>
//         <h2 className={css.headline}>{headline}</h2>
//         <div className={css.paragraph} dangerouslySetInnerHTML={{__html: paragraph}}/>
//       </div>
//     </section>
//   )
// }

const AboutSection = ({
  headline,
  paragraph: paragraphData,
  photo
}) => {
  const paragraph = paragraphData.childMarkdownRemark.html
  
  return (
    <section id='about' className={css.section}>
      <div className={['mainWrap',css.wrap].join(' ')}>
        <div className={css.content}>
          <div className={css.text}>
            <h2 className={css.headline}>{headline}</h2>
            <div className={css.paragraph} dangerouslySetInnerHTML={{__html: paragraph}}/>
          </div>
          <div className={css.photo}>
            <BackgroundImage {...photo}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

export const homeAboutFragment = graphql`
  fragment homeAboutSection on ContentfulHomePageLayout {
    aboutHeadline
    aboutParagraph {
      childMarkdownRemark {
        html
      }
    }
    aboutPhoto {
      ...assetMeta
      fluid(maxWidth: 400) {
        ...GatsbyContentfulFluid
      }
    }
  }
`