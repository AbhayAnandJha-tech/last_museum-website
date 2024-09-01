import React from "react";
import { Box, Button, Text, Link } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css"; // Assuming CSS file is named Navbar.css

const menuLinks = [
  { title: "About", path: "#about" },
  { title: "Exhibitions", path: "#exhibitions" },
  { title: "Explore", path: "#explore" },
  { title: "Visit", path: "#visit" },
  { title: "Contact", path: "#contact" },
];

// Function for smooth scrolling
const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

function Navbar() {
  return (
    <Box
      position="fixed"
      top="0"
      zIndex="30"
      w="full"
      bg="#1E1E1E"
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
      p="4"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      transition="background-color 0.3s ease-in-out"
    >
      <Text
        fontFamily="'Roboto', sans-serif"
        fontWeight="bold"
        color="#ffffff"
        fontSize="1.8rem"
        transition="color 0.3s ease"
        _hover={{ color: "#00adb5" }}
        as="a"
        href="#"
      >
        Science Museum
      </Text>
      <Box
        display="flex"
        gap="4"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        {menuLinks.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            color="#ffffff"
            fontSize="1rem"
            p="2"
            borderRadius="md"
            transition="color 0.3s ease, background-color 0.3s ease"
            _hover={{ color: "#00adb5", bg: "rgba(255, 255, 255, 0.1)" }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.path);
            }}
          >
            {link.title}
          </Link>
        ))}
        <NavLink to="/get-tickets" activeClassName="active">
        <Button
          id="gettickets"
          bg="#00adb5"
          color="#ffffff"
          p="2"
          borderRadius="full"
          textTransform="none"
          transition="background-color 0.3s ease, transform 0.2s ease"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
          _hover={{
            bg: "#007b83",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          Get Tickets
        </Button>
        </NavLink>
      </Box>
    </Box>
  );
}

export default Navbar;
