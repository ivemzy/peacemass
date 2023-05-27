import React from 'react';

const About1 = () => {
    return (

        <section id="aboutLayout1" className="about about-layout1 pt-120 pb-0">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="about__img">
                  <img src="assets/images/about/1.png" alt="about" className="img-fluid" />
                  <div className="cta__banner" style={{backgroundColor: '#151e44'}}>
                    <div className="cta__icon">
                      <i className="icon-factory-2" />
                    </div>
                    <h5 className="cta__title">Integrated Facility Management</h5>
                  </div>
                </div>{/* /.about__img */}
              </div>{/* /.col-lg-6 */}
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="heading heading-2 mt-50 mb-30">
                  <span className="heading__subtitle">Evermore Limited</span>
                  <h2 className="heading__title">Welcome to Evermore Limited</h2>
                  <p className="heading__desc" style={{color: '#000'}}>Evermore Limited is the foremost integrated facility management company in Nigeria, incorporated in 1997 as a Joint Venture between Shell Trustees Nigeria Limited now Shell Nigeria Closed Pension Fund Administrators Limited, (SNCPFA), Pension Managers of Shell Oil Nigeria Limited and Panther Investments Limited.
                    <br />The initial purpose was to concentrate its core business and outsource property facility management functions for Shell Nigeria Closed Pension...
                  </p>
                </div>{/* /heading */}
                <a href="/about" className="btn btn__secondary mr-30">
                  <i className="icon-arrow-right" /><span>About Us</span>
                </a>
              </div>{/* /.col-lg-6 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>
      );
}
export default About1;