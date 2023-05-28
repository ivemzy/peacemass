import React from "react";

const Leadership = () => {
  return (
    <div>
      <section
        id="pageTitle"
        className="page-title page-title-layout3 bg-overlay bg-parallax"
      >
        <div className="bg-img">
          <img src="assets/images/page-titles/3.jpg" alt="background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
              <h1 className="pagetitle__heading">Leadership</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="leadership#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="leadership#">Company</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Leadership
                  </li>
                </ol>
              </nav>
            </div>
            {/* /.col-lg-8 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.page-title */}
      {/* ========================
          Team
      ========================== */}
      <section id="team" className="team  text-center pt-120 pb-50">
        <div className="container">
          <div className="row">
            {/* Member #4 */}
            <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
              <h3>Leadership </h3>
              <p className="text-justify">
                About leadership and teamwork: Talent wins games, but teamwork
                and intelligence wins championships. In teamwork, silence isn’t
                golden. It’s deadly. The speed of the boss is the speed of the
                team. Alone we can do so little; together we can do so much.
                Failing organizations are usually over- managed and under-led
                the strength of the team is each member. The strength of each
                member is the team. Bad attitudes will ruin your team. The nice
                thing about teamwork is that you always have others on your
                side. A successful team is a group of many hands but of one mind
                No individual can win a game by himself.
              </p>
              <br />
              <img
                alt="Leadership"
                src="assets/images/products/leadership1.png"
              />
             <p className="text-justify">
                <br />
                The greatest leader is not necessarily the one who does the
                greatest things. He is the one Coming together is a beginning;
                keeping together is progress; working together is success.
                Teamwork is the ability to work together toward a common vision.
                The ability to direct If your actions inspire others to dream
                more, learn more, do more and become more, you will be
                successful.
                <br />
              </p>
                <img
                  alt="Leadership 2"
                  src="assets/images/products/leadership2.png"
                /><br/>
             <p className="text-justify">
                There’s no doubt that it takes a group of people to make a
                difference and see impactful results. But getting your team
                members on the same page isn’t always an easy task—especially
                with everyone working in different locations. So how do you make
                sure everyone on the team feels included and heard? No two teams
                are the same, so it may take so Before you are a leader, success
                is all about growing yourself. When you become a leader, success
                is all about growing others.
              </p>
            </div>
            {/* /.col-lg-3 */}
            {/* Member #7 */}
          </div>{" "}
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    </div>
  );
};

export default Leadership;
