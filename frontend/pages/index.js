import Home from "../components/Home";
import Footer from "../components/Footer";
import Question from "../components/Question";
import Temoignages from "../components/Temoignages";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Header from "../components/Header";
import React from "react";

function Index() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Home />
      </div>
      <div id="section1">
        <Question />
      </div>
      <div id="section2">
        <Temoignages />
      </div>
      <div id="section3">
        <AboutMe />
      </div>
      <div id="section4">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Index;
