import React from 'react';

const NewsEvent = () => {
    return (
        <div>
          <section id="pageTitle" className="page-title page-title-layout10 text-center bg-overlay bg-parallax">
            <div className="bg-img"><img src="assets/images/page-titles/11.jpg" alt="background" /></div>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                  <h1 className="pagetitle__heading">News and Event</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item"><a href="newsevent#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">News and Event</li>
                    </ol>
                  </nav>
                </div>{/* /.col-lg-8 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>{/* /.page-title */}
          {/* ======================
        Blog Grid
      ========================= */}
          <section id="blogGrid" className="blog blog-grid">
            <div className="container">
              <div className="row">
                {/* Blog Item #1 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>
        </div>
      );
};

export default NewsEvent;
