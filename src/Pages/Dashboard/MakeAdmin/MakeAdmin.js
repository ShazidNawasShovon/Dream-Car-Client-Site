import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Typography, Alert } from "@mui/material";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleOnSubmit = (e) => {
    const user = { email };
    // send to the server
    fetch("https://damp-retreat-54867.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Typography sx={{ textAlign: "center" }} variant="h4">
        Make An Admin
      </Typography>
      <form
        variant="standard"
        className="d-flex justify-content-center mt-3"
        onSubmit={handleOnSubmit}
      >
        <AccountCircle
          sx={{ textAlign: "center", color: "action.active", mr: 1, my: 0.5 }}
        />
        <TextField
          onBlur={handleOnBlur}
          type="email"
          label="Email"
          variant="standard"
        />
        <Button
          type="submit"
          variant="outlined"
          color="success"
          sx={{ marginLeft: "2rem" }}
        >
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin successfully!</Alert>}
    </Box>
  );
};

export default MakeAdmin;
