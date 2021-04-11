import React from "react";
import Carousel from "./Carousel";

class Carousel extends React.Component {
  render() {
    return (
      <div id="team-carousel" className="owl-carousel">
        <Carousel></Carousel>
        <div
          className="item col-md-4 col-sm-6 wow fadeInUp"
          data-wow-delay="0.6s"
        >
          <div className="team-thumb">
            <div className="image-holder">
              <img
                src="images/team-img2.jpg"
                className="img-responsive img-circle"
                alt="Jack"
              />
            </div>
            <h2 className="heading">Jack, Founder</h2>
            <p className="description">
              Maecenas sed diam eget risus varius blandit sit non.
            </p>
          </div>
        </div>
        <div
          className="item col-md-4 col-sm-6 wow fadeInUp"
          data-wow-delay="0.8s"
        >
          <div className="team-thumb">
            <div className="image-holder">
              <img
                src="images/team-img3.jpg"
                className="img-responsive img-circle"
                alt="Linda"
              />
            </div>
            <h2 className="heading">Linda, Manager</h2>
            <p className="description">
              Phasellus nec ante in nunc molestie tincidunt ut eu diam.
            </p>
          </div>
        </div>
        <div
          className="item col-md-4 col-sm-6 wow fadeInUp"
          data-wow-delay="0.8s"
        >
          <div className="team-thumb">
            <div className="image-holder">
              <img
                src="images/team-img4.jpg"
                className="img-responsive img-circle"
                alt="Sandy"
              />
            </div>
            <h2 className="heading">Sandy, Director</h2>gcn
            <p className="description">
              Curabitur vulputate euismod neque et tincidunt.
            </p>
          </div>
        </div>
        <div
          className="item col-md-4 col-sm-6 wow fadeInUp"
          data-wow-delay="0.8s"
        >
          <div className="team-thumb">
            <div className="image-holder">
              <img
                src="images/team-img5.jpg"
                className="img-responsive img-circle"
                alt="Lukia"
              />
            </div>
            <h2 className="heading">Lukia, Fashion</h2>
            <p className="description">
              Maecenas sed diam eget risus varius blandit sit.
            </p>
          </div>
        </div>
        <div
          className="item col-md-4 col-sm-6 wow fadeInUp"
          data-wow-delay="0.8s"
        >
          <div className="team-thumb">
            <div className="image-holder">
              <img
                src="images/team-img6.jpg"
                className="img-responsive img-circle"
                alt="George"
              />
            </div>
            <h2 className="heading">George, Admin</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
          </div>
        </div>
        <div
          className="item col-md-4 col-sm-6 wow fadeInUp"
          data-wow-delay="0.8s"
        >
          <div className="team-thumb">
            <div className="image-holder">
              <img
                src="images/team-img7.jpg"
                className="img-responsive img-circle"
                alt="Day"
              />
            </div>
            <h2 className="heading">Day, Accountant</h2>
            <p className="description">
              Maecenas sed diam eget risus varius blandit sit.
            </p>
          </div>
        </div>
        <div
          className="item col-md-4 col-sm-6 wow fadeInUp"
          data-wow-delay="0.8s"
        >
          <div className="team-thumb">
            <div className="image-holder">
              <img
                src="images/team-img8.jpg"
                className="img-responsive img-circle"
                alt="Lynn"
              />
            </div>
            <h2 className="heading">Lynn, Marketing</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
