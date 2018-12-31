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
          <img className={css.socialIcon} src={facebookIcon} alt='Facebook'/>
        </a>
        <a className={css.socialLink} href='https://twitter.com/ConnectingCMW' target='__blank' title='Twitter'>
          <img className={css.socialIcon} src={twitterIcon} alt='Twitter'/>
        </a>
      </div>
    </section>
  )
}

const Form = () => {
  const formProps = {
    className: css.form,
    name: 'contactForm',
    method: 'POST', 
    "data-netlify": "true",
    action: '/success',
    "data-netlify-honeypot": "bot-field",
    "data-netlify-recaptcha": "true",
    success: "/success"
  }

  return (
    <form {...formProps}>
      <input type="hidden" name="bot-field" />
      <div className={css.field}>
        <label htmlFor="name">Name</label>
        <input className={css.input}type="text" name="name" id="name" placeholder='Name' />
      </div>
      <div className={css.field}>
        <label htmlFor="email">Email</label>
        <input className={css.input} type="text" name="email" id="email" placeholder='Email' />
      </div>
      <div className={css.field}>
        <label htmlFor="message">Message</label>
        <textarea className={css.textarea}name="message" id="message" rows="3"  placeholder='Message'></textarea>
      </div>
      <div class="g-recaptcha" data-sitekey="6Ldz5IUUAAAAAHOqFMjN6aVFOSyJuxEy13b9Alzp"></div>
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