import React from "react";
import Home from "./Home";

import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";

export default function Snapshot() {
  return (
    <div>
      <div className="preloader">
        <div className="sk-spinner sk-spinner-pulse"></div>
      </div>
      <Header />
      <Home />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
