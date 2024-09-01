import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import BookingForm from "./pages/BookingForm"
// Import your components
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";
import Home from "./pages/home";
import About from "./pages/about";
import Exhibitions from "./pages/exhibitions";
import Explore from "./pages/explore";
import Tickets from "./pages/tickets";
import Visit from "./pages/visit";
import Contact from "./pages/contact";
import InteractiveExhibits from "./components/InteractiveExhibits";
import EducationalWorkshops from "./components/EducationalWorkshops";
import GuidedTours from "./components/GuidedTours";
import Chatbot from "./components/chatbot";
import BookingSuccess from "./pages/bookingsuccess";
import Main from "./pages/main";
import "./App.css";

// Define the custom theme with Chakra UI
const theme = extendTheme({
  colors: {
    primary: {
      500: "#1976d2",
    },
    secondary: {
      500: "#dc004e",
    },
  },
  styles: {
    global: {
      // Define global styles here
      body: {
        fontFamily: "Arial, sans-serif",
        color: "gray.800",
        bg: "gray.50",
        margin: 0,
        padding: 0,
      },
    },
  },
});

function App() {
  const aboutContent = "Information about our science center.";

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* Uncomment and use the routes you need */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About content={aboutContent} />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookingsuccess" element={<BookingSuccess />} />
          <Route path="/exhibits/interactive" element={<InteractiveExhibits />} />
          <Route path="/exhibits/workshops" element={<EducationalWorkshops />} />
          <Route path="/exhibits/tours" element={<GuidedTours />} /> */}
          <Route path="/get-tickets" element={<BookingForm />} />
        </Routes>
        <Chatbot />
      </Router>
    </ChakraProvider>
  );
}

export default App;
