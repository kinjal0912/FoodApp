import React, { useState } from "react";
import { Box, Drawer, List, ListItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";

const Sidebar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  };

  const isLoggedIn = !!localStorage.getItem("authToken");

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem>
          <CustomButton
            component={Link}
            to="/"
            fullWidth
            variant="text"
            sx={{ justifyContent: "flex-start" }}>
            Home
          </CustomButton>
        </ListItem>

        <ListItem>
          <CustomButton
            component={Link}
            to="/add-restro"
            fullWidth
            variant="text"
            sx={{ justifyContent: "flex-start" }}>
            Add Restaurant
          </CustomButton>
        </ListItem>

        <ListItem>
          <CustomButton
            component={Link}
            to="/account"
            fullWidth
            variant="text"
            sx={{ justifyContent: "flex-start" }}>
            Account
          </CustomButton>
        </ListItem>

        <ListItem>
          <CustomButton
            component={Link}
            to="/order-history"
            fullWidth
            variant="text"
            sx={{ justifyContent: "flex-start" }}>
            Order History
          </CustomButton>
        </ListItem>

        {!isLoggedIn && (
          <>
            <ListItem>
              <CustomButton
                component={Link}
                to="/signup"
                fullWidth
                variant="text"
                sx={{ justifyContent: "flex-start" }}>
                Sign Up
              </CustomButton>
            </ListItem>

            <ListItem>
              <CustomButton
                component={Link}
                to="/signin"
                fullWidth
                variant="text"
                sx={{ justifyContent: "flex-start" }}>
                Sign In
              </CustomButton>
            </ListItem>
          </>
        )}

        <ListItem>
          <CustomButton
            component="button"
            fullWidth
            variant="text"
            onClick={handleLogout}
            sx={{ justifyContent: "flex-start" }}>
            Logout
          </CustomButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
