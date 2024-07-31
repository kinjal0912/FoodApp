import React from "react";
import Box from "@mui/material/Box";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.default",
        padding: 3,
        textAlign: "center",
        color: "text.primary",
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
      }}>
      Footer
    </Box>
  );
};

export default Footer;
