import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Auburn from "../../src/assets/images (1).jfif";

const HeroImage = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
  objectFit: "cover",
});

const HeroContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  textAlign: "center",
  color: theme.palette.common.white,
  height: "400px", // Adjust height as needed
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)", // Dark overlay
    zIndex: 1,
  },
}));

const HeroText = styled(Typography)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  padding: theme.spacing(2),
  color: theme.palette.common.white,
}));

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroImage src={Auburn} alt="Auburn" />
      <HeroText variant="h2" component="h1">
        Welcome to Auburn
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;
