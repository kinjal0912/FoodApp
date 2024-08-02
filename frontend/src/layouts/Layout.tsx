import React from "react";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <Hero />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "80vh",
          backgroundColor: "#f5f5f5",
          padding: "16px",
        }}>
        {children}
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
