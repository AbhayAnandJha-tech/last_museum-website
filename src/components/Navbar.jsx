import React from "react";
import { AppBar, Toolbar, Typography, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Navbar.css"; // Assuming CSS file is named Navbar.css

const menuLinks = [
  { title: "About", path: "#about" },
  { title: "Exhibitions", path: "#exhibitions" },
  { title: "Explore", path: "#explore" },
  { title: "Visit", path: "#visit" },
  { title: "Contact", path: "#contact" },
];

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#1E1E1E",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease-in-out",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 20px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  logo: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "bold",
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1.8rem",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#00adb5",
    },
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "15px",
    },
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1rem",
    padding: "8px 12px",
    borderRadius: "5px",
    transition: "color 0.3s ease, background-color 0.3s ease",
    "&:hover": {
      color: "#00adb5",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },
  button: {
    backgroundColor: "#00adb5",
    color: "#ffffff",
    padding: "8px 20px",
    borderRadius: "30px",
    textTransform: "none",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    "&:hover": {
      backgroundColor: "#007b83",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
    },
  },
}));

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
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          className={classes.logo}
          component="a"
          href="#"
        >
          Science Museum
        </Typography>
        <div className={classes.navLinks}>
          {menuLinks.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className={classes.link}
              onClick={(e) => {
                // Prevent default anchor link behavior
                e.preventDefault();
                // Call smooth scroll function
                scrollToSection(link.path);
              }}
            >
              {link.title}
            </Link>
          ))}
          <Button id="gettickets" variant="contained" className={classes.button}>
            Get Tickets
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
