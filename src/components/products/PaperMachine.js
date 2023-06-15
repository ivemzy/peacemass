import React from "react";

const PaperMachine = () => {
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
              <h1 className="pagetitle__heading">A4 Paper Machines</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products">Products</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    A4 Paper Machines
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
                <h5 className="text__block-title">A4 Paper Machines</h5>
                <div>
                  <p>
                    Our A4 paper making machines are new technology equipment
                    for converting jumbo paper rolls into A4 or A3 size paper
                    sheets for office use. Our A4 paper cutting & packaging
                    machines have fully automatic A4 paper production. Our A4
                    paper cutting machine: it can cut the produced paper into A4
                    size. Due to
                  </p>
                  <p></p>
                  <p>
                    <img
                      alt="Product Samples"
                      height={250}
                      src="assets/images/products/a4paper.png"
                      width={557}
                    />
                  </p>
                  <p>
                    its high automatic degree, A4 size paper cutting machine can
                    cut many papers quickly. High quality cutting machine is
                    necessary. Our A4 paper roll cutting machine is composed of
                    a paper roll holder, an automatic tension controller, and a
                    high-precision paper cutting system. This production line
                    can relate to A4 Paper packaging. *Introduce the most
                    advanced technology and the best quality accessories, with
                    great durability and performance. *Our paper machine is
                    fully automatic and computerized. So, the paper mill needs
                    less worker training. *Professional engineers’ overseas
                    production design and machine installation and maintenance…
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

export default PaperMachine;
