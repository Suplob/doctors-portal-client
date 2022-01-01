import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import url from "../../../images/footer-bg.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import "./Footer.css";

const Footer = () => {
  const footerBg = {
    background: `url${url}`,
    height: "100%",
    width: "100%",
  };

  return (
    <Box style={footerBg} sx={{ flexGrow: 1, mt: 5 }}>
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={4} lg={3} sx={{ textAlign: "start" }}>
            <Typography variant="caption" sx={{ color: "#ffff" }}>
              Oral Health
            </Typography>
            <br />
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Emergency Dental Care
            </Typography>
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Check Up
            </Typography>
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Treatment of Personal Diseases
            </Typography>
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Tooth Extraction
            </Typography>
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Check Up
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={3} sx={{ textAlign: "start" }}>
            <Typography variant="subtitle1" sx={{ color: "#1CC7C1" }}>
              Services
            </Typography>
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Emergency Dental Care
            </Typography>
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Treatment of Personal Diseases
            </Typography>
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Tooth Extraction
            </Typography>
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Check Up
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={3} sx={{ textAlign: "start" }}>
            <Typography variant="caption" sx={{ color: "#1CC7C1" }}>
              Oral Health
            </Typography>
            <br />
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Check Up
            </Typography>
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Treatment of Personal Diseases
            </Typography>
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Tooth Extraction
            </Typography>
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Check Up
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={3} sx={{ textAlign: "start" }}>
            <Typography variant="caption" sx={{ color: "#1CC7C1" }}>
              Adress
            </Typography>
            <br />
            <Typography variant="caption" sx={{ color: "#203047" }}>
              Moghbazar wireless, Dhaka
            </Typography>
            <Box sx={{ display: "flex" }}>
              <FacebookRoundedIcon className="social-icon" />
            </Box>
          </Grid>
        </Grid>
        <p style={{ color: "#203047", marginTop: "10px" }}>
          &copy; Suplob Roy | 2021
        </p>
      </Container>
    </Box>
  );
};

export default Footer;
