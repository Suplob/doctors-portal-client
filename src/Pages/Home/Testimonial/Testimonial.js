import { Container, Grid, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import React from "react";
import { Box } from "@mui/system";
import peopleOne from "../../../images/people-1.png";
import peopleTwo from "../../../images/people-2.png";
import peopleThree from "../../../images/people-3.png";

const Testimonial = () => {
  return (
    <Container sx={{ textAlign: "start", mt: 10, position: "relative" }}>
      <Typography variant="h6" sx={{ color: "#1CC7C1" }}>
        TESTIMONIAL
      </Typography>
      <Typography variant="h4" sx={{ color: "#203047", mt: 3 }}>
        What's Our Patients <br /> Says
      </Typography>
      <FormatQuoteIcon
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          color: "#D6F6F6",
          fontSize: "200px",
          transform: "rotate(180deg)",
        }}
      />
      <Grid container spacing={2} sx={{ my: 3 }}>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{ boxShadow: 2, borderRadius: 1, pb: 3 }}
        >
          <Typography sx={{ color: "#203047" }}>
            It is a long established fact that by the readable content of a lot
            layout. The point of using lorm a more-or-less normal distru to
            using 'Content here, content
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", px: 4, mt: 2 }}>
            <img src={peopleOne} alt="People" width="50" />
            <Box sx={{ ml: 4 }}>
              <Typography variant="subtitle2" sx={{ color: "#1CC7C1" }}>
                Winson Herry
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "rgba(0,0,0,0.5)" }}>
                California
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ boxShadow: 2, borderRadius: 1 }}>
          <Typography sx={{ color: "#203047" }}>
            It is a long established fact that by the readable content of a lot
            layout. The point of using lorm a more-or-less normal distru to
            using 'Content here, content
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", px: 4, mt: 2 }}>
            <img src={peopleTwo} alt="People" width="50" />
            <Box sx={{ ml: 4 }}>
              <Typography variant="subtitle2" sx={{ color: "#1CC7C1" }}>
                Winson Herry
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "rgba(0,0,0,0.5)" }}>
                California
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ boxShadow: 2, borderRadius: 1 }}>
          <Typography sx={{ color: "#203047" }}>
            It is a long established fact that by the readable content of a lot
            layout. The point of using lorm a more-or-less normal distru to
            using 'Content here, content
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", px: 4, mt: 2 }}>
            <img src={peopleThree} alt="People" width="50" />
            <Box sx={{ ml: 4 }}>
              <Typography variant="subtitle2" sx={{ color: "#1CC7C1" }}>
                Winson Herry
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "rgba(0,0,0,0.5)" }}>
                California
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonial;
