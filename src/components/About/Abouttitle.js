import React from 'react';

const About1 = () => {
  return (
    <div>
      <section id="pageTitle" className="page-title page-title-layout1 bg-overlay bg-parallax">
        <div className="bg-img"><img src="assets/images/page-titles/1.jpg" alt="background" /></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
              <h1 className="pagetitle__heading">About Evermore Limited</h1>
              <p className="pagetitle__desc">We are presently engaged in full spectrum of Integrated Facilities Management and Maintenance of properties and equipment in various industry sectors</p>
              <a href="/services" className="btn btn__primary btn__hover2">
                <i className="icon-arrow-right" /><span>Our Services</span>
              </a>
            </div>{/* /.col-xl-7 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>{/* /.page-title */}
      {/* ========================
    About Layout 2
  =========================== */}
      <section id="aboutLayout2" className="about about-layout2 pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
              <div className="heading heading-2 mb-50">
                <span className="heading__subtitle">About Evermore Limited</span>
                <h2 className="heading__title">It is currently the foremost independent Integrated Facilities Management Company in Nigeria with a team of experienced experts across the whole spectra of the value chain including Engineers, Administrators, Architects, Property evaluators, Surveyors and Finance &amp; Procurement specialists.</h2>
              </div>
              {/* /heading */}
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="about__text mr-30">
                    <p style={{fontSize: '18px'}}>Evermore Limited (‘Evermore’) is a facilities management company that was incorporated in 1997 as a joint venture between Shell Trustees Nigeria Ltd (Now Shell Nigeria Closed Pension Fund Administrators Limited (‘SNCPFA’) &amp; Panther Investments Limited.</p>
                    <p>This strategic alliance enabled SNCPFA to focus on its core competence while Evermore focused on facilities management.</p>
                  </div>
                </div>{/* /.col-lg-6 */}
              </div>{/* /.row */}
            </div>{/* /.col-xl-7 */}
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-5 position-static">
              <div className="row mt-50 about__imgs-container">
                <div className="col-12">
                  <div className="about__img">
                    <img src="assets/images/about/2.png" alt="about" className="img-fluid w-100" />
                    <div className="cta__banner" style={{backgroundColor: '#151e44'}}>
                      <div className="cta__icon">
                        <i className="icon-factory-2" />
                      </div>
                      <h5 className="cta__title mb-0">Building The Future, Restoring The Past</h5>
                    </div>{/* /.cta__banner */}
                  </div>{/* /.about-img */}
                </div>{/* /.col-7 */}
              </div>{/* /.row */}
            </div>{/* /.col-xl-5 */}
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="about__text mr-30">
                <p style={{fontSize: '18px'}}>The initial purpose was to concentrate its core business and outsource property facility management functions for Shell Nigeria Closed Pension Fund Administrators Limited, (SNCPFA). This arrangement culminated in the development of a strategic alliance with Evermore for the effective management of the facilities</p>
                <p style={{fontSize: '18px'}}>Evermore took charge of similar functions from Halliburton Energy Services Limited in 2003 and has since then been the Integrated Facility Management Providers to clients like SNEPCO, Addax, Schlumberger, Nigerian Breweries, KPMG, BOI, Total,etc. <br />Evermore Limited is presently engaged in full spectrum of Integrated Facility Management and maintenance of properties and equipment for several clients; commercial, retail, residential, hospitality properties and specialized properties. We specializes in the provision of Hard and Soft Services and offers integrated property management services, which are tailored to meet client’s need.</p>
              </div>
            </div>
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>{/* /.About Layout 2 */}
      <section id="blogGrid" className="blog blog-grid">
        <div className="container">
          <div className="row heading heading-2 mb-40">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <span className="heading__subtitle">Explore Recent Works</span>
            </div>{/* /.col-lg-12 */}
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h2 className="heading__title">Mission, Vision and Core Values</h2>
            </div>{/* /heading */}
          </div>
          <div className="row">
            {/* Blog Item #1 */}
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog__img">
                  <a href="about#">
                    <img src="assets/images/blog/grid/1.jpg" alt="blog images" />
                  </a>
                </div>{/* /.entry-img */}
                <div className="blog__content">
                  <h4 className="blog__title"><a href="about#">Vision</a></h4>
                  <p className="blog__desc" style={{color: '#000'}}>To be recognized as a role model organization providing long term innovative Facility Management Solutions that preserve the quality of our clients assets, enhance their return on investment, add value to their brand and improve their overall business performance
                  </p>
                </div>{/* /.entry-content */}
              </div>{/* /.blog-item */}
            </div>{/* /.col-lg-4 */}
            {/* Blog Item #2 */}
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog__img">
                  <a href="about#">
                    <img src="assets/images/blog/grid/2.jpg" alt="blog images" />
                  </a>
                </div>{/* /.entry-img */}
                <div className="blog__content">
                  <h4 className="blog__title"><a href="about#">Mission</a></h4>
                  <p className="blog__desc" style={{color: '#000'}}>We will create success for ourselves and our clients through our energy, commitment and dedication to service excellence, people development, continuous business improvement and by our ability to think harder and work smarter.</p>
                </div>{/* /.entry-content */}
              </div>{/* /.blog-item */}
            </div>{/* /.col-lg-4 */}
            {/* Blog Item #3 */}
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog__img">
                  <a href="about#">
                    <img src="assets/images/blog/grid/3.jpg" alt="blog images" />
                  </a>
                </div>{/* /.entry-img */}
                <div className="blog__content">
                  <h4 className="blog__title"><a href="about#">Core Values</a></h4>
                  <p className="blog__desc" style={{color: '#000'}}><strong>Quality:</strong> We strive to provide top quality facility management services to our client and continually improve in the solutions we offer.<br /> <strong>Integrity:</strong> We act with honesty and integrity, offering the best value always. <br /><strong>Self-fulfilment:</strong> We encourage our employees to continually improve and develop themselves in their jobs with a view to increasing their value and self-fulfilment levels.</p>
                </div>{/* /.entry-content */}
              </div>{/* /.blog-item */}
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
    </div>
  );
}
export default About1