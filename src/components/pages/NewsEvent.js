import React from "react";

const NewsEvent = () => {
  return (
    <div>
      <section
        id="pageTitle"
        className="page-title page-title-layout10 text-center bg-overlay bg-parallax"
      >
        <div className="bg-img">
          <img src="assets/images/page-titles/11.jpg" alt="background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <h1 className="pagetitle__heading">News and Event</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="newsevent#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    News and Event
                  </li>
                </ol>
              </nav>
            </div>
            {/* /.col-lg-8 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.page-title */}
      {/* ======================
        Blog Grid
      ========================= */}
      <section id="team" className="team  text-center pt-120 pb-50">
        <div className="container">
          <div className="row">
            {/* Member #4 */}
            <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
              <h3>Recent Press Releases </h3>
              <p className="text-justify">
                Our company has been recognized as one of the Nigeria Most
                Ethical Companies by Ethisphere, a global leader in defining and
                advancing the standards of ethical business practices.
              </p>
              <p className="text-justify">
                Today announced the launch of a new global service line that
                advises clients on establishing their electric vehicle charging
                infrastructure, including advising on EV-charging strategy,
                identifying locations for charging sites, planning and
                installation of EV-charging infrastructure and providing overall
                program management and ongoing maintenance.
              </p>
              <p className="text-justify">
                We are the top-ranked firm for commercial real estate investment
                sales and Retail Services in Nigeria according to the news. This
                is the 12th consecutive year that our company has claimed the
                top spot.
              </p>
              <p className="text-justify">
                As announced Today board of directors our company will expound
                our investments to Manufacturing and production in Nigeria and
                some countries in Africa.
              </p>
              <br />
              <img
                alt="Leadership"
                src="assets/images/products/newsE.png"
              />
              
            </div>
            {/* /.col-lg-3 */}
            {/* Member #7 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    </div>
  );
};

export default NewsEvent;
