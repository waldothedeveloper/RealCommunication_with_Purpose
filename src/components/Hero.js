import React from "react";
import heroimg from "../image/hero-img.png";

export default function Hero() {
  return (
    <section className='hero-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-xl-5 order-2 order-md-1'>
            <div className='hero-content'>
              <h1>Communication with Purpose</h1>
              <p>A better future for bold & brave people</p>
              <div className='hero-btn'>
                <a href='#hero' className='btn btn-hero'>
                  Discover
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-xl-7 order-1 order-md-2'>
            <div className='hero-image shape'>
              <img src={heroimg} alt='hero img' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
