import React from "react";
import Footer from "../components/footer";
import Hero from "../components/HeroSection";
import About from "./about";
import Exhibitions from "./exhibitions";
import Explore from "./explore";
import Contact from "./contact";
import Visit from "./visit";
import Guided from '../components/GuidedTours';
import InteractiveExhibits from "../components/InteractiveExhibits";
import EducationalWorkshops from "../components/EducationalWorkshops";

const Main = () => {
  return (
    <div>
      <div id="/">
        <Hero />
          
        <div id="exhibitions" className="scroll-m-16">
          <EducationalWorkshops />
        </div>
        <div id="exhibitions" className="scroll-m-16">
          <Guided />
        </div>
        <div id="exhibitions" className="scroll-m-16">
          <InteractiveExhibits />
        </div>
        <div id="exhibitions" className="scroll-m-16">
          <Exhibitions />
        </div>

        <div id="explore" className="scroll-m-16">
          <Explore />
        </div>

        <div id="about" className="scroll-m-16">
          <About />
        </div>

        <div id="contact" className="scroll-m-16">
          <Contact />
        </div>
        <div id="visit" className="scroll-m-16">
          <Visit />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;