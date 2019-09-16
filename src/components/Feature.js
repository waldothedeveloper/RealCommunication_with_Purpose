import React from "react";

export default function Feature() {
  return (
    <section className='feature-section' id='features'>
      <div className='container position-relative'>
        <div className='row mb-d-30 shape-bg'>
          <div className='shape-half test1' />
          <div className='shape-half test2' />
          <div className='col-md-6 col-lg-5 offset-lg-1 col-xl-5 offset-xl-1 mb--30'>
            <div className='feature-widget'>
              <div className='widget-icon'>
                <i className='icon icon-edit-72' />
              </div>
              <div className='content'>
                <h5>Easy to Use</h5>
                <p>
                  Event is not like most tech conferences. We want our
                  presentations to engage the audience, spark discussion and
                  inspire new ideas.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-5 col-xl-5 mb--30'>
            <div className='feature-widget'>
              <div className='widget-icon'>
                <i className='icon icon-layers-3' />
              </div>
              <div className='content'>
                <h5>Quick Setup</h5>
                <p>
                  Event is not like most tech conferences. We want our
                  presentations to engage the audience, and inspire new ideas.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-5 offset-lg-1 col-xl-5 offset-xl-1 mb--30'>
            <div className='feature-widget'>
              <div className='widget-icon'>
                <i className='icon icon-tablet-mobile' />
              </div>
              <div className='content'>
                <h5>Responsive Design</h5>
                <p>
                  Event is not like most tech conferences. We want our
                  presentations to engage the audience, and inspire new ideas.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-5 col-xl-5 mb--30'>
            <div className='feature-widget'>
              <div className='widget-icon'>
                <i className='icon icon-book-open-2' />
              </div>
              <div className='content'>
                <h5>Easy to Use</h5>
                <p>
                  Event is not like most tech conferences. We want our
                  presentations to engage the audience, and inspire new ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
