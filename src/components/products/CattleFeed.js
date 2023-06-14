import React from "react";

const CattleFeed = () => {
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
              <h1 className="pagetitle__heading">Cattle Feed</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products">Products</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Cattle Feed
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
                <h5 className="text__block-title">Cattle Feed</h5>
                <div>
                  <p>
                    <img
                      alt="Fish grains"
                      height={232}
                      src="assets/images/products/productfeed.png"
                      width={347}
                    />
                  </p>
                  <p>
                    Small Scale Cattle Feed Pellet Mill Small Scale Cattle Feed
                    Pellet Mill Affordable and Efficient The cattle feed pellet
                    machines are easy to operate and cattle farming is being
                    practiced on a small or large scale we offer wide range of
                    service to our customers. Animal farmers appreciate buying
                    small animal feed pellet machines for making feeds more due
                    to its low price, durability, simple operation, and
                    long-life span that serves the farmer efficiently. Small
                    scale feed pellet mill is designed for small scale animal
                    feed pellet production. It is an animal feed machinery
                    system to produce feed for livestock, dairy cows. With small
                    scale feed pellet making machine, you can process the cattle
                    feed for self-use, for sale, for commercial use, for
                    investing.
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

export default CattleFeed;
