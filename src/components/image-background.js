import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

const BackgroundImage = ({
  title,
  alt,
  sizes,
  className
}) => {
  return (
    <Image 
      {...{title,alt,sizes}}
      className={['mediaBackground',className].join(' ')}
      style={{position: 'absolute'}}
    />
  )
}

BackgroundImage.propTypes = {
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  sizes: PropTypes.isRequired
}

export default BackgroundImage