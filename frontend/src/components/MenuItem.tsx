// CustomMenuItem.tsx
import React from "react";
import { MenuItem as MuiMenuItem, MenuItemProps } from "@mui/material";

interface CustomMenuItemProps extends MenuItemProps {}

const CustomMenuItem: React.FC<CustomMenuItemProps> = (props) => {
  return <MuiMenuItem {...props}>{props.children}</MuiMenuItem>;
};

export default CustomMenuItem;
