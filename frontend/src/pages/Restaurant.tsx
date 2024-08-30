import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import SummaryApi from "../common/Api";
import CustomButton from "../components/Button";
import { Link } from "react-router-dom";

interface Restaurant {
  _id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  contactNumber: number;
  cuisineType: string[];
  isOpen: boolean;
  isVeg: boolean;
  isNonVeg: boolean;
  openingTime: string;
  closingTime: string;
  menuItems: string[];
}

const RestaurantsPage: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(SummaryApi.getRestaurant.url, {
          method: SummaryApi.getRestaurant.method,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setRestaurants(data);
      } catch (err) {
        setError("Failed to fetch restaurants.");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Restaurants
      </Typography>
      <Grid container spacing={3}>
        {restaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant._id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {restaurant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {restaurant.address}, {restaurant.city}, {restaurant.country}{" "}
                  - {restaurant.postalCode}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contact: {restaurant.contactNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cuisine: {restaurant.cuisineType.join(", ")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Open: {restaurant.isOpen ? "Yes" : "No"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Veg: {restaurant.isVeg ? "Yes" : "No"}, Non-Veg:{" "}
                  {restaurant.isNonVeg ? "Yes" : "No"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hours: {restaurant.openingTime} - {restaurant.closingTime}
                </Typography>
                <CustomButton
                  component={Link}
                  to="/addmenuitem"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}>
                  Add Menu Item
                </CustomButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RestaurantsPage;
