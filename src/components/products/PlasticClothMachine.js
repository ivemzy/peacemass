import React from "react";

const PlasticClothMachine = () => {
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
              <h1 className="pagetitle__heading">T SHIRT PLASTIC MACHINE</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products">Products</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    T SHIRT PLASTIC MACHINE
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
                <h5 className="text__block-title">T SHIRT PLASTIC MACHINE</h5>
                <div>
                  <p>
                    Here’s a quick summary of our 3 printing machines if you’re
                    in a rush. In my opinion, the best sublimation printer for
                    T-shirts is our brand. It can produce large designs up to 11
                    x 17 inches and is a very efficient printer it's has
                    excellent print quality and was designed specifically.
                  </p>
                  <p></p>
                  <p>
                    <img
                      alt="Product Samples"
                      height={250}
                      src="assets/images/products/shirtmachine.png"
                      width={457}
                    />
                  </p>
                  <p>
                    Our T Shirt Plastic Bag Making Machine This High-Speed T
                    Shirt Plastic Bag Making Machine is designed to convert
                    rolled plastic films into t-shirt bags. Features With Double
                    Servo Control System with Length Control System with Auto
                    Counting System with PLC Touch Screen Control System With
                    Auto T Shirt Bag Puncher Our printer is for printing on thin
                    clothes, plastic T shirts, onesies, plastic and nylon
                    packaging material production, automatic Clothing Folding
                    Machine Shirt Folding Machine T-shirt Automatic Clothes
                    Folding Assistant.
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

export default PlasticClothMachine;
