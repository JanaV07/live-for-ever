export default function Gallery(params) {
    return <section id="gallery" >
    <div className="container">
      <div className="row">
        <div
          className="col-md-offset-2 col-md-8 col-sm-12 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="section-title">
            <h1>Gallery</h1>
            <p>
              Nullam scelerisque, quam nec iaculis vulputate, arcu ligula
              sollicitudin nisl, ac volutpat erat nulla a arcu.
            </p>
          </div>
        </div>

        <ul className="grid cs-style-4">
          <li className="col-md-6 col-sm-6">
            <figure>
             
              <div><img src="snapshot/images/gallery-img1.jpg" alt="" /></div>
              <figcaption>
                <h1>Sapien arcu</h1>
                <small
                  >Cum sociis natoque penatibus et magnis dis parturient
                  montes.</small
                >
                <a href="#">Read More</a>
              </figcaption>
            </figure>
          </li>

          <li className="col-md-6 col-sm-6">
            <figure>
              <div><img src="snapshot/images/gallery-img2.jpg" alt="" /></div>
              <figcaption>
                <h1>Aliquam erat</h1>
                <small
                  >Suspendisse venenatis quam sed libero euismod
                  feugiat.</small
                >
                <a href="#">Details</a>
              </figcaption>
            </figure>
          </li>

        </ul>
      </div>
    </div>
  </section>

    
}