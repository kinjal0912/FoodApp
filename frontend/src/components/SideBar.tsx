import React, { useState } from "react";
import { Box, Drawer, List, ListItem, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem>
          <Button
            component={Link}
            to="/"
            fullWidth
            variant="text"
            sx={{ justifyContent: "flex-start" }}>
            Home
          </Button>
        </ListItem>
        <ListItem>
          <Button
            component={Link}
            to="/account"
            fullWidth
            variant="text"
            sx={{ justifyContent: "flex-start" }}>
            Account
          </Button>
        </ListItem>
        <ListItem>
          <Button
            component={Link}
            to="/order-history"
            fullWidth
            variant="text"
            sx={{ justifyContent: "flex-start" }}>
            Order History
          </Button>
        </ListItem>
        <ListItem>
          <Button
            component={Link}
            to="/logout"
            fullWidth
            variant="text"
            sx={{ justifyContent: "flex-start" }}>
            Logout
          </Button>
        </ListItem>
        {/* Replace Sign Up and Sign In when the user is not logged in */}
        <ListItem>
          <Button
            component={Link}
            to="/signup"
            fullWidth
            variant="text"
            sx={{ justifyContent: "flex-start" }}>
            Sign Up
          </Button>
        </ListItem>
        <ListItem>
          <Button
            component={Link}
            to="/signin"
            fullWidth
            variant="text"
            sx={{ justifyContent: "flex-start" }}>
            Sign In
          </Button>
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
