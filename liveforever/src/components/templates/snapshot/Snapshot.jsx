import React from "react";
import Home from "./Home";

import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Navbar from "./Navbar";

export default function Snapshot() {
  return (
    <div>
      <div className="preloader">
        <div className="sk-spinner sk-spinner-pulse"></div>
      </div>
      <Navbar />
      <Home />
      <About />
      {/* <About/> */}
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
