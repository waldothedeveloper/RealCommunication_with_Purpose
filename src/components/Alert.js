import React from "react";

export default function Alert({ values, english, spanish }) {
  return (
    <section className='hero-area present'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-xl-5 order-2 order-md-1'>
            <div className='hero-content'>
              <h1 style={{ color: "#fff" }}>
                This website doesn't work on the old Internet Explorer. Please
                visit the site on more modern browsers such as Chrome, Opera,
                Safari, Mozilla
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
