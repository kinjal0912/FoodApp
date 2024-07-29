import React from "react";
import Box from "@mui/material/Box";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          padding: "16px",
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default Layout;
