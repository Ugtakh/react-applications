import { Grid, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import Book from "../../components/Book";
import { Navigate } from "react-router-dom";
import Nav from "../../components/Navbar";

const BookList = ({ books }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [open, setOpen] = useState(true);
  const [status, setStatus] = useState("success");
  const [message, setMessage] = useState("Амжилттай нэвтэрлээ.");

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // if (!user) {
  //   console.log("logout");
  //   return <Navigate to={"/"} replace />;
  // }

  return (
    <Grid container>
      {console.log(books)}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={5000}
      >
        <Alert severity={status}>{message}</Alert>
      </Snackbar>
      {/* <Nav user={user} logout={logout} /> */}
      {books.map((book, i) => (
        <Book key={i} book={book} id={i} />
      ))}
    </Grid>
  );
};

export default BookList;
