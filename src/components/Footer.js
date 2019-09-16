import React from "react";

export default function Footer() {
  return (
    <div className='footer-section'>
      <div className='container margin-decrese'>
        <div className='row'>
          <div className='col-lg-4 col-sm-6 col-margin'>
            <span className='footer-title-sm'>Help menu</span>
            <div className='row'>
              <div className='col-lg-5 col-4'>
                <ul className='footer-list'>
                  <li>
                    <a href='#nothing'>About</a>
                  </li>
                  <li>
                    <a href='#nothing'>Features</a>
                  </li>
                  <li>
                    <a href='#nothing'>Works</a>
                  </li>
                  <li>
                    <a href='#nothing'>Career</a>
                  </li>
                </ul>
              </div>
              <div className='col-lg-7 col-8'>
                <ul className='footer-list'>
                  <li>
                    <a href='#nothing'>Contact</a>
                  </li>
                  <li>
                    <a href='#nothing'>Help &amp; Support</a>
                  </li>
                  <li>
                    <a href='#nothing'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='#nothing'>Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-xl-2 col-sm-6 col-margin'>
            <span className='footer-title-sm'>Products</span>
            <ul className='footer-list'>
              <li>
                <a href='#nothing'>Essential Landing Page</a>
              </li>
              <li>
                <a href='#nothing'>Alpha Dashboard Pro</a>
              </li>
              <li>
                <a href='#nothing'>Karnel Admin Dashboard</a>
              </li>
              <li>
                <a href='#nothing'>Gray UI Kit</a>
              </li>
            </ul>
          </div>
          <div className='col-lg-5 offset-xl-1 col-margin'>
            <div className='footer-newsletter-box'>
              <span className='footer-title-sm'>
                Subscribe to our newsletter
              </span>
              <p>
                Subscribe to get lastest offers, news and events announcements.
                No spam in your inbox.
              </p>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your email address'
                  />
                  <button className='submit-btn'>
                    <i className='icon icon-tail-right' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
