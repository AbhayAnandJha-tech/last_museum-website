import React from "react";
import { AppBar, Toolbar, Typography, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#333",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.5rem",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    "&:hover": {
      color: "#1976d2",
    },
  },
  button: {
    backgroundColor: "#1976d2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#155fa0",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          className={classes.logo}
          component={Link}
          href="/"
        >
          Science Museum
        </Typography>
        <div className={classes.navLinks}>
          <Link href="/about" className={classes.link}>
            About
          </Link>
          <Link href="/explore" className={classes.link}>
            Explore
          </Link>
          <Link href="/exhibitions" className={classes.link}>
            Exhibitions
          </Link>
          <Link href="/visit" className={classes.link}>
            Visit
          </Link>
          <Link href="/contact" className={classes.link}>
            Contact
          </Link>
          <Button variant="contained" className={classes.button}>
            Get Tickets
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
