import React from 'react'
import Footer from "../components/footer";
import Hero from "../components/HeroSection";
import Home from "./home";
import About from "./about";
import Exhibitions from "./exhibitions";
import Tickets from "./tickets";
import Visit from "./tickets";
import Contact from "./contact";
import InteractiveExhibits from "../components/InteractiveExhibits";
import EducationalWorkshops from "../components/EducationalWorkshops";
import GuidedTours from "../components/GuidedTours";

const main = () => {
    return (
        <div>
            <div id="/">
                <Hero />
                <div id="" className="scroll-m-16">
                    <Exhibitions />
                </div>
                
            </div>
        </div>
    )
}

export default main
