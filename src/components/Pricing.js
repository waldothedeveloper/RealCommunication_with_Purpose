import React from "react";

export default function Pricing() {
  return (
    <section className='pricing-section' id='pricing'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-xl-7 col-md-9'>
            <div className='section-title'>
              <h2>Simple pricing</h2>
              <p>
                Create custom landing pages with Shades that convert more
                visitors than any website—no coding required.
              </p>
            </div>
          </div>
        </div>
        <div className='row no-gutters '>
          <div className='col-12 d-flex justify-content-center'>
            <div
              data-tab-target='#pricing-tab'
              className='btn--toggle btn2--toggle '
            >
              <label className='switch'>
                <input type='checkbox' />
                <span className='slider round' />
                <p>Monthly</p>
                <p>Yearly</p>
              </label>
            </div>
          </div>
        </div>
        <div className='custom-tab-wrapper monthly' id='pricing-tab'>
          <div className='row mb-d-30 no-gutters'>
            <div className='col-md-6 col-lg-3 mb--30'>
              <div className='pricing-card'>
                <div className='card-head'>
                  <p className='pricing-name'>Basic</p>
                  <h1 className='price' data-monthly='$19' data-yearly='$14'>
                    $19
                  </h1>
                  <span
                    data-monthly='Per month'
                    data-yearly='Per Year'
                    className='month'
                  >
                    Per month
                  </span>
                </div>
                <ul className='pricing-list'>
                  <li className='list-group-item'>100+ Blocks</li>
                  <li className='list-group-item'>5 GB Cloud Storage</li>
                  <li className='list-group-item'>Custom Domain Names</li>
                  <li className='list-group-item disable-opt'>
                    Unlimited Emails
                  </li>
                  <li className='list-group-item disable-opt'>
                    24/7 Customer Support
                  </li>
                  <li>
                    <a href='#home' className='pricing-btn'>
                      Get started now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 mb--30'>
              <div className='pricing-card active'>
                <div className='card-head'>
                  <p className='pricing-name'>PRO</p>
                  <h1 className='price' data-monthly='$29' data-yearly='$21'>
                    $29
                  </h1>
                  <span
                    className='month'
                    data-monthly='Per month'
                    data-yearly='Per Year'
                  >
                    Per month
                  </span>
                </div>
                <ul className='pricing-list'>
                  <li className='list-group-item'>500+ Blocks</li>
                  <li className='list-group-item'>10 GB Cloud Storage</li>
                  <li className='list-group-item'>Custom Domain Names</li>
                  <li className='list-group-item'>Unlimited Emails</li>
                  <li className='list-group-item disable-opt'>
                    24/7 Customer Support
                  </li>
                  <li>
                    <a href='#home' className='pricing-btn'>
                      Get started now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 mb--30'>
              <div className='pricing-card'>
                <div className='card-head'>
                  <p className='pricing-name'>Smart</p>
                  <h1 className='price' data-monthly='$49' data-yearly='$34'>
                    $49
                  </h1>
                  <span
                    className='month'
                    data-monthly='Per month'
                    data-yearly='Per Year'
                  >
                    Per month
                  </span>
                </div>
                <ul className='pricing-list'>
                  <li className='list-group-item'>Unlimited Blocks</li>
                  <li className='list-group-item'>20 GB Cloud Storage</li>
                  <li className='list-group-item'>Custom Domain Names</li>
                  <li className='list-group-item'>Unlimited Emails</li>
                  <li className='list-group-item'>24/7 Customer Support</li>
                  <li>
                    <a href='#home' className='pricing-btn'>
                      Purchase now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 mb--30'>
              <div className='pricing-card'>
                <div className='card-head'>
                  <p className='pricing-name'>Exclusive</p>
                  <h1 className='price' data-monthly='$99' data-yearly='$84'>
                    $99
                  </h1>
                  <span
                    data-monthly='Per month'
                    data-yearly='Per Year'
                    className='month'
                  >
                    Per month
                  </span>
                </div>
                <ul className='pricing-list'>
                  <li className='list-group-item'>Unlimited Blocks</li>
                  <li className='list-group-item'>100 GB Cloud Storage</li>
                  <li className='list-group-item'>Custom Domain Names</li>
                  <li className='list-group-item'>Unlimited Emails</li>
                  <li className='list-group-item'>24/7 Customer Support</li>
                  <li>
                    <a href='#nothing' className='pricing-btn'>
                      Purchase now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
