import React from "react";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Footer.css";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: "20px 0",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    textAlign: "center",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "#1976d2",
    },
  },
  gridContainer: {
    justifyContent: "space-around",
  },
  footerItem: {
    margin: theme.spacing(1, 0),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footerContainer}>
      <Container maxWidth="lg">
        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item xs={12} sm={4} className={classes.footerItem}>
            <Typography variant="h6">Quick Links</Typography>
            <Link href="/about" className={classes.footerLink}>
              About Us
            </Link>
            <br />
            <Link href="/visit" className={classes.footerLink}>
              Visit
            </Link>
            <br />
            <Link href="/contact" className={classes.footerLink}>
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.footerItem}>
            <Typography variant="h6">Follow Us</Typography>
            <Link
              href="https://www.instagram.com/national_science_centre_delhi/"
              className={classes.footerLink}
            >
              Instagram
            </Link>
            <br />
            <Link
              href="https://www.facebook.com/nsc.delhi/"
              className={classes.footerLink}
            >
              Facebook
            </Link>
            <br />
            <Link
              href="https://x.com/SciMuseumDelhi"
              className={classes.footerLink}
            >
              Twitter
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.footerItem}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography>
              Phone: (011) 23371212
              <br />
              Email: info@nscd.gov.in
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" style={{ marginTop: 20 }}>
          &copy; 2024 Science Museum. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
