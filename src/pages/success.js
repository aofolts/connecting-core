import React from 'react'
import css from '../less/notfound.module.less'
import gif from '../images/notfound.gif'
import {Link} from 'gatsby'
import Button from '../components/button'

const NotFoundPage = () => (
  <div className={css.page}>
    <div className={css.container}>
      <div className={css.content}>
        <h1 className={css.headline}>Success!</h1>
        <p>Your message was sent, and we will be in touch shortly.</p>
        <Button link={{page: '/'}} label='Return Home'/>
      </div>
    </div>
  </div>
)

export default NotFoundPage
