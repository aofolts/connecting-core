import React, {Component,Fragment} from 'react'
import css from '../less/header.module.less'
import {Link} from 'gatsby'

const Menu = ({
  closeMobileMenu
}) => {
  const items = [
    {
      label: 'About',
      link: '/#about'
    },
    {
      label: 'Services',
      link: '/#services'
    },
    {
      label: 'Blog',
      link: '/#blog'
    }
  ]

  const menuItems = items.map(({
    label,
    link
  }) => {
    return (
      <li key={label} className={css.menuItem} onClick={closeMobileMenu}>
        <Link to={link} className={css.menuItemTitle}>
          {label}
        </Link>
      </li>
    )
  })

  return (
    <ul className={css.menu}>
      {menuItems}
    </ul>
  )
}

const Toggle = ({
  openMobileMenu,
  mobileMenuIsOpen,
  closeMobileMenu
}) => {
  const classes = [
    css.toggle,
    mobileMenuIsOpen ? css.openToggle : null
  ].join(' ')

  const handleClick = () => {
    if (mobileMenuIsOpen) closeMobileMenu()
    else openMobileMenu()
  }

  return (
    <div className={classes} onClick={handleClick}></div>
  )
}

const Nav = ({
  openMobileMenu,
  closeMobileMenu,
  mobileMenuIsOpen
}) => {
  const mobileMenuClasses = [
    css.mobileMenu,
    mobileMenuIsOpen ? css.activeMobileMenu : null
  ].join(' ')

  return ( 
    <nav className={css.nav}>
      <Link className={css.brandName} to='/'>Connecting to the Core</Link>
      <div className={mobileMenuClasses}>
        <div className={css.mobileMenuWrap}>
          <Menu {...{closeMobileMenu}}/>
          <a className={css.button} href='#contact'>Connect</a>
        </div>
      </div>
      <Toggle {...{openMobileMenu,mobileMenuIsOpen,closeMobileMenu}}/>
    </nav>
  )
}

class Header extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      mobileMenuIsOpen: false
    }
  }

  openMobileMenu = () => {
    this.setState({
      mobileMenuIsOpen: true
    })
  }

  closeMobileMenu = () => {
    this.setState({
      mobileMenuIsOpen: false
    })
  }

  render() {
    const {
      openMobileMenu,
      closeMobileMenu
    } = this

    const {
      mobileMenuIsOpen
    } = this.state

    return (
      <Fragment>
        <div className={css.headerShim}></div>
        <header className={css.header}>
          <Nav {...{openMobileMenu,closeMobileMenu,mobileMenuIsOpen}}/>
        </header>
      </Fragment>
    )
  }
}

export default Header