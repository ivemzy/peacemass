import React from "react";

const WaterBottle = () => {
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
              <h1 className="pagetitle__heading">Water Bottle Machine</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products">Products</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Water Bottle Machine
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
                <h5 className="text__block-title">
                  THE PROCESS OF BOTTLE MINERAL WATER PRODUCTION LINE
                </h5>
                <p>
                  the whole process of bottle water production line the whole
                  production line will be divided into two parts,the frist part
                  is RO water treatment system,the raw water get thrrough RO
                  water treatment system to generating pure water and on the
                  water tank you can be learned how's the raw water to
                  be,purified
                </p>
                <p>
                  <img
                    alt="Product Samples"
                    height={270}
                    src="assets/images/products/waterbottle.png"
                    width={450}
                  />
                </p>
                <p>
                  <img
                    alt="Product Samples"
                    height={270}
                    src="assets/images/products/wfm.png"
                    width={450}
                  />
                </p>
                <div>
                  <p>
                    Automatic Filling, Screw Capping Machines. Automatic Label
                    Applicators. Semi-Automatic & Automatic Labelers, Front,
                    Back and Wrap Around Labelling Machines, Expert Advice,
                    Shrink Wrap Our manual liquid filling machine can provide
                    efficient & accurate filling at high speed. Enjoy exclusive
                    deals online. Buy cheap & cheerful manual liquid fillers.
                  </p>
                  <p>
                    <img
                      alt="Product Samples"
                      height={270}
                      src="assets/images/products/bfm.png"
                      width={450}
                    />
                  </p>
                  <p>Fallon Water Filling Machine</p>
                  <p>
                    5 Gallon Filling Machine Up to 3,000 bottles per hour Up to
                    12 filling heads Flexible for 11L, 12L, 15L, 18.9L and 25L
                    Good for still water, pure water, and mineral water
                    Satisfaction Guaranteed 2 Years Quality Warranty on Time
                    Delivery Automatic Filling Machinery, Automatic Capping
                    Machinery, Automatic, Label, Applicators, Semi-Automatic and
                    Compact Filling Machines, Semi- Automatic and Compact
                    Labelers,
                  </p>
                  <p>
                    <img
                      alt="Product Samples"
                      height={270}
                      src="assets/images/products/pwm.png"
                      width={450}
                    />
                  </p>
                  <p>Pure Water Machine</p>
                  <p>
                    Our machine is used to make pure water or sachet water.
                    Automatic liquid packing machine sachet packaging We provide
                    machines of water treatment plant equipment and installation
                    bottle water production line. Our pure water machine is a
                    device that extracts water from the air, and then purifies
                    the water so that it meets WHO drinking water standards. our
                    Pure water machines are often installed in areas that do not
                    have access to drinking water. The significant distinction
                    between these machines is their capacity and their
                    distinctive features.
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

export default WaterBottle;
