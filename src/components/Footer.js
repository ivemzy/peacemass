import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-3 footer__widget footer__widget-about">
                <h6 className="footer__widget-title">Quick Contact</h6>
                <div className="footer__widget-content">
                  <p className="color-gray">
                    If you have any questions or need help, feel free to contact
                    with our team.
                  </p>
                  <p className="footer__contact-phone">
                    <i className="icon-phone" />
                    <a href="tel:5565454117">+234 9138 185 753</a>
                  </p>
                  <p className="footer__contact-phone">
                  <i className="fa fa-envelope" />
                    <a className="emailC" href="mailto:peacemasstransitlimited@gmail.com">peacemasstransitlimited@gmail.com</a>
                  </p>
                  <p>Sky Memorial Complex Zone 5 Wuse Abuja FCT</p>
                  <ul className="social__icons">
                    <li>
                      <a href="/">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                  {/* /.social-icons */}
                </div>
              </div>
              {/* /.col-xl-3 */}
              <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2 offset-xl-1 footer__widget footer__widget-nav">
                <h6 className="footer__widget-title">Who We Are</h6>
                <div className="footer__widget-content">
                  <nav>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/leadership">Leadership</a>
                      </li>
                      <li>
                        <a href="/newsevent">News &amp; Media</a>
                      </li>
                      <li>
                        <a href="/why-us">Why Peacemass</a>
                      </li>
                      <li>
                        <a href="/contact-us">Contacts</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* /.footer-widget-content */}
              </div>
              {/* /.col-xl-2 */}
              <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2 footer__widget footer__widget-nav">
                <h6 className="footer__widget-title">Services</h6>
                <div className="footer__widget-content">
                  <nav>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/#">Our Core Expertise</a>
                      </li>
                      <li>
                        <a href="/#">Property Management</a>
                      </li>
                      <li>
                        <a href="/#">Maintenance Management</a>
                      </li>
                      <li>
                        <a href="/#">Technical Service</a>
                      </li>
                      <li>
                        <a href="/#">Customer Care Center</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* /.footer-widget-content */}
              </div>
              
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.footer-top */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-3 col-lg-3">
                <img src="assets/images/logo/peace.png" style={{maxWidth: '70px'}} alt="logo" />
              </div>
              {/* /.col-lg-3 */}
              <div className="col-sm-12 col-md-9 col-lg-9 text-right">
                <div className="footer__copyright">
                  <nav>
                    <ul className="footer__copyright-links list-unstyled d-flex flex-wrap justify-content-end">
                      <li>
                        <a href="/#">Terms &amp; Conditions </a>
                      </li>
                      <li>
                        <a href="/#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/#">Sitemap</a>
                      </li>
                      
                    </ul>
                  </nav>
                  <p className="mb-0">
                    {" "}
                    © 2023 Peacemass Limited, All Rights Reserved.
                  </p>
                </div>
                {/* /.Footer-copyright */}
              </div>
              {/* /.col-lg-9 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.Footer-bottom */}
      </footer>
      {/* /.Footer */}
      <button id="scrollTopBtn">
        <i className="fa fa-long-arrow-up" />
      </button>
      <div className="module__search-container">
        <i className="fab fa-times close-search" />
        <form className="module__search-form">
          <input
            type="text"
            className="search__input"
            placeholder="Type Words Then Enter"
          />
          <button className="module__search-btn">
            <i className="fab fa-search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
