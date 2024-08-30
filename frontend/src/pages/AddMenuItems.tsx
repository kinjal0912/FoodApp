import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, Box, Typography } from "@mui/material";
import CustomInput from "../components/Input";
import CustomButton from "../components/Button";
import SummaryApi from "../common/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddMenuItemsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    isVeg: "",
    isNonVeg: "",
    isJainFriendly: "",
    ingredients: "",
    description: "",
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
      const response = await fetch(SummaryApi.addMenu.url, {
        method: SummaryApi.addMenu.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast("Menu item added successfully!");
        setFormData({
          name: "",
          price: "",
          isVeg: "",
          isNonVeg: "",
          isJainFriendly: "",
          ingredients: "",
          description: "",
        });
      } else {
        const errorResult = await response.json();
        toast(`Error: ${errorResult.error}`);
      }
    } catch (error) {
      console.error("Error adding menu items:", error);
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
          Add Menu Items
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
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <CustomInput
            label="Veg"
            name="isVeg"
            value={formData.isVeg}
            onChange={handleChange}
            required
          />

          <CustomInput
            label="JainFriendly"
            name="isJainFriendly"
            value={formData.isJainFriendly}
            onChange={handleChange}
            required
          />
          <CustomInput
            label="Ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
          <CustomInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <CustomInput
            label="Nonveg"
            name="isNonVeg"
            value={formData.isNonVeg}
            onChange={handleChange}
            required
          />

          <CustomButton
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}>
            Add Menu Item
          </CustomButton>
        </Box>
      </Box>
    </Container>
  );
};

export default AddMenuItemsForm;
