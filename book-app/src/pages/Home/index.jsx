import React, { useContext, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  TextField,
  FormControlLabel,
  Grid,
  Checkbox,
  Button,
  Link,
  Alert,
  Snackbar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

const Home = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const key = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [key]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    login(user.email, user.password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Нэвтрэх
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Таны имэйл"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={change}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Нууц үг"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={change}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Нэвтрэх
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </Container>
  );
};

export default Home;
