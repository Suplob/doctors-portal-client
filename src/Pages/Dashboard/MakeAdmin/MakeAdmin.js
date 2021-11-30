import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState({});
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const idToken = localStorage.getItem("idToken");

  const handleDoctor = (e) => {
    const user = { email };
    fetch("https://doctors-portal-server-suplob.herokuapp.com/user/addAdmin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${idToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          setEmail("");
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h1>Make an Admin</h1>
      <form onSubmit={handleDoctor}>
        <TextField
          id="standard-basic"
          label="Email of the Admin"
          variant="standard"
          sx={{ width: "75%" }}
          onChange={handleOnBlur}
        />
        <br />
        <Button type="submit" variant="outlined" sx={{ mt: 5 }}>
          Add Admin
        </Button>
      </form>
      {success && <Alert severity="success">Admin Added successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
