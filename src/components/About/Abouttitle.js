import React from "react";

const About1 = () => {
  return (
    <div>
      <section
        id="pageTitle"
        className="page-title page-title-layout1 bg-overlay bg-parallax"
      >
        <div className="bg-img">
          <img src="assets/images/page-titles/1.jpg" alt="background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
              <h1 className="pagetitle__heading">About Evermore Limited</h1>
            </div>
            {/* /.col-xl-7 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.page-title */}
      {/* ========================
    About Layout 2
  =========================== */}
      <section id="aboutLayout2" className="about about-layout2 pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
              {/* /heading */}
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="about__text">
                    <h3>About us </h3>
                    <p className="text-justify">
                      Evermore It Is Currently the Foremost Independent
                      Integrated facilities Management Company in Nigeria with a
                      team of experienced experts Across the whole spectra of
                      the value chain including engineers, administrators,
                      architects, property evaluators, surveyors, and finance
                      &amp; procurement specialists, trade, and Manufacturing.
                    </p>
                    <p className="text-justify">
                      Evermore Limited (‘Evermore’) is a facilities management,
                      Real Estate, Transportation, and Manufacturing company
                      that was incorporated in Nigeria.
                    </p>
                    <p className="text-justify">
                      Our brands and businesses are making it possible for
                      customers around the world to express themselves and to
                      choose a more sustainable lifestyle and business. We
                      create value for people and society in general by
                      delivering our customer offering and by developing with a
                      focus on sustainable and profitable growth.
                    </p>
                    <p className="text-justify">
                      Our company diversified in activities but focused on
                      capturing the entire value chain in trading, shipping,
                      storage, distribution and real Estate, products
                      manufacturing commenced operations to bridge the gap in
                      haulage of products to end users.
                    </p>
                    <p className="text-justify">
                      We are presently engaged in the full spectrum of
                      Integrated Facility Management and maintenance of
                      properties and equipment for several clients: commercial,
                      retail, residential, hospitality properties.
                    </p>
                    <p className="text-justify">
                      We aim to spark genuine conversations to understand your
                      needs, so we can design resilient solutions that add value
                      and deliver exceptional experiences. We explore the
                      unknown to discover technologies to help people all over
                      the world lead happier, healthier lives.
                    </p>
                  </div>
                </div>
                {/* /.col-lg-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.col-xl-7 */}
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-5 position-static">
              <div className="row mt-50 about__imgs-container">
                <div className="col-12">
                  <div className="about__img">
                    <img
                      src="assets/images/about/2.png"
                      alt="about"
                      className="img-fluid w-100"
                    />
                    <div
                      className="cta__banner"
                      style={{ backgroundColor: "#151e44" }}
                    >
                      <div className="cta__icon">
                        <i className="icon-factory-2" />
                      </div>
                      <h5 className="cta__title mb-0">
                        Building The Future, Restoring The Past
                      </h5>
                    </div>
                    {/* /.cta__banner */}
                  </div>
                  {/* /.about-img */}
                </div>
                {/* /.col-7 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.col-xl-5 */}
            {/* <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="about__text mr-30">
                <p style={{ fontSize: "18px" }}>
                  The initial purpose was to concentrate its core business and
                  outsource property facility management functions for Shell
                  Nigeria Closed Pension Fund Administrators Limited, (SNCPFA).
                  This arrangement culminated in the development of a strategic
                  alliance with Evermore for the effective management of the
                  facilities
                </p>
                <p style={{ fontSize: "18px" }}>
                  Evermore took charge of similar functions from Halliburton
                  Energy Services Limited in 2003 and has since then been the
                  Integrated Facility Management Providers to clients like
                  SNEPCO, Addax, Schlumberger, Nigerian Breweries, KPMG, BOI,
                  Total,etc. <br />
                  Evermore Limited is presently engaged in full spectrum of
                  Integrated Facility Management and maintenance of properties
                  and equipment for several clients; commercial, retail,
                  residential, hospitality properties and specialized
                  properties. We specializes in the provision of Hard and Soft
                  Services and offers integrated property management services,
                  which are tailored to meet client’s need.
                </p>
              </div>
            </div> */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      
      {/* /.About Layout 2 */}
    </div>
  );
};
export default About1;
