import React from "react";
import { Container, Typography, Button } from "@material-ui/core";

function Home() {
  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem", textAlign: "center", backgroundColor: "grey" }}>
      <Typography variant="h2" gutterBottom>
        WELCOME TO OUR MUSEUM
      </Typography>
      <Typography variant="h5" gutterBottom >
        Discover the wonders of art and history
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Explore Exhibitions
      </Button>
    </Container>
  );
}

export default Home;
