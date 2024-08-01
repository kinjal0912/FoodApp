// src/routes/index.tsx
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
// import SignupPage from "../pages/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <span>Home page</span>
          </Layout>
        }
      />
      <Route
        path="/user-profile"
        element={
          <Layout>
            <span>User Profile Page</span>
          </Layout>
        }
      />
      {/* <Route path="/signup" element={<SignupPage />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
