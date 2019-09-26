import React from "react";
import "../css/hero.css";
import { useSpring, animated, config } from "react-spring";

export default function Hero({ values, english, spanish }) {
  const props = useSpring({
    opacity: 1,
    color: "#FFF",
    from: { opacity: 0, color: "#000" },
    config: config.slow,
    delay: 800
  });
  return (
    <section className='hero-area present'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-xl-5 order-2 order-md-1'>
            <div className='hero-content'>
              <animated.h1 className='heroText' style={props}>
                {values.language === "English"
                  ? english[1].header.h1
                  : spanish[1].header.h1}
              </animated.h1>
              <animated.p className='heroText' style={props}>
                {values.language === "English"
                  ? english[1].header.p1
                  : spanish[1].header.p1}
              </animated.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
