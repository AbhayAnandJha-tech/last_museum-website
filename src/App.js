import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";
import Home from "./pages/home";
import About from "./pages/about";
import Exhibitions from "./pages/exhibitions";
import Tickets from "./pages/tickets";
import Explore from "./pages/explore";
import Visit from "./pages/visit";
import Contact from "./pages/contact";
import InteractiveExhibits from "./components/InteractiveExhibits";
import EducationalWorkshops from "./components/EducationalWorkshops";
import GuidedTours from "./components/GuidedTours";
import Chatbot from "./components/chatbot";
import Main from "./pages/main";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  const aboutContent = "Information about our science center.";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About content={aboutContent} />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/exhibits/interactive"
            element={<InteractiveExhibits />}
          />
          <Route
            path="/exhibits/workshops"
            element={<EducationalWorkshops />}
          />
          <Route path="/exhibits/tours" element={<GuidedTours />} />
        </Routes>
        <Chatbot />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
