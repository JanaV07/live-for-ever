export default function Home() {
  return (
    <section id="home">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div
            className="col-md-offset-1 col-md-10 col-sm-12 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <h1 className="wow fadeInUp" data-wow-delay="0.6s">
             <b><em>LIVE</em>FOREVER</b> 
            </h1>
            <p className="wow fadeInUp" data-wow-delay="0.9s">
              When there is no one left in the living world who remembers you,
              you disapper from this World.
              <br />
              We call it the final death.
            </p>
            {/* <a
              href="#about"
              className="smoothScroll btn btn-success btn-lg wow fadeInUp"
              data-wow-delay="1.2s"
            >
              Learn more
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
