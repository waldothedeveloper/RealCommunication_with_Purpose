import React from "react";
import mainlogo from "../image/main-logo.png";

export default function Header() {
  return (
    <header className='site-header'>
      <div className='container'>
        <div className='row justify-content-center align-items-center position-relative'>
          <div className='col-sm-3 col-6 col-lg-2 col-xl-2 order-lg-1'>
            <div className='brand'>
              <a href='#nothing'>
                {/* //! TODO - need to fix this horrible logo */}
                <img
                  src={mainlogo}
                  alt='main-logo'
                  // style={{ width: 32, height: 32 }}
                />
              </a>
            </div>
          </div>
          <div className='col-sm-7 col-lg-2 col-xl-2 order-lg-3 d-none d-sm-block'>
            <div className='header-btns'>
              <div className='btn-2'>
                <a href='#one'>Start free trial</a>
              </div>
            </div>
          </div>
          <div className='col-sm-2 col-6 col-lg-7 offset-lg-1 col-xl-6 offset-xl-2 order-lg-2 position-static'>
            <div className='main-navigation'>
              <ul className='main-menu'>
                <li className='menu-item has-dropdown'>
                  <a href='#features'>Free Landing Pages</a>
                </li>
                <li className='menu-item '>
                  <a href='#features'>Features</a>
                </li>
                <li className='menu-item'>
                  <a href='#one'>Services</a>
                </li>
                <li className='menu-item'>
                  <a href='#pricing'>Pricing</a>
                </li>
                <li className='menu-item'>
                  <a href='#contact'>Contact</a>
                </li>
              </ul>
            </div>
            <div className='mobile-menu' />
          </div>
        </div>
      </div>
    </header>
  );
}
