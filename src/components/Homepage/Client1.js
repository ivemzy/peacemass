import React from 'react';

const Client1 = () => {
    return (
        <section id="clients" className="clients border-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                <div className="heading heading-2 text-center mb-50">
                  <h2 className="heading__title">Our Clients</h2>
                </div>{/* /.heading */}
              </div>{/* /.col-lg-6 */}
            </div>{/* /.row*/}
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <img alt='client images' src="assets/images/client.jpg" className="img-fluid" />
              </div>{/* /.col-lg-12 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>
      );
};

export default Client1;
