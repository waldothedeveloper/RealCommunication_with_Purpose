import React from "react";
import ctaBg from "../image/cta-bg.svg";
import ctaShape1 from "../image/cta-shape1.svg";
import ctaShape2 from "../image/cta-shape2.svg";

export default function CTA() {
  return (
    <div className='cta-section' id='contact'>
      <div className='container cta-shapes-wrapper'>
        <div className='shape cta-shapes'>
          <img src={ctaBg} alt='cta' />
          <div className='shape-inner-1'>
            <img src={ctaShape1} alt='cta' />
          </div>
          <div className='shape-inner-2'>
            <img src={ctaShape2} alt='cta' />
          </div>
        </div>
        <div className='cta-content-wrapper'>
          <h2>Ready to get started?</h2>
          <a href='#nothing' className='btn cta-btn'>
            Get started now
          </a>
        </div>
      </div>
    </div>
  );
}
