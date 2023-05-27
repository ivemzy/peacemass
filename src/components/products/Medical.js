import React from "react";

const Medical = () => {
  return (
    <div>
      <section
        id="page-title"
        className="page-title page-title-layout10 bg-overlay bg-parallax text-center"
      >
        <div className="bg-img">
          <img src="../assets/images/page-titles/13.jpg" alt="background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h1 className="pagetitle__heading">Medical Supply</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products">Products</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Medical Supply
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
      {/* ======================
        Text Content Section
      ========================= */}
      <section id="textContentSection" className="text-content-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-2" />
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="text__block">
                <h5 className="text__block-title">Medical Supply</h5>
                <div>
                  <p>
                    <img
                      alt=" medical equipment, room, indoor, medicalDescription automatically generated"
                      height={328}
                      src="assets/images/products/medical1.png"
                      width={624}
                    />
                  </p>
                  <p>Hospital Equipment</p>
                  <p>
                    There are 40,127 operational hospitals and clinics in
                    Nigeria our company supplies Hospital Medical Laboratory and
                    equipment to different hospital over Nigeria we have best
                    quality Hospital Medical Equipment in Nigeria.
                  </p>
                  <p>
                    We supply the best medical equipment that keeps accurate
                    track of a client’s condition and state of health during and
                    after surgery. Our company provide Affordable Hemodialysis
                    Machine in Nigeria and all medical equipment’s.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <img
                      alt=" medical equipment, healthcare, room, medicalDescription automatically generated"
                      height={299}
                      src="assets/images/products/medical2.png"
                      width={448}
                    />
                  </p>
                  <p>
                    <br />
                  </p>
                </div>
              </div>
              {/* /.text-block */}
            </div>
            {/* /.col-lg-8 */}
            <div className="col-sm-12 col-md-12 col-lg-2" />
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    </div>
  );
};

export default Medical;
