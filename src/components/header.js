import React, {Component,Fragment} from 'react'
import css from '../less/header.module.less'
import {Link} from 'gatsby'
import Button from './button'

const Menu = () => {
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
      <li key={label} className={css.menuItem}>
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

const Nav = () => {
  return (
    <nav className={css.nav}>
      <div className={css.brandName}>Connecting to the Core</div>
      <div className={css.mobileMenu}>
        <Menu/>
        <Button className={css.button} label='Connect' link='/#contact'/>
      </div>
    </nav>
  )
}

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className={css.headerShim}></div>
        <header className={css.header}>
          <Nav/>
        </header>
      </Fragment>
    )
  }
}

export default Header