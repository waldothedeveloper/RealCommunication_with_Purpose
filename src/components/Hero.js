import React from "react";

export default function Hero({ values, english, spanish }) {
  return (
    <section className='hero-area present'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-xl-5 order-2 order-md-1'>
            <div className='hero-content'>
              <h1 style={{ color: "#fff" }}>
                {values.language === "English"
                  ? english[1].header.h1
                  : spanish[1].header.h1}
              </h1>
              <p style={{ color: "#fff" }}>
                {values.language === "English"
                  ? english[1].header.p1
                  : spanish[1].header.p1}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
