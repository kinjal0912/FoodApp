import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../pages/SignUp";
import HomePage from "../pages/Home";
import SignIn from "../pages/SignIn";
import AddRestaurantForm from "../pages/AddRestaurant";
import RestaurantsPage from "../pages/Restaurant";
import AddMenuItemsForm from "../pages/AddMenuItems";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/add-restro" element={<AddRestaurantForm />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/addmenuitem" element={<AddMenuItemsForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
