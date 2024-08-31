import React from "react";
import { Container, Box, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Footer.css";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6, 2),
    backgroundColor: "#1a1a1a",
    color: "#fff",
    borderTop: "4px solid #00adb5",
  },
  link: {
    color: "#00adb5",
    textDecoration: "none",
    transition: "color 0.3s",
    "&:hover": {
      color: "#fff",
    },
  },
  footerTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  socialContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: theme.spacing(1),
  },
  socialIcons: {
    display: "flex",
    gap: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  icon: {
    fontSize: "1.5rem",
    transition: "color 0.3s",
    "&:hover": {
      color: "#fff",
    },
  },
  quickLinks: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },
  address: {
    marginTop: theme.spacing(2),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.footerTitle}>
              About Us
            </Typography>
            <Typography variant="body2">
              The Science Museum is dedicated to inspiring a love of science and
              learning in visitors of all ages. Explore our interactive
              exhibits, educational workshops, and guided tours.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.footerTitle}>
              Quick Links
            </Typography>
            <Box className={classes.quickLinks}>
              <Link href="/explore" className={classes.link}>
                Explore
              </Link>
              <Link href="/visit" className={classes.link}>
                Visit
              </Link>
              <Link href="/contact" className={classes.link}>
                Contact
              </Link>
              <Box className={classes.address}>
                <Typography variant="body2" style={{ fontWeight: "bold" }}>
                  Visit Us
                </Typography>
                <Typography variant="body2">
                  National Science Centre, Bhairon Road, Near Gate No.1, Pragati
                  Maidan, New Delhi, Delhi 110001, India.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.footerTitle}>
              Follow Us
            </Typography>
            <Box className={classes.socialContainer}>
              <Typography variant="body2">
                Stay connected through our social media channels:
              </Typography>
              <Box className={classes.socialIcons}>
                <Link href="https://facebook.com" className={classes.link}>
                  <i className={`fab fa-facebook ${classes.icon}`}></i>
                </Link>
                <Link href="https://instagram.com" className={classes.link}>
                  <i className={`fab fa-instagram ${classes.icon}`}></i>
                </Link>
                <Link href="https://twitter.com" className={classes.link}>
                  <i className={`fab fa-twitter ${classes.icon}`}></i>
                </Link>
                <Link href="https://linkedin.com" className={classes.link}>
                  <i className={`fab fa-linkedin ${classes.icon}`}></i>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
