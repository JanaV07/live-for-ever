import React from 'react'

export default function Birthday() {
    return (
        <div id="team-carousel" className="owl-carousel">
        <div className="item col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
          <div className="team-thumb">
            <div className="image-holder">
              <img
                src="snapshot/images/team-img1.jpg"
                className="img-responsive img-circle"
                alt="Mary"
              />
            </div>
            <h2 className="heading">Mary, CEO</h2>
            <p className="description">
              Aliquam ac justo est. Praesent feugiat cursus est.
              <a href="#">Read More</a>
            </p>
          </div>
        </div>

        <div className="item col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
          <div className="team-thumb">
            <div className="image-holder">
              <img
                src="snapshot/images/team-img2.jpg"
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

        <div className="item col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
          <div className="team-thumb">
            <div className="image-holder">
              <img
                src="snapshot/images/team-img3.jpg"
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

        <div className="item col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
          <div className="team-thumb">
            <div className="image-holder">
              <img
                src="snapshot/images/team-img4.jpg"
                className="img-responsive img-circle"
                alt="Sandy"
              />
            </div>
            <h2 className="heading">Sandy, Director</h2>
            <p className="description">
              Curabitur vulputate euismod neque et tincidunt.
            </p>
          </div>
        </div>

     </div>
    )
}
