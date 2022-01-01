import { Button, Input, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddDoctor = () => {
  const [img, setImg] = useState(null);
  const [success, setSuccess] = useState(null);

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");

    if (!img) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", img);

    fetch("https://doctors-portal-server-suplob.herokuapp.com//doctors", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Add Doctor</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          label="Name"
          variant="standard"
          name="name"
          sx={{ width: "50%" }}
          type="text"
        />
        <br />
        <TextField
          required
          label="Email"
          variant="standard"
          name="email"
          type="email"
          sx={{ width: "50%" }}
        />
        <br />
        <br />
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <br />

          <Button variant="contained" type="submit">
            Add Doctor
          </Button>
        </label>
        {success && (
          <Typography variant="body1">Doctor Added Successfully</Typography>
        )}
      </form>
    </div>
  );
};

export default AddDoctor;
