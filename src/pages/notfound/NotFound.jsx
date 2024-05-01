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
      maxWidth: 380,
      mx: "auto",
      my: "40px",
      width: { xs: "95%" },
    }}
    >
      <Typography variant="h3"gutterBottom>
        404 - Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        The page you are looking for might be in another castle.
      </Typography>
      <Button
       sx={{ mt: 5 }}
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