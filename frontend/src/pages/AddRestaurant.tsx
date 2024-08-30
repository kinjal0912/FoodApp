import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, Box, Typography } from "@mui/material";
import CustomInput from "../components/Input";
import CustomButton from "../components/Button";
import SummaryApi from "../common/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddRestaurantForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    contactNumber: "",
    cuisineType: "",
    isOpen: true,
    isVeg: true,
    isNonVeg: false,
    openingTime: "",
    closingTime: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(SummaryApi.addRestaurant.url, {
        method: SummaryApi.addRestaurant.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast("Restaurant added successfully!");
        setFormData({
          name: "",
          address: "",
          city: "",
          country: "",
          postalCode: "",
          contactNumber: "",
          cuisineType: "",
          isOpen: true,
          isVeg: true,
          isNonVeg: false,
          openingTime: "",
          closingTime: "",
        });
      } else {
        const errorResult = await response.json();
        toast(`Error: ${errorResult.error}`);
      }
    } catch (error) {
      console.error("Error adding restaurant:", error);
      toast("An error occurred. Please try again.");
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography component="h1" variant="h5">
          Add Restaurant
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <CustomInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <CustomInput
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <CustomInput
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <CustomInput
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <CustomInput
            label="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
          <CustomInput
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <CustomInput
            label="Cuisine Type"
            name="cuisineType"
            value={formData.cuisineType}
            onChange={handleChange}
          />
          <CustomInput
            label="Opening Time (HH:mm)"
            name="openingTime"
            value={formData.openingTime}
            onChange={handleChange}
            required
          />
          <CustomInput
            label="Closing Time (HH:mm)"
            name="closingTime"
            value={formData.closingTime}
            onChange={handleChange}
            required
          />
          <CustomButton
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}>
            Add Restaurant
          </CustomButton>
        </Box>
      </Box>
    </Container>
  );
};

export default AddRestaurantForm;
