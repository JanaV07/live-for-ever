import React from 'react'

export default function Contact() {
    return (
        <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-10 col-sm-12">
            <div
              className="col-lg-offset-1 col-lg-10 section-title wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <h1>Send a message</h1>
              <p>
                Nunc suscipit ante in lectus laoreet, nec pharetra diam dictum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <form
              action="#"
              method="post"
              className="wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="col-md-6 col-sm-6">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-12 col-sm-12">
                <textarea
                  name="message"
                  rows="6"
                  className="form-control"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6">
                <input
                  type="submit"
                  className="form-control"
                  value="SEND MESSAGE"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
}
