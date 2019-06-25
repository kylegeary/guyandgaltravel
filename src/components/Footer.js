import React from 'react'
import './Footer.css'

export default () => (
  <footer className="footer">
    <div className="footer__content">
      <p className="footer__content-text-two">
        Built as a <span role="img">🎁</span> for Chris &amp; Paige
      </p>
      <p className="footer__content-text-two">
        &copy; {new Date().getFullYear()}{' '}
        <a className="footer__content-text-link" href="#">
          Kyle Geary.{' '}
        </a>{' '}
        All rights reserved.
      </p>
    </div>
  </footer>
)
