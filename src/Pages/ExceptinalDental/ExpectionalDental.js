import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../../images/treatment.png";

const ExpectionalDental = () => {
  return (
    <Container fixed sx={{ my: 10 }}>
      <Grid container>
        <Grid item xs={6} md={6}>
          <img src={img} alt="" style={{ width: "75%" }} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" sx={{ textAlign: "start" }}>
            Exceptional Dental Care, on your terms
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "start", my: 4, color: "#9e9e9e" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Button variant="contained" sx={{ width: "40%" }}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExpectionalDental;
