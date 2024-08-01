import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useAuth0 } from "@auth0/auth0-react";
import Box from "@mui/material/Box";

const HeaderLink = styled(Link)({
  flexGrow: 1,
  textDecoration: "none",
  color: "inherit",
});

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { loginWithRedirect } = useAuth0();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = (
    <List>
      <ListItemButton
        component={Link}
        to="/login"
        onClick={toggleDrawer(false)}>
        <ListItemText primary="Login" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/signup"
        onClick={toggleDrawer(false)}>
        <ListItemText primary="Signup" />
      </ListItemButton>
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component={HeaderLink} to="/">
          FoodApp
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {isMobile ? (
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {menuItems}
          </Drawer>
        ) : (
          <>
            <Button color="inherit" onClick={() => loginWithRedirect()}>
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
