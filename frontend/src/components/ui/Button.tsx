import * as React from "react";
import Button, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import { styled, Theme } from "@mui/material/styles";

interface CustomButtonProps extends MUIButtonProps {
  variantType?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  sizeType?: "default" | "sm" | "lg" | "icon";
}

const buttonStyles = (theme: Theme, variantType: string, sizeType: string) => {
  const styles = {
    default: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    destructive: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.error.dark,
      },
    },
    outline: {
      border: `1px solid ${theme.palette.divider}`,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    },
    secondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
    ghost: {
      backgroundColor: "transparent",
      color: theme.palette.text.primary,
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    },
    link: {
      backgroundColor: "transparent",
      color: theme.palette.primary.main,
      textDecoration: "underline",
      "&:hover": {
        textDecoration: "underline",
        backgroundColor: "transparent",
      },
    },
    defaultSize: {
      height: "36px",
      padding: "0 16px",
    },
    smSize: {
      height: "32px",
      padding: "0 12px",
      fontSize: "0.75rem",
    },
    lgSize: {
      height: "40px",
      padding: "0 32px",
    },
    iconSize: {
      height: "36px",
      width: "36px",
    },
  };
  return {
    ...styles[variantType || "default"],
    ...styles[`${sizeType}Size` || "defaultSize"],
  };
};

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "variantType" && prop !== "sizeType",
})<CustomButtonProps>(({ theme, variantType, sizeType }) => ({
  ...buttonStyles(theme, variantType!, sizeType!),
}));

const MyButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ variantType = "default", sizeType = "default", ...props }, ref) => {
    return <StyledButton variantType={variantType} sizeType={sizeType} ref={ref} {...props} />;
  }
);

MyButton.displayName = "MyButton";

export { MyButton };
