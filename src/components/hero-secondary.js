import React from 'react'
import BackgroundImage from '../components/image-background'
import css from '../less/hero-secondary.module.less'

const SecondaryHero = ({
  title,
  featuredImage
}) => {
  return (
    <section id='hero' className={css.section}>
      <BackgroundImage {...featuredImage} className={css.background}/>
      <h1 className={css.title}>{title}</h1>
    </section>
  )
}

export default SecondaryHero 