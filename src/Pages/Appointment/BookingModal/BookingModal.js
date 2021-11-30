import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { user } = useAuth();

  const intialialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [order, setOrder] = React.useState(intialialInfo);
  const { name, time } = booking;

  const handleBookingSubmit = (e) => {
    const appointment = {
      ...order,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };

    fetch("https://doctors-portal-server-suplob.herokuapp.com/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess("Appointment Booked Successfully!");
          handleBookingClose();
        }
      });

    e.preventDefault();
  };

  const handleOrderInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrder = { ...order };
    newOrder[field] = value;
    setOrder(newOrder);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              disabled
              variant="standard"
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={time}
              size="small"
              name="time"
              onBlur={handleOrderInput}
            />
            <TextField
              variant="standard"
              label="Your name"
              defaultValue={user.displayName}
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              size="small"
              name="patientName"
              onBlur={handleOrderInput}
            />
            <TextField
              variant="standard"
              label="Your Email"
              defaultValue={user.email}
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              size="small"
              name="email"
              onBlur={handleOrderInput}
            />
            <TextField
              variant="standard"
              label="Your Phone Number"
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              size="small"
              name="phone"
              onBlur={handleOrderInput}
            />
            <TextField
              disabled
              variant="standard"
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
              name="time"
              onBlur={handleOrderInput}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
