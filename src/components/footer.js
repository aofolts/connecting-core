import React from 'react'
import css from '../less/footer.module.less' 
import {StaticQuery,graphql} from 'gatsby'
import Button from '../components/button'
import StampIcon from '../svg/icon-stamp'
import twitterIcon from '../svg/icon-social-twitter.svg'
import facebookIcon from '../svg/icon-social-facebook.svg'

const SocialSection = () => {
  return (
    <section id='social' className={css.socialSection}>
      <div className={css.socialIcons}>
        <a className={css.socialLink} href='https://www.facebook.com/114728032555443' target='__blank' title='Facebook'>
          <img className={css.socialIcon} src={facebookIcon}/>
        </a>
        <a className={css.socialLink} href='https://twitter.com/ConnectingCMW' target='__blank' title='Twitter'>
          <img className={css.socialIcon} src={twitterIcon}/>
        </a>
      </div>
    </section>
  )
}

const Form = () => {
  return (
    <form className={css.form} name='contact' method='POST' netlify>
      <div className={css.field}>
        <label htmlFor='contactFormName'>Name</label>
        <input type='text' id='contactFormName' placeholder='Name' required/>
      </div>
      <div className={css.field}>
        <label htmlFor='contactFormEmail'>Email</label>
        <input type='email' id='contactFormEmail' placeholder='Email' required/>
      </div>
      <div className={css.field}>
        <label htmlFor='contactFormMessage'>Message</label>
        <textarea id='contactFormMessage' placeholder='How can we help?' rows='3' name='message' required/>
      </div>
      <Button type='submit' label='Send it' theme='primaryAlternate'/>
    </form>
  )
}

const Text = ({
  email,
  phoneNumber
}) => {
  return (
    <div className={css.text}>
      <StampIcon className={css.stamp}/>
      <h2>Get in Touch</h2>
      <p>
        {email}<br/>
        {phoneNumber}
      </p>
      <p>We look forward to hearing from you!</p>
      <p>—Cheryl Williams</p>
    </div>
  )
}

const Footer = ({
  data
}) => {
  const {
    email,
    phoneNumber
  } = data.settings
  
  return (
    <footer id='footer' className={css.footer}>
      <SocialSection/>
      <section className={css.contactSection}>
        <div className={css.wrap}>
          <div id='contact' className={css.postcard}>
            <Form/>
            <Text {...{email,phoneNumber}}/>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default props => (
  <StaticQuery
    query={query}
    render={data => <Footer data={data} {...props}/>}
  />
)

const query = graphql`
  {
    settings: contentfulSettings(name: {eq: "Deploy & Settings"}) {
      email
      phoneNumber
    }
  }
`