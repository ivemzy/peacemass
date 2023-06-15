import React from "react";

const ToiletPaper = () => {
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
              <h1 className="pagetitle__heading">Toilet Paper Machine</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products">Products</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Toilet Paper Machine
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
                <h5 className="text__block-title">Toilet Paper Machine</h5>
                <p>
                  <img
                    alt="Product Samples"
                    height={250}
                    src="assets/images/products/toiletpaper.png"
                    width={457}
                  />
                </p>
                <div>
                  <p>
                    In recent reports, the toilet paper manufacturing business
                    has been reported as being one of the fastest growing
                    manufacturing industries all over the world today. Many
                    local toilet paper manufacturing plants are doubling and
                    trebling their production to keep up with demand. For the
                    growing inquiry, our Machinery has provided toilet paper
                    machines to many companies over Africa toilet paper
                    production, most of the factories purchase their second and
                    third toilet paper manufacturing machine a few months into
                    running their operations. If you want to purchase toilet
                    paper making machines for sale, our Machinery our company
                    will be your ideal toilet paper machine supplier. Our
                    Machinery can provide you all full-automatic toilet paper
                    roll production line and semi-automatic toilet paper making
                    production line for sale. Let us learn the details of toilet
                    paper roll plant now.
                  </p>
                  <p></p>
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

export default ToiletPaper;
