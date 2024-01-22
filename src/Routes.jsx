import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import SocialCards from "./components/SocialCards/SocialCards";
import { getToken } from "./helpers";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
// import content from "./pages/content/content"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Secure-Nexis-Frontend" element={<SocialCards />} />
      <Route path="/Secure-Nexis-Frontend/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/Secure-Nexis-Frontend"
        element={getToken() ? <Profile /> : <Navigate to="/Secure-Nexis-Frontend/signin" />}
      />
    </Routes>
  );
};

export default AppRoutes;
