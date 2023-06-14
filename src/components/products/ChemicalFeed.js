import React from "react";

const ChemicalProducts = () => {
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
              <h1 className="pagetitle__heading">Chemical Products</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products">Products</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Chemical Products
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
                <h5 className="text__block-title">Chemical Products</h5>
                <div>
                  <p>
                    We offer quotes and samples which include but are not
                    limited to the following:
                  </p>
                  <p>
                    <img
                      alt="Product Samples"
                      height={400}
                      src="assets/images/products/prodsamples.png"
                      width={747}
                    />
                  </p>
                  <p></p>
                  <p>
                    We supply different types of Chemicals products to various
                    companies and industries. The industries that we serve are
                    grouped into 3 Divisions: Petroleum/Petrochemicals, Paint
                    and Coatings, Food and Pharmaceuticals we have efficient and
                    professional team well organized company. Our Team of Fully
                    Qualified Chemists & DGSAs Can Advise on Chemical Safety &
                    Compliance and Offer Support & Advice on The Handling &
                    Subsequent Disposal of Laboratory Chemicals
                  </p>
                  <p>
                    <img
                      alt="Product Samples"
                      height={250}
                      src="assets/images/products/ureafert.png"
                      width={347}
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

export default ChemicalProducts;
