import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useIntl, Link } from 'gatsby-plugin-intl'
import { newsEnvUrl } from '../utils/url'

export default function Footer() {
  const intl = useIntl()

  return (
    <>
      <div className={'footer-box'}>
        <div className={'footer'}>
          <div className={'footer-img'}>
            <Link to="/">
              <StaticImage placeholder="blurred" alt="logo" src="../static/images/logo.png" />
            </Link>
          </div>
          <div className={'footer-content'}>
            <dl>
              <dt>{intl.formatMessage({ id: 'COMMUNITY' })}</dt>
              <dd>
                <a href="https://neps.newtonproject.org/" target="_blank">
                  {intl.formatMessage({ id: 'Newton Evolution Proposal' })}
                </a>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/announcement/'} target="_blank">
                  {intl.formatMessage({ id: 'Announcements' })}
                </a>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/blog/'} target="_blank">
                  {intl.formatMessage({ id: 'Blog' })}
                </a>
              </dd>
              <dd>
                <a href="https://developer.newtonproject.org/" target="_blank">
                  {intl.formatMessage({ id: 'Developer' })}
                </a>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/newstatus/'} target="_blank">
                  {intl.formatMessage({ id: 'NewStatus' })}
                </a>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/faq/'} target="_blank">
                  {intl.formatMessage({ id: 'FAQ' })}
                </a>
              </dd>
            </dl>
            <dl>
              <dt>{intl.formatMessage({ id: 'ABOUT' })}</dt>
              <dd>
                <Link to="/getnew/">{intl.formatMessage({ id: 'Economy' })}</Link>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/technology/'} target="_blank">
                  {intl.formatMessage({ id: 'Technology' })}
                </a>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/solutions/'} target="_blank">
                  {intl.formatMessage({ id: 'Industry' })}
                </a>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/joinus/'} target="_blank">
                  {intl.formatMessage({ id: 'Join Us' })}
                </a>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/contact/'} target="_blank">
                  {intl.formatMessage({ id: 'Contact Us' })}
                </a>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/mediakit/'} target="_blank">
                  {intl.formatMessage({ id: 'Media Kit' })}
                </a>
              </dd>
              <dd>
                <Link to={'/roadmap/'} target="_blank">
                  {intl.formatMessage({ id: 'Roadmap of Newton' })}
                </Link>
              </dd>
            </dl>
            <dl>
              <dt>{intl.formatMessage({ id: 'SERVICE TERMS' })}</dt>
              <dd>
                <a href={newsEnvUrl + '/copyright/'} target="_blank">
                  {intl.formatMessage({ id: 'Copyright' })}
                </a>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/terms-of-use/'} target="_blank">
                  {intl.formatMessage({ id: 'Terms of Use' })}
                </a>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/privacy/'} target="_blank">
                  {intl.formatMessage({ id: 'Privacy Policy' })}
                </a>
              </dd>
            </dl>
          </div>
        </div>
        <div className={'footer-copyright'}>
          <div>
            <div>
              <StaticImage placeholder="blurred" alt="logo" src="../static/images/footer/footer.png" />
              {intl.formatMessage({
                id: 'Paying tribute to Sir Isaac Newton — the great scientist who made a significant impact on our lives!'
              })}
            </div>
          </div>
          <p>{intl.formatMessage({ id: 'Copyright © 2022 Newton Foundation. All Rights Reserved.' })}</p>
        </div>
      </div>
      <FooterMobile />
    </>
  )
}

const FooterMobile = () => {
  const intl = useIntl()
  return (
    <div className={'footer-mobile'}>
      <div className={'footer-content'}>
        <dl className={'footer-item1'}>
          <dt>{intl.formatMessage({ id: 'COMMUNITY' })}</dt>
          <dd>
            <a href="https://neps.newtonproject.org/" target="_blank">
              {intl.formatMessage({ id: 'Newton Evolution Proposal' })}
            </a>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/announcement/'} target="_blank">
              {intl.formatMessage({ id: 'Announcements' })}
            </a>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/blog/'} target="_blank">
              {intl.formatMessage({ id: 'Blog' })}
            </a>
          </dd>
          <dd>
            <a href="https://developer.newtonproject.org/" target="_blank">
              {intl.formatMessage({ id: 'Developer' })}
            </a>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/newstatus/'} target="_blank">
              {intl.formatMessage({ id: 'NewStatus' })}
            </a>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/faq/'} target="_blank">
              {intl.formatMessage({ id: 'FAQ' })}
            </a>
          </dd>
        </dl>
        <dl className={'footer-item2'}>
          <dt>{intl.formatMessage({ id: 'ABOUT' })}</dt>
          <dd>
            <Link to="/getnew/">{intl.formatMessage({ id: 'Economy' })}</Link>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/technology/'} target="_blank">
              {intl.formatMessage({ id: 'Technology' })}
            </a>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/solutions/'} target="_blank">
              {intl.formatMessage({ id: 'Industry' })}
            </a>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/joinus/'} target="_blank">
              {intl.formatMessage({ id: 'Join Us' })}
            </a>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/contact/'} target="_blank">
              {intl.formatMessage({ id: 'Contact Us' })}
            </a>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/mediakit/'} target="_blank">
              {intl.formatMessage({ id: 'Media Kit' })}
            </a>
          </dd>
          <dd>
            <Link to={'/roadmap/'} target="_blank">
              {intl.formatMessage({ id: 'Roadmap of Newton' })}
            </Link>
          </dd>
        </dl>
        <dl className={'footer-item3'}>
          <dt>{intl.formatMessage({ id: 'SERVICE TERMS' })}</dt>
          <dd>
            <a href={newsEnvUrl + '/copyright/'} target="_blank">
              {intl.formatMessage({ id: 'Copyright' })}
            </a>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/terms-of-use/'} target="_blank">
              {intl.formatMessage({ id: 'Terms of Use' })}
            </a>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/privacy/'} target="_blank">
              {intl.formatMessage({ id: 'Privacy Policy' })}
            </a>
          </dd>
        </dl>
      </div>
      <div className={'footer'}>
        <div className={'footer-img'}>
          <Link to="/">
            <StaticImage placeholder="blurred" alt="logo" src="../static/images/logo.png" />
          </Link>
        </div>
        <div className={'footer-copyright'}>
          <div>
            <div>
              <StaticImage placeholder="blurred" alt="logo" src="../static/images/footer/footer.png" />
              {intl.formatMessage({ id: 'Paying tribute to Sir Isaac Newton' })}
              <br />
              {intl.formatMessage({ id: 'the great scientist who made a significant impact on our lives!' })}
            </div>
          </div>
          <p>{intl.formatMessage({ id: 'Copyright © 2022 Newton Foundation. All Rights Reserved.' })}</p>
        </div>
      </div>
    </div>
  )
}
