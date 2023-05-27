import React from "react";

const Transformer = () => {
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
              <h1 className="pagetitle__heading">Transformer Welder</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products">Products</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Transformer Welder
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
                <h5 className="text__block-title">Transformer Welder</h5>
                <div>
                  <p>Transformer Welder</p>
                  <p>
                    In truth, every welder has a transformer inside—even
                    inverter-based welders. However, transformer welders don’t
                    use advanced technology to reduce the core size. So, when we
                    say transformer-based or transformer-core welder, we are
                    referring to the old technology of bulky, heavy machines.
                  </p>
                  <p>
                    <img
                      alt=" text, electronics, cable, electronic deviceDescription automatically generated"
                      height={209}
                      src="/assets/images/products/transformer1.png"
                      width={431}
                    />
                  </p>
                  <p>Car Batteries/APC UPS Systems</p>
                  <p>
                    We offer portable car batteries power which we usually take
                    for granted until We have the best quality batteries in
                    Nigeria with 12-month warranty period. Submit to our new
                    collection Battery Management Systems for Vehicle
                    Electrification more about publishing your engineering
                    research with Communications Engineering.
                  </p>
                  <p>
                    A dependable energy supply to the wide-ranging comfort and
                    safety features is an important factor when choosing a
                    battery to our car batteries. We are the powerhouse for
                    recent models or upmarket vehicles with multiple electronic
                    consumables. innovative grid technology safeguards against
                    performance loss
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <img
                      alt=" electronics, batteryDescription automatically generated"
                      height={295}
                      src="/assets/images/products/transformer2.png"
                      width={624}
                    />
                  </p>
                  <p>Transformers</p>
                  <p>
                    NEARLY 100 YEARS OF TRANSFORMER EXPERIENCE. Since 1924,
                    Niagara Power Transformer has been counted on to maintain
                    the performance quality, reliability, and life of the
                    transformers throughout your electric power system by
                    providing complete transformer service solutions for almost
                    any manufacturer’s units worldwide, including installation.
                  </p>
                  <p>
                    <img
                      alt=" machine, duplicatorDescription automatically generated"
                      height={361}
                      src="/assets/images/products/transformer3.png"
                      width={320}
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

export default Transformer;
