import React from "react";

const Agric = () => {
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
              <h1 className="pagetitle__heading">Solar</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products">Products</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Solar
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
                <h5 className="text__block-title">Solar</h5>
                <div>
                  <p>
                    <br />
                  </p>
                  <p>
                    <img alt="rn w" height={292} src="/assets/images/products/solar1.png" width={623} />
                    <br/>
                    Our Solar is a leading solution provider of solar
                    electrification systems in Nigeria. Our goal is to maximize
                    the utilization of solar solutions in meeting the
                    illumination needs of the country – whether on public roads
                    or in private estates, whether in cities or in villages,
                    whether in factories or in your hour homes.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Our relationship with our clients starts off with a site
                    evaluation by one of our Solar Consultants. They work with
                    clients to determine their specific energy requirements and
                    recommend solutions that both address the needs and fits
                    within their budget.
                  </p>
                  <p>
                    <img
                      alt="solar power, solar energy, solar panel, solar cellDescription automatically generated"
                      height={237}
                      src="/assets/images/products/solar2.png"
                      width={316}
                    />
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

export default Agric;
