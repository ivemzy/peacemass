import React from 'react';

const Hse = () => {
    return (
        <div>
          <section id="page-title" className="page-title page-title-layout10 bg-overlay bg-parallax text-center">
            <div className="bg-img"><img src="assets/images/page-titles/12.jpg" alt="background" /></div>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                  <h1 className="pagetitle__heading">Health Safety &amp; Environment</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item"><a href="hse#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Health Safety &amp; Environment</li>
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
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="portfolio-item">
                    <div className="portfolio__img">
                      <img src="assets/images/case-studies/1.png" alt="portfolio img" />
                    </div>{/* /.portfolio-img */}
                    <div className="portfolio__content">
                      <h4 className="portfolio__title"><a href="hse#">Health and Safety</a></h4>
                      <div className="divider__line divider__lg" />
                      <p className="portfolio__desc" style={{color: '#000'}}>Peacemass is committed to maintaining the integrity of assets within its possession and ensuring that the health and safety of the tenants, employees, contractors and other stakeholders are not negatively impacted by its operations.</p>
                    </div>{/* /.portfolio-content */}
                  </div>{/* /.portfolio-item */}
                </div>{/* /.col-lg-4 */}
                {/* portfolio item #2 */}
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="portfolio-item">
                    <div className="portfolio__img">
                      <img src="assets/images/case-studies/2.png" alt="portfolio img" />
                    </div>{/* /.portfolio-img */}
                    <div className="portfolio__content">
                      <h4 className="portfolio__title"><a href="hse#">Environment</a></h4>
                      <div className="divider__line divider__lg" />
                      <p className="portfolio__desc" style={{color: '#000'}}>Peacemass is committed to providing quality service in a manner that ensures a safe and healthy workplace. We operate in compliance with all relevant environmental legislation and strive to apply environmental best practices in all we do.</p>
                    </div>{/* /.portfolio-content */}
                  </div>{/* /.portfolio-item */}
                </div>{/* /.col-lg-4 */}
                {/* portfolio item #3 */}
                <div className="col-sm-6 col-md-6 col-lg-2">
                </div>
                {/* /.col-lg-4 */}
                {/* portfolio item #4 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>
        </div>
      );
};

export default Hse;
