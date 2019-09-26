import React from "react";
import aboutLeftShape from "../image/about-left-shape.svg";
import frankCreator from "../image/frank-creator.jpg";
import frank6 from "../image/frank-6.jpg";
import frank7 from "../image/frank-7.jpg";
// import { useSpring, animated, config } from "react-spring";
import "../css/hero.css";

export default function About({ values, english, spanish }) {
  // const props = useSpring({
  //   opacity: 1,
  //   color: "#FFF",
  //   from: { opacity: 0, color: "#000" },
  //   config: config.slow,
  //   delay: 800
  // });

  return (
    <section id='about'>
      <section className='about-section-01'>
        <div className='container'>
          <div className='about-shape shape'>
            <img src={aboutLeftShape} alt='about-left' />
          </div>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-xl-12 order-2 order-md-1'>
              <div className='about-left-content'>
                <h2>{values.language === "English" ? "About" : "Acerca"}</h2>
                <p className='about-p'>
                  {values.language === "English"
                    ? english[2].about.h2
                    : spanish[2].about.h2}
                </p>
                <div className='col-lg-12 col-md-12 col-xl-12'>
                  <div className='about-image'>
                    <img
                      lazy='true'
                      // style={props}
                      src={frank6}
                      alt='frank-m-periche-teaching-kids-in-his-community'
                    />
                  </div>
                </div>
                <p className='about-p'>
                  {values.language === "English"
                    ? english[2].about.h3
                    : spanish[2].about.h3}
                </p>
                <div className='col-lg-12 col-md-12 col-xl-12'>
                  <div className='about-image'>
                    <img
                      lazy='true'
                      // style={props}
                      src={frank7}
                      alt='frank-m-periche-teaching-kids-in-his-community'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='about-section-02'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-xl-6'>
              <div className='about-right-content'>
                <h2>
                  {values.language === "English"
                    ? "Meet the Founder"
                    : "Conoce al Fundador"}
                </h2>
                <p>
                  {values.language === "English"
                    ? english[2].about.p
                    : spanish[2].about.p}
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-xl-6'>
              <div className='about-image-left'>
                <img src={frankCreator} alt='Frank M Periche the creator' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
