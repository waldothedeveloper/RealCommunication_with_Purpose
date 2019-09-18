import React from "react";

export default function Footer({ values, english, spanish }) {
  return (
    <div id='contact' className='footer-section'>
      <div className='container margin-decrese'>
        <div className='row'>
          <div className='col-lg-12 col-sm-12 col-margin'>
            <span className='footer-title-sm'></span>
            <div className='row'>
              <div className='col-lg-12 col-sm-12'>
                <ul className='footer-list'>
                  <li>
                    <a href='mailto: communicationwithpurpose@gmail.com '>
                      {values.language === "English"
                        ? english[3].footer.email
                        : spanish[3].footer.email}
                    </a>
                  </li>
                  <li>
                    <a href='tel:+53-53086970'>
                      {" "}
                      {values.language === "English"
                        ? english[3].footer.phone
                        : spanish[3].footer.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
