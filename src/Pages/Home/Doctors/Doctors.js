import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import MailIcon from "@mui/icons-material/Mail";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(`https://doctors-portal-server-suplob.herokuapp.com/doctors`)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <Container sx={{ my: 3, mt: 10 }}>
      <Typography variant="h5" sx={{ mb: 3, color: "#5CE7ED" }}>
        Our Doctors
      </Typography>
      <Grid container spacing={2}>
        {doctors.map((doctor) => (
          <Grid
            item
            key={doctor._id}
            xs={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={`data:image/png;base64,${doctor.image}`}
              alt={doctor.name}
              style={{ width: "200px", height: "250px", objectFit: "cover" }}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              {doctor.name}
            </Typography>
            <Typography variant="body1" sx={{ display: "flex" }}>
              <MailIcon sx={{ color: "#5CE7ED", mr: 1 }} />
              <span style={{ color: "rgba(0,0,0,0.5)" }}>{doctor.email}</span>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Doctors;
