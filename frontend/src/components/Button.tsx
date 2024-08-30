import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { Link } from "react-router-dom";

interface CustomButtonProps extends ButtonProps {
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  variant?: "contained" | "outlined" | "text";
  color?:
    | "primary"
    | "secondary"
    | "inherit"
    | "success"
    | "error"
    | "info"
    | "warning";
  onClick?: () => void;
  children: React.ReactNode;
  sx?: any;
  component?: React.ElementType;
  to?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type = "button",
  fullWidth = false,
  variant = "contained",
  color = "primary",
  onClick,
  children,
  sx,
  component: Component = "button",
  to,
  ...props
}) => {
  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      onClick={onClick}
      sx={sx}
      component={Component}
      {...props}
      {...(Component === Link && to ? { to } : { href: to })}>
      {children}
    </Button>
  );
};

export default CustomButton;
