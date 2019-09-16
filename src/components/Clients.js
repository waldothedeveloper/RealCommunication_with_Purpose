import React from "react";
import logo1 from '../image/logo-1.png'
import logo2 from '../image/logo-2.png'
import logo3 from '../image/logo-3.png'
import logo4 from '../image/logo-4.png'
import logo5 from '../image/logo-5.png'

export default function Clients() {
  return (
<section className="client-section">
  <div className="container">
    <div className="client-title">
      <h2>The #1 Landing Page Platform for 15,000+ Brands</h2>
    </div>
    <div className="client-brand-wrapper">
      <div className="single-brand">
        <img src={logo1} alt="more logos" />
      </div>
      <div className="single-brand">
        <img src={logo2} alt="more logos" />
      </div>
      <div className="single-brand">
        <img src={logo3} alt="more logos" />
      </div>
      <div className="single-brand">
        <img src={logo4} alt="more logos" />
      </div>
      <div className="single-brand">
        <img src={logo5} alt="more logos" />
      </div>
    </div>
  </div>
</section>

  )
}