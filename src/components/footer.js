import React from "react";
import { Typography, Container, Link } from "@material-ui/core";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "auto",
        backgroundColor: "#f5f5f5",
        padding: "20px 0",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://yourmuseum.com/">
            Your Museum
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
