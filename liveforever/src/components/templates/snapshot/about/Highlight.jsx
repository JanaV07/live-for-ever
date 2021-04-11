import React from "react";

export default function Highlight() {
  return (
    <>
    
      <div className="col-md-9 col-sm-8 wow fadeInUp" data-wow-delay="0.2s">
        <div className="about-thumb">
          <h1>Background</h1>
          <p>
            Quisque tempor bibendum dolor at volutpat. Suspendisse venenatis
            quam sed libero euismod feugiat. In cursus nisi vitae lectus
            facilisis mollis. Nullam scelerisque, quam nec iaculis vulputate.
          </p>
        </div>
      </div>

      <div
        className="col-md-3 col-sm-4 wow fadeInUp about-img"
        data-wow-delay="0.6s"
      >
        <img
          src="snapshot/images/about-img.jpg"
          className="img-responsive img-circle"
          alt="About"
        />
      </div>
    </>
  );
}
