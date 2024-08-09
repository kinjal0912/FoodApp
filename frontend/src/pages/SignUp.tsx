import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  MenuItem,
  IconButton,
  Link,
} from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SummaryApi from "../common/Api";

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    contactNo: "",
    addressLine1: "",
    city: "",
    country: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate passwords
    if (data.password !== data.confirmPassword) {
      toast("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(SummaryApi.signup.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast("Sign-up successful");
        navigate("/signin");
      } else {
        const errorResult = await response.json();
        console.error("Sign-up error:", errorResult); // Added logging
        toast(`Error: ${errorResult.message}`);
      }
    } catch (error) {
      console.error("Error during sign-up:", error); // Added logging
      toast("An error occurred. Please try again.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {/* Placeholder for user icon */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={data.email}
                onChange={handleOnChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ position: "relative" }}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={data.password}
                  onChange={handleOnChange}
                />
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ position: "absolute", right: 8, top: "30%" }}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </IconButton>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ position: "relative" }}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showConfPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                />
                <IconButton
                  onClick={() => setShowConfPassword(!showConfPassword)}
                  sx={{ position: "absolute", right: 8, top: "30%" }}>
                  {showConfPassword ? <FaEyeSlash /> : <FaEye />}
                </IconButton>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={data.name}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="contactNo"
                label="Contact Number"
                name="contactNo"
                autoComplete="tel"
                value={data.contactNo}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="addressLine1"
                label="Address Line 1"
                name="addressLine1"
                autoComplete="address-line1"
                value={data.addressLine1}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="address-level2"
                value={data.city}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="country"
                label="Country"
                name="country"
                autoComplete="country"
                value={data.country}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                select
                required
                fullWidth
                id="role"
                label="Role"
                name="role"
                value={data.role}
                onChange={handleOnChange}>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="restaurant">Restaurant</MenuItem>
                <MenuItem value="buyer">Buyer</MenuItem>
                <MenuItem value="delivery">Delivery</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
