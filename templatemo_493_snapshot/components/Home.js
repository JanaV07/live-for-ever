import React from "react";

class Home extends React.Component {
  render() {
    return (
      <section id="home">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div
              className="col-md-offset-1 col-md-10 col-sm-12 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h1 className="wow fadeInUp" data-wow-delay="0.6s">
                Let's take a snapshot
              </h1>
              <p className="wow fadeInUp" data-wow-delay="0.9s">
                Snapshot website template is available for free download. Anyone
                can modify and use it for any site. Please tell your friends
                about{" "}
                <a rel="nofollow" href="http://www.templatemo.com">
                  templatemo
                </a>
                . Thank you.
              </p>
              <a
                href="#about"
                className="smoothScroll btn btn-success btn-lg wow fadeInUp"
                data-wow-delay="1.2s"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
