import React from "react";

const ChickenFeed = () => {
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
              <h1 className="pagetitle__heading">Chicken Feed</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products">Products</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Chicken Feed
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
                <h5 className="text__block-title">Chicken Feed</h5>
                <div>
                  <p>
                    <img
                      alt="Product Samples"
                      height={230}
                      src="assets/images/products/chickenfeed.png"
                      width={447}
                    />
                  </p>
                  <p>
                    Organic Chicken Feed We stock some of the best organic
                    chicken feed suppliers to guarantee your poultry is getting
                    high-quality feed. Containing 100% organic ingredients, with
                    brands our brand is certified by the soil association. Our
                    brand is one of the most popular organic feeds. Not only is
                    this feed organic and non-GMO, it is also soy and corn free
                    which is uncommon. This recipe is specially blended to help
                    your chickens build strong bones and feathers. There are
                    several types of formulated, complete chicken feeds
                    available: Chick Crumbs - Fed from day old to 5 weeks.
                    Growers Pellets - Fed from 6 to about 18 weeks growers’
                    pellets, turkey feeds, pheasant feeds, layer feeds for
                    smaller producers (all in 20kg bags or bulk), and specialist
                    layer ranges designed for larger commercial/semi commercial
                    units including baby chick crumbs, oyster shell, super mixed
                    corn, and free-range layers crumble.
                  </p>
                  <p>
                    <img
                      alt="Product Samples"
                      height={250}
                      src="assets/images/products/chicken.png"
                      width={347}
                    />
                  </p>
                  <p>
                    Chicken Feed Corn & Pellets for Chickens Food and Treats
                    Pets at Home offers a wide range of chicken foods, including
                    pellets and mixed corn as well as specially selected blends
                    for ex-battery hen chickens, to provide plenty of nutrients
                    for healthy growth. Our chicken treats are another great way
                    to give them a little reward and some entertainment
                    occasionally! Feeding Chickens With our large range of
                    poultry and chicken feed, you can make sure your hens and
                    other poultry and wildfowl are well-fed and getting all
                    their essential nutrients. We stock a wide range of pellets,
                    mash, crumbs, and more, so you can cater to the specific
                    needs of all your birds.
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

export default ChickenFeed;
