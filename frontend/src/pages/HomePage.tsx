import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const PageContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
}));

const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  background: `url('path/to/restaurant-background.jpg') no-repeat center center`,
  backgroundSize: 'cover',
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '3rem',
  marginBottom: theme.spacing(2),
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: theme.spacing(4),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle variant="h1">
          Welcome to Gourmet Restaurant
        </HeroTitle>
        <HeroSubtitle variant="h6">
          Experience the finest dining in town
        </HeroSubtitle>
        <ActionButton variant="contained" color="primary" startIcon={<RestaurantIcon />}>
          Book a Table
        </ActionButton>
        <ActionButton variant="outlined" color="secondary">
          View Menu
        </ActionButton>
      </HeroSection>
    </PageContainer>
  );
};

export default HomePage;
