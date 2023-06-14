import React from "react";

const ProductFeed = () => {
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
              <h1 className="pagetitle__heading">Animal Feed</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products">Products</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Animal Feed
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
                <h5 className="text__block-title">Animal Feed</h5>
                <div>
                  <p>
                    Animal Feed We are a leading name in the supply of trace
                    elements and specialized additives for the animal feed
                    industry. Extensive research and sourcing allow us to offer
                    a wide range of organic and inorganic products to meet your
                    animal nutrition needs with our bulk chemical supply.
                  </p>
                  <p>
                    Our Animal Nutrition Chemical Portfolio Our animal nutrition
                    chemical portfolio is continuously expanding and includes:
                  </p>
                  <ul>
                    <li>*Feed materials - Calcined Magnesite</li>
                    <li>
                      *Trace elements - Zinc Oxide, Copper Sulphate and
                      Manganous Oxide
                    </li>
                    <li>
                      *Preservatives - Potassium Sorbate and Sodium Benzoate
                    </li>
                    <li>
                      *Acidity regulators - Citric Acid, vitamins, and amino
                      acids
                    </li>
                    <li>
                      *Processing and preservation aids for on-farm feeds and
                      forages, hygiene, and veterinary products
                    </li>
                    <li>
                      *Copper Sulphate and Zinc Sulphate Heptahydrate,
                      Hexahydrate or Monohydrate.{" "}
                    </li>
                  </ul>
                  <p></p>

                  <h5 className="text__block-title">
                    Why work with us for your animal nutrition chemical needs?
                  </h5>
                  <p>
                    <img
                      alt="Animal Feed"
                      height={269}
                      src="assets/images/products/anifeed.png"
                      width={474}
                    />
                  </p>
                  <p>
                    Quality, sustainability, and safety are at the core of our
                    chemical supply for animal feed. With ever increasing
                    legislation in the animal nutrition chemical sector, we have
                    established a Group Quality Department to ensure that we
                    meet and often surpass international standards. Our in-depth
                    knowledge and awareness of new regulations and compliance
                    requirements in the animal nutrition industry provides you,
                    our customers, with the peace of mind you require in this
                    increasingly regulated sector.
                  </p>
                  <p>
                    <img
                      alt="Fish Feed"
                      height={269}
                      src="assets/images/products/fishfeed.png"
                      width={474}
                    />
                  </p>
                  <p>
                    We supply high quality, full-floating freshwater fish feed
                    to more than 15,000 local farmers. Our fish feed brands are
                    specifically tailored to the needs of the African catfish
                    and farming. Although commercial fish feed is made as either
                    extruded (floating or buoyant) or pressure-pelleted
                    (sinking) feeds, the types that are common in Nigeria can
                    further be broken down into: sinking wafers, flakes,
                    pellets, and gel food.
                  </p>
                  <p>
                    <img
                      alt="Fish grains"
                      height={232}
                      src="assets/images/products/fishgrains.png"
                      width={347}
                    />
                  </p>

                  <p>
                    Our Fish Feed Quality and Safety has implemented dynamic
                    quality assurance and control at every stage of our
                    production. We do this to ensure feed and food safety,
                    quality, and to preserve our leadership in the global
                    aquafeed market.
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

export default ProductFeed;
