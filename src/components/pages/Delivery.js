import React from 'react';

const Delivery = () => {
    return (
        <div>
          <section id="page-title" className="page-title page-title-layout10 bg-overlay bg-parallax text-center">
            <div className="bg-img"><img src="assets/images/page-titles/delivery-property.jpg" alt="background" /></div>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                  <h1 className="pagetitle__heading">Service Delivery &amp; Property Service</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item"><a href="delivery#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Service Delivery &amp; Property Service</li>
                    </ol>
                  </nav>
                </div>{/* /.col-lg-8 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>{/* /.page-title */}
          {/* =========================== 
        portfolio Grid 
      ============================= */}
          <section id="portfolioGrid" className="portfolio portfolio-grid">
            <div className="container">
              <div className="row">
                {/* portfolio item #1 */}
                <div className="col-sm-6 col-md-6 col-lg-2">
                </div>{/* /.col-lg-4 */}
                {/* portfolio item #2 */}
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="portfolio-item">
                    <div className="portfolio__img">
                      <img src="assets/images/case-studies/service-delivery.jpg" alt="portfolio img" />
                    </div>{/* /.portfolio-img */}
                    <div className="portfolio__content">
                      <h4 className="portfolio__title"><a href="delivery#">Service Delivery</a></h4>
                      <div className="divider__line divider__lg" />
                      <div className="footer__widget footer__widget-nav">
                        <h6 className="footer__widget-title" style={{color: '#000'}}>Maintenance:</h6>
                        <div className="footer__widget-content">
                          <nav>
                            <ul className="list-unstyled">
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>MEP</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Specialist supplier</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Building fabric</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Water features</a></li>
                              <hr />
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Landscaping</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Cleaning</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Security</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Pest control</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Sewage maintenance</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Waste management</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Parking management</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>HSE</a></li>
                            </ul>
                          </nav>
                        </div>{/* /.footer-widget-content */}
                      </div>{/* /.col-xl-2 */}
                    </div>{/* /.portfolio-content */}
                  </div>{/* /.portfolio-item */}
                </div>{/* /.col-lg-4 */}
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="portfolio-item">
                    <div className="portfolio__img">
                      <img src="assets/images/case-studies/property-services.jpg" alt="portfolio img" />
                    </div>{/* /.portfolio-img */}
                    <div className="portfolio__content">
                      <h4 className="portfolio__title"><a href="delivery#">Property Services</a></h4>
                      <div className="divider__line divider__lg" />
                      <div className="footer__widget footer__widget-nav">
                        <div className="footer__widget-content">
                          <nav>
                            <ul className="list-unstyled">
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Property Consulting</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Lease management</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Property inspection</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Advertising and marketing</a></li>
                              <li><a href="delivery#" style={{color: '#000', fontSize: '16px'}}>Utility Management</a></li>
                            </ul>
                          </nav>
                        </div>{/* /.footer-widget-content */}
                      </div>{/* /.col-xl-2 */}
                    </div>{/* /.portfolio-content */}
                  </div>{/* /.portfolio-item */}
                </div>{/* /.col-lg-4 */}
                <div className="col-sm-6 col-md-6 col-lg-2">
                </div>{/* /.col-lg-4 */}
                {/* portfolio item #3 */}
                {/* /.col-lg-4 */}
                {/* portfolio item #4 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>{/* /.portfolio Grid */}
        </div>
      );
};

export default Delivery;
