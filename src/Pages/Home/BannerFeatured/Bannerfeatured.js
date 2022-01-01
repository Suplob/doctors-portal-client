import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { Box } from "@mui/system";

const Bannerfeatured = () => {
  return (
    <Container>
      {/* <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1CC7C1",
            borderRadius: "5px",
            color: "white",
            padding: "30px 20px",
          }}
        >
          <QueryBuilderOutlinedIcon sx={{ mr: 4, fontSize: "70px" }} />
          <Box sx={{ textAlign: "start" }}>
            <Typography variant="h6">Opening Hours</Typography>
            <Typography variant="subtitle2">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1CC7C1",
            borderRadius: "5px",
            color: "white",
            padding: "30px 20px",
          }}
        >
          <QueryBuilderOutlinedIcon sx={{ mr: 4, fontSize: "70px" }} />
          <Box sx={{ textAlign: "start" }}>
            <Typography variant="h6">Opening Hours</Typography>
            <Typography variant="subtitle2">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1CC7C1",
            borderRadius: "5px",
            color: "white",
            padding: "30px 20px",
          }}
        >
          <QueryBuilderOutlinedIcon sx={{ mr: 4, fontSize: "70px" }} />
          <Box sx={{ textAlign: "start" }}>
            <Typography variant="h6">Opening Hours</Typography>
            <Typography variant="subtitle2">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </Typography>
          </Box>
        </Grid>
      </Grid> */}

      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1CC7C1",
            borderRadius: "5px",
            color: "white",
            padding: "30px 20px",
          }}
        >
          <QueryBuilderOutlinedIcon sx={{ mr: 4, fontSize: "70px" }} />
          <Box sx={{ textAlign: "start" }}>
            <Typography variant="h6">Opening Hours</Typography>
            <Typography variant="subtitle2">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#3A4256",
            borderRadius: "5px",
            color: "white",
            padding: "30px 20px",
          }}
        >
          <LocationOnIcon sx={{ mr: 4, fontSize: "70px" }} />
          <Box sx={{ textAlign: "start" }}>
            <Typography variant="h6">Visit Our Location</Typography>
            <Typography variant="subtitle2">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1CC7C1",
            borderRadius: "5px",
            color: "white",
            padding: "30px 20px",
          }}
        >
          <CallOutlinedIcon sx={{ mr: 4, fontSize: "70px" }} />
          <Box sx={{ textAlign: "start" }}>
            <Typography variant="h6">Contact Us Now</Typography>
            <Typography variant="subtitle2">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Bannerfeatured;
