import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      
      <Route path="/user-profile" element={<span>User profile Page</span>} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRoutes;
