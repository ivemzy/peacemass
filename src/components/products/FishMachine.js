import React from "react";

const FishMachine = () => {
  return (
    <div>
      <section
        id="page-title"
        className="page-title page-title-layout10 bg-overlay bg-parallax text-center"
      >
        <div className="bg-img">
          <img src="../assets/images/page-titles/prfeed.jpg" alt="background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h1 className="pagetitle__heading">Fish Feed Machine</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products">Products</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Fish Feed Machine
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
                <h5 className="text__block-title">Fish Feed Machine</h5>
                <div>
                  <p>
                    <img
                      alt="Product Samples"
                      height={230}
                      src="assets/images/products/fishfeedmachine.png"
                      width={447}
                    />
                  </p>
                  <p>
                    Fish Feed Pelletizer Machine As an expert in fish feed
                    machinery, we have years of experience of fish feed machines
                    developing and designing. To give fish farmers and fish feed
                    plants a real support, manufacturing and supplying
                    high-quality fish feed production machine with rational
                    prices, and the machines from our company are working well
                    for making qualified pellet fish feed to ensure the profits
                    of fish farmers and feed plants. Therefore, we believe that
                    we can have great success together with our customers.
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

export default FishMachine;
