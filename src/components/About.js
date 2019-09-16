import React from "react";
import aboutLeftShape from "../image/about-left-shape.svg";
import about from "../image/about.png";
import about2 from "../image/about-2.png";

export default function About() {
  return (
    <div>
      <section className='about-section-01'>
        <div className='container'>
          <div className='about-shape shape'>
            <img src={aboutLeftShape} alt='about-left' />
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-xl-5 order-2 order-md-1'>
              <div className='about-left-content'>
                <h2>Build Beautiful Landing Pages Faster.</h2>
                <p>
                  Create custom landing pages with Shades that convert more
                  visitors than any website—no coding required.
                </p>
                <div className='about-btn'>
                  <a href='#about'>
                    Get started now <i className='icon icon-minimal-right' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-xl-6 offset-xl-1 order-1 order-md-2'>
              <div className='about-image'>
                <img src={about} alt='about' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='about-section-02'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-5 col-xl-6'>
              <div className='about-image-left'>
                <img src={about2} alt='about2' />
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-xl-5 offset-xl-1'>
              <div className='about-right-content'>
                <h2>Build Beautiful Landing Pages Faster.</h2>
                <p>
                  Create custom landing pages with Shades that convert more
                  visitors than any website—no coding required.
                </p>
                <div className='about-btn'>
                  <a href='#about'>
                    Get started now <i className='icon icon-minimal-right' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
