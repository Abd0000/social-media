import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1" align="center" gutterBottom>
        404 - Not Found
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        The page you are looking for might be in another castle.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        color="primary"
        size="large"
      >
        Go Home
      </Button>
    </Container>
  );
};

export default NotFound;