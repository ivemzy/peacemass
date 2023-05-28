import React from "react";

const About1 = () => {
  return (
    <section id="aboutLayout1" className="about about-layout1 pt-120 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="about__img">
              <img
                src="assets/images/about/1.png"
                alt="about"
                className="img-fluid"
              />
              <div
                className="cta__banner"
                style={{ backgroundColor: "#151e44" }}
              >
                <div className="cta__icon">
                  <i className="icon-factory-2" />
                </div>
                <h5 className="cta__title">Integrated Facility Management</h5>
              </div>
            </div>
            {/* /.about__img */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="heading heading-2 mt-50 mb-30">
              <span className="heading__subtitle">Evermore Limited</span>
              <h2 className="heading__title">Welcome to Evermore Limited</h2>
              <p className="heading__desc" style={{ color: "#000" }}>
                Welcome to Evermore Investments. We’re actively purchasing
                commercial and residential property, building factories, we
                create new ideas and collaborate with innovators from across
                Nigeria and Africa to bring solutions we are in a joint venture
                with big companies in Africa If you want to be part of the
                revolution, get in touch today.
                <br /><br /> We will make change happen together. Evermore Limited
                (‘Evermore’) is a facilities management, Real Estate,
                Transportation, and Manufacturing company that was incorporated
                in Nigeria We have branch office in different countries in
                Africa.
                <br /><br /> We Listening to our customers and helping our customers
                succeed with affordable high-quality products has always been
                our goal. We are very aware that a strong relationship with our
                customers is the driving force of our growth.
              </p>
            </div>
            {/* /heading */}
            <a href="/about" className="btn btn__secondary mr-30">
              <i className="icon-arrow-right" />
              <span>About Us</span>
            </a>
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
};
export default About1;
