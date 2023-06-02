import React from 'react';

const AboutUs = () => {
    return (
        <div>
          <section id="googleMap" className="google-map p-0">
            <div id="map">
              <iframe title='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.024453317046!2d7.468620674362203!3d9.061533691001102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b04de9c8ea7%3A0x1d54caedb6606456!2sPremier%20Plaza!5e0!3m2!1sen!2sng!4v1685198961112!5m2!1sen!2sng" width={1680} height={560} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
          </section>{/* /.GoogleMap */}
          {/* ==========================
          contact layout 1
      =========================== */}           
          <section id="contactLayout1" className="contact contact-layout1 pt-0">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="contact__panel">
                    <div className="contact__panel-banner">
                      <img src="assets/images/banners/2.jpg" alt="banner img" />
                      <div className="cta__banner">
                        <p className="cta__desc"><strong>We will get back to you within 24 hours, or you can call us everyday,
                            08:00 AM - 5:00 PM</strong></p>
                        <div className="contact__number d-flex align-items-center">
                          <i className="icon-phone" />
                          <a href="tel:+234-8107502055" style={{fontSize: '24px'}}>+234-8107502055</a>
                        </div>
                        
                      </div>
                    </div>
                    <form className="contact__form-panel">
                      <div className="row">
                        <div className="col-sm-12 contact__form-panel-header">
                          <h4>Get In Touch</h4>
                          <p>Complete control over products allows us to ensure our customers receive the best quality
                            prices
                            and service.</p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <div className="form-group"><input type="text" className="form-control" placeholder="Name" /></div>
                        </div>{/* /.col-lg-6 */}
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <div className="form-group"><input type="email" className="form-control" placeholder="Email" /></div>
                        </div>{/* /.col-lg-6 */}
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          <div className="form-group"><input type="text" className="form-control" placeholder="Phone" /></div>
                        </div>{/* /.col-lg-6 */}
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          <div className="form-group">
                            <textarea className="form-control" placeholder="Additional Details!" defaultValue={""} />
                          </div>
                        </div>{/* /.col-lg-12 */}
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          <button type="submit" className="btn btn__secondary btn__block">
                            <span>Submit Request</span><i className="icon-arrow-right" />
                          </button>
                        </div>{/* /.col-lg-12 */}
                      </div>{/* /.row */}
                    </form>
                  </div>{/* /.contact__panel */}
                </div>{/* /.col-lg-12 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>{/* /.contact layout 1 */}
          {/* ==========================
         Contact Info
      ============================ */}
          <section id="contactInfo" className="contact contact-info pt-0 d-none">
            <div className="container">
              <div className="row">
                {/* Contact panel #1 */}
                <div className="col-sm-12 col-md-4 col-lg-3">
                  <div className="contact-info-box">
                    <h4 className="contact__info-box-title">HEAD OFFICE</h4>
                    <ul className="contact__info-list list-unstyled">
                      <li>Email: <a href="milto:evermoretradecoltd132@outlook.com">evermoretradecoltd132@outlook.com</a></li>
                      <li>Address: Shop A08, Premier Plaza, Wuse Zone 3, by Idimba Street Abuja</li>
                      <li>Phone: +234-8107502055</li>
                      <li>Hours: Mon-Fri: 8am – 5pm</li>
                    </ul>{/* /.contact__info-list */}
                  </div>{/* /.contact-info-box */}
                </div>{/* /.col-lg-4 */}
                {/* Contact panel #2 */}
                <div className="col-sm-12 col-md-4 col-lg-3">
                  <div className="contact-info-box">
                    <h4 className="contact__info-box-title">ABUJA OFFICE</h4>
                    <ul className="contact__info-list list-unstyled">
                      <li>Email: <a href="milto:evermoretradecoltd132@outlook.com">evermoretradecoltd132@outlook.com</a></li>
                      <li>Address: Shop A08, Premier Plaza, Wuse Zone 3, by Idimba Street Abuja</li>
                      <li>Phone: +234-8107502055</li>
                      <li>Hours: Mon-Fri: 8am – 5pm</li>
                    </ul>{/* /.contact__info-list */}
                  </div>{/* /.contact-info-box */}
                </div>{/* /.col-lg-4 */}
                {/* Contact panel #3 */}
                <div className="col-sm-12 col-md-4 col-lg-3">
                  <div className="contact-info-box">
                    <h4 className="contact__info-box-title">PORT HARCOURT OFFICE</h4>
                    <ul className="contact__info-list list-unstyled">
                      <li>Email: <a href="milto:evermoretradecoltd132@outlook.com">evermoretradecoltd132@outlook.com</a></li>
                      <li>Address: Shop A08, Premier Plaza, Wuse Zone 3, by Idimba Street Abuja</li>
                      <li>Phone: +234-8107502055</li>
                      <li>Hours: Mon-Fri: 8am – 5pm</li>
                    </ul>{/* /.contact__info-list */}
                  </div>{/* /.contact-info-box */}
                </div>{/* /.col-lg-4 */}
                <div className="col-sm-12 col-md-4 col-lg-3">
                  <div className="contact-info-box">
                    <h4 className="contact__info-box-title">WARRI OFFICE</h4>
                    <ul className="contact__info-list list-unstyled">
                      <li>Email: <a href="milto:evermoretradecoltd132@outlook.com">evermoretradecoltd132@outlook.com</a></li>
                      <li>Address: Shop A08, Premier Plaza, Wuse Zone 3, by Idimba Street Abuja</li>
                      <li>Phone: +234-8107502055</li>
                      <li>Hours: Mon-Fri: 8am – 5pm</li>
                    </ul>{/* /.contact__info-list */}
                  </div>{/* /.contact-info-box */}
                </div>{/* /.col-lg-4 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>
        </div>
      );
};

export default AboutUs;
