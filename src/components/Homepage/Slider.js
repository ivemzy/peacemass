import React from 'react';

const Slider = () => {
    return (
        <section id="slider1" className="slider slider-1">
          <div className="carousel owl-carousel carousel-arrows carousel-dots" data-slide={1} data-slide-md={1} data-slide-sm={1} data-autoplay="true" data-nav="true" data-dots="true" data-space={0} data-loop="true" data-speed={3000} data-transition="fade" data-animate-out="fadeOut" data-animate-in="fadeIn">
            <div className="slide-item align-v-h bg-overlay">
              <div className="bg-img"><img src="assets/images/sliders/3.jpg" alt="slide img" /></div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                    <div className="slide__content">
                      <h2 className="slide__title">World Class Integrated Facilities Management Solution, Trade And Manufacturing</h2>
                      <p className="slide__desc">Full spectrum of Integrated Facilities Management <br /> and Maintenance of properties and equipments</p>
                      <a href="about" className="btn btn__primary btn__hover2 mr-30">
                        <i className="icon-arrow-right" /><span>About Us</span>
                      </a>
                    </div>{/* /.slide-content */}
                  </div>{/* /.col-xl-9 */}
                </div>{/* /.row */}
              </div>{/* /.container */}
            </div>{/* /.slide-item */}
            <div className="slide-item align-v-h bg-overlay">
              <div className="bg-img"><img src="assets/images/sliders/1.jpg" alt="slide img" /></div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                    <div className="slide__content">
                      <h2 className="slide__title">Global Standards With Personalised Solutions </h2>
                      <p className="slide__desc"> We specialize in the provision of Hard and Soft Facility Management Services delivering consistent quality through a detailed process framework. </p>
                      <a href="/contact-us" className="btn btn__primary btn__hover2">
                        <i className="icon-arrow-right" /><span>Request Quote</span>
                      </a>
                    </div>{/* /.slide-content */}
                  </div>{/* /.col-xl-9 */}
                </div>{/* /.row */}
              </div>{/* /.container */}
            </div>{/* /.slide-item */}
            {/* <div class="slide-item align-v-h bg-overlay">
            <div class="bg-img"><img src="assets/images/sliders/6.jpg" alt="slide img"></div>
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                  <div class="slide__content">
                    <h2 class="slide__title">High Performance Services For Industries</h2>
                    <p class="slide__desc">To further develop our corporate strengths we have established a corporate
                      mandate to maintain strong core values that truly reflect the companys philosophy.</p>
                    <a href="#" class="btn btn__white mr-30">Get Started</a>
                    <a href="#" class="btn btn__primary mr-40">Our Services</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>{/* /.carousel */}
        </section>
      );
};

export default Slider;
