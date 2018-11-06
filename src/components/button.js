import React from 'react'
import css from '../less/buttons.module.less'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

const buttonThemeClasses = {
  primary: css.primaryButton,
  primaryAlternate: css.primaryAlternateButton
}

const Button = ({
  label,
  link,
  type,
  theme,
  className
}) => {
  const buttonClass = [
    buttonThemeClasses[theme],
    className
  ].join(' ')

  if (link) {
    const {
      page,
      url
    } = link
  
    if (page) {
      return (
        <Link className={buttonClass} to={page}>
          {label}
        </Link>
      )
    }
    else if (url) {
      return (
        <a className={buttonClass} href={url} target='__blank'>
          {label}
        </a>
      )
    }
  }
  
  if (type === 'submit') {
    return <button className={buttonClass} type={type}>{label}</button>
  }

  return (
    <div className={buttonClass}>{label}</div>
  )
}

export default Button

Button.defaultProps = {
  theme: 'primary'
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['primary','primaryAlternate']),
  className: PropTypes.string
}