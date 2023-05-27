import React from 'react';

const Leadership = () => {
    return (
        <div>
          <section id="pageTitle" className="page-title page-title-layout3 bg-overlay bg-parallax">
            <div className="bg-img"><img src="assets/images/page-titles/3.jpg" alt="background" /></div>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                  <h1 className="pagetitle__heading">Leadership</h1>
                  <span className="pagetitle__subheading">The Evermore leadership team cuts across all cultures of our global community. They have a variety of skills, experience, perspectives and independence knowledge of delivering the highest standard of responsibility.</span>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="leadership#">Home</a></li>
                      <li className="breadcrumb-item"><a href="leadership#">Company</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Leadership</li>
                    </ol>
                  </nav>
                </div>{/* /.col-lg-8 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>{/* /.page-title */}
          {/* ========================
          Team
      ========================== */}
          <section id="team" className="team  text-center pt-120 pb-50">
            <div className="container">
              <div className="row">
                {/* Member #4 */}
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="member">
                    <div className="member__img">
                      <img src="assets/images/team/andrea-geday.png" alt="Andrea Geday" />
                    </div>{/* /.member-img */}
                    <div className="member__info">
                      <h5 className="member__name">Andrea Geday</h5>
                      <p className="member__desc">Managing Director</p>
                    </div>{/* /.member-info */}
                  </div>{/* /.member */}
                </div>{/* /.col-lg-3 */}
                {/* Member #5 */}
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="member">
                    <div className="member__img">
                      <img src="assets/images/team/eapen-Valiaparampil.png" alt="Eapen Valiaparampil" />
                    </div>{/* /.member-img */}
                    <div className="member__info">
                      <h5 className="member__name">Eapen V. Eapen</h5>
                      <p className="member__desc">Chief Operating Officer</p>
                    </div>{/* /.member-info */}
                  </div>{/* /.member */}
                </div>{/* /.col-lg-3 */}
                {/* Member #6 */}
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="member">
                    <div className="member__img">
                      <img src="assets/images/team/emad-yassin.png" alt="Emad Yassin" />
                    </div>{/* /.member-img */}
                    <div className="member__info">
                      <h5 className="member__name">Emad Yassin</h5>
                      <p className="member__desc">General Manager, Operations &amp; Business Development</p>
                    </div>{/* /.member-info */}
                  </div>{/* /.member */}
                </div>{/* /.col-lg-3 */}
                {/*<div class="col-sm-6 col-md-6 col-lg-3">*/}
                {/*  <div class="member">*/}
                {/*    <div class="member__img">*/}
                {/*      <img src="assets/images/team/stella-chukwu.png" alt="Stella Chukwu">*/}
                {/*    </div>*/}
                {/*    <div class="member__info">*/}
                {/*      <h5 class="member__name">Stella Chukwu</h5>*/}
                {/*      <p class="member__desc">General Manager of Admin / Finance</p>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/* Member #5 */}
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="member">
                    <div className="member__img">
                      <img src="assets/images/team/cynthia-atemie.png" alt="Cynthia Atemie" />
                    </div>{/* /.member-img */}
                    <div className="member__info">
                      <h5 className="member__name">Cynthia Atemie</h5>
                      <p className="member__desc">Regional Facilities Manager (PHC &amp; Warri)</p>
                    </div>{/* /.member-info */}
                  </div>{/* /.member */}
                </div>{/* /.col-lg-3 */}
                {/* Member #6 */}
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="member">
                    <div className="member__img">
                      <img src="assets/images/team/benson-ogah.png" alt="Benson Ogah" />
                    </div>{/* /.member-img */}
                    <div className="member__info">
                      <h5 className="member__name">Benson Ogah</h5>
                      <p className="member__desc">HSE Manager</p>
                    </div>{/* /.member-info */}
                  </div>{/* /.member */}
                </div>{/* /.col-lg-3 */}
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="member">
                    {/*  */}
                  </div>{/* /.member */}
                </div>{/* /.col-lg-3 */}
                {/* Member #7 */}
              </div> {/* /.row */}
            </div>{/* /.container */}
          </section>
        </div>
      );
};

export default Leadership;
