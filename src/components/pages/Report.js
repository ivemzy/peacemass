import React from "react";

const Report = () => {
  return (
    <div>
      <section
        id="page-title"
        className="page-title page-title-layout10 bg-overlay bg-parallax text-center"
      >
        <div className="bg-img">
          <img src="assets/images/page-titles/13.jpg" alt="background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h1 className="pagetitle__heading">Report an Observation</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="report#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="report#">Report an Observation</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Report an Observation
                  </li>
                </ol>
              </nav>
            </div>
            {/* /.col-lg-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.page-title */}
      {/* ==========================
          contact layout 1
      =========================== */}
      <section id="contactLayout1" className="contact contact-layout1 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-2 col-lg-2" />
            <div className="col-sm-12 col-md-8 col-lg-8">
              <div className>
                <br />
                <br />
                <form
                  className="contact__form-panel"
                  action="https://evermoreltd.com/"
                  method="post"
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-sm-12 contact__form-panel-header">
                      <h4>Report an Observation</h4>
                      <p>HSE Incident Prevention</p>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="resident"
                          className="form-control"
                          placeholder="Resident"
                        />
                      </div>
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="comments"
                          placeholder="Additional Details!"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    {/* /.col-lg-12 */}
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <button
                        type="submit"
                        className="btn btn__secondary btn__block"
                      >
                        <span>Submit an Observation</span>
                        <i className="icon-arrow-right" />
                      </button>
                    </div>
                    {/* /.col-lg-12 */}
                  </div>
                  {/* /.row */}
                </form>
              </div>
              {/* /.contact__panel */}
            </div>
            {/* /.col-lg-12 */}
            <div className="col-sm-12 col-md-2 col-lg-2" />
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.contact layout 1 */}
      {/* ==========================
         Contact Info
      ============================ */}
      <section id="contactInfo" className="contact contact-info pt-0">
        <div className="container">
          <div className="row">
            {/* Contact panel #1 */}
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div className="contact-info-box">
                <h4 className="contact__info-box-title">HEAD OFFICE</h4>
                <ul className="contact__info-list list-unstyled">
                  <li>
                    Email:<a href="milto:evermoretradecoltd132@outlook.com">evermoretradecoltd132@outlook.com
                    </a>
                  </li>
                  <li>
                    Address: Shop A08, Premier Plaza, Wuse Zone 3, by Idimba Street Abuja
                  </li>
                  <li>Phone: +234-8107502055</li>
                  <li>Hours: Mon-Fri: 8am – 5pm</li>
                </ul>
                {/* /.contact__info-list */}
              </div>
              {/* /.contact-info-box */}
            </div>
            {/* /.col-lg-4 */}
            {/* Contact panel #2 */}
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div className="contact-info-box">
                <h4 className="contact__info-box-title">LAGOS OFFICE</h4>
                <ul className="contact__info-list list-unstyled">
                  <li>
                    Email:<a href="milto:evermorecoltd.com">
                      evermorecoltd.com
                    </a>
                  </li>
                  <li>
                    Address: RM104 Jankara Market in Idumota, Lagos Island
                  </li>
                  <li>Phone: +234-8107502055</li>
                  <li>Hours: Mon-Fri: 8am – 5pm</li>
                </ul>
                {/* /.contact__info-list */}
              </div>
              {/* /.contact-info-box */}
            </div>
            {/* /.col-lg-4 */}
            {/* Contact panel #3 */}
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div className="contact-info-box">
                <h4 className="contact__info-box-title">
                  PORT HARCOURT OFFICE
                </h4>
                <ul className="contact__info-list list-unstyled">
                  <li>
                    Email:<a href="milto:evermorecoltd.com">
                      evermorecoltd.com
                    </a>
                  </li>
                  <li>
                    Address: B102 Port harcourt main market, Rukpokwu-Obio, Rivers, Nigeria. 855022
                  </li>
                  <li>Phone: +234-8107502055</li>
                  <li>Hours: Mon-Fri: 8am – 5pm</li>
                </ul>
                {/* /.contact__info-list */}
              </div>
              {/* /.contact-info-box */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div className="contact-info-box">
                <h4 className="contact__info-box-title">WARRI OFFICE</h4>
                <ul className="contact__info-list list-unstyled">
                  <li>
                    Email:<a href="milto:evermorecoltd.com">
                      evermorecoltd.com
                    </a>
                  </li>
                  <li>
                    Address: Km 1077 Refinery Rd, Effurun 382101, Warri, Delta  State Nigeria
                  </li>
                  <li>Phone: +234-8107502055</li>
                  <li>Hours: Mon-Fri: 8am – 5pm</li>
                </ul>
                {/* /.contact__info-list */}
              </div>
              {/* /.contact-info-box */}
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    </div>
  );
};

export default Report;
