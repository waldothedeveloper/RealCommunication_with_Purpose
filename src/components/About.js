import React from "react";
import aboutLeftShape from "../image/about-left-shape.svg";
import frankCreator from "../image/frank-creator.jpg";
import frank6 from "../image/frank-6.jpg";
import frank7 from "../image/frank-7.jpg";
import { useSpring, animated, config } from "react-spring";
import useOnScreen from "../viewportHooks/UseOnScreen";
import useOnScreen2 from "../viewportHooks/UseOnScreen2";
import useOnScreen3 from "../viewportHooks/UseOnScreen3";
import "../css/hero.css";

export default function About({ values, english, spanish }) {
  const ref = React.useRef();
  const ref2 = React.useRef();
  const ref3 = React.useRef();
  const onScreenPhoto1 = useOnScreen(ref, "-10px");
  const onScreenPhoto2 = useOnScreen2(ref2, "-10px");
  const onScreenPhoto3 = useOnScreen3(ref3, "-10px");

  const propsPhoto1 = useSpring({
    opacity: onScreenPhoto1 ? 1 : 0,
    from: { opacity: 0 },
    config: config.slow,
    delay: 200
  });

  const propsPhoto2 = useSpring({
    opacity: onScreenPhoto2 ? 1 : 0,
    from: { opacity: 0 },
    config: config.slow,
    delay: 200
  });

  const propsPhoto3 = useSpring({
    opacity: onScreenPhoto3 ? 1 : 0,
    from: { opacity: 0 },
    config: config.slow,
    delay: 200
  });

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
                    <animated.img
                      ref={ref}
                      style={propsPhoto1}
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
                    <animated.img
                      ref={ref2}
                      style={propsPhoto2}
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
                <animated.img
                  ref={ref3}
                  style={propsPhoto3}
                  src={frankCreator}
                  alt='Frank M Periche the creator'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
