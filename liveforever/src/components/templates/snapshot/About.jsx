import Birthday from "./about/Birthday";
import Highlight from "./about/Highlight";
import Team from "./about/Team";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <Highlight />
          <div className="clearfix"></div>

          <div
            className="col-md-12 col-sm-12 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="section-title text-center">
              <h1>Birthday</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>
          </div>

          <Team />
        </div>
      </div>
    </section>
  );
}
