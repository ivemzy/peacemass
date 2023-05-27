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
              <h1 className="pagetitle__heading">Block Production</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products">Products</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Block Production
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
                <h5 className="text__block-title">Block Production</h5>
                <div>
                  <p>Block Production Machine</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <img alt="w im" height={333} src="/assets/images/products/block1.png" width={455} />
                  </p>
                  <p>Block Production</p>
                  <p>
                    Low Price range brick making machine in Nigeria. Our price
                    category comprises small and manual brick-making machines.
                    You can buy these machines from our company.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    We are leading Nigerian manufacturers and suppliers of a
                    range of Ice Block Making Machine, Cold room, Blast
                    Freezers, Cold storage barns, Ovens, Refrigerators and Air
                    Conditioners, among other domestic and industrial.
                  </p>
                  <p>Real Estate /Building Construction</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <img
                      alt="house, window"
                      height={212}
                      src="/assets/images/products/block2.png"
                      width={417}
                    />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    We provide complete construction solutions. From multi
                    residential estates to single units, executing the most
                    complicated designs, we take pride in our track record of
                    bringing multi-dimensional residential designs to reality.
                  </p>
                  <p>
                    Most of our contracts are ‘design &amp; build’ projects. We
                    are involved in each stage of the building construction. We
                    remain focused on building long-lasting relationships by
                    consistently delivering a world-class performance.
                  </p>
                  <p>Road Construction</p>
                  <p>
                    <img
                      alt="outdoor, sky, road, land vehicleDescription automatically generated"
                      height={223}
                      src="/assets/images/products/block3.png"
                      width={398}
                    />
                  </p>
                  <p>
                    Construction projects in Nigeria are driven by both the
                    government and private investors. The government provides
                    key infrastructure such as roads, bridges, dredged water
                    ways and ports, and railways via several means including
                    full the construction equipment sub-sector as well as the
                    building materials subsectors remain the leading subsectors
                    in the construction industry. Construction equipment.
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
