import React from "react";
import { Routes, Route } from "react-router-dom";
import Private from "./private";
import Login from "../pages/login";
import Home from "../pages/home";
import Register from "../pages/register";
import ForgotPassword from "../pages/forgotPassword";
import Code from "../pages/forgotPassword/setCode";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/code" element={<Code />} />
      <Route path="/" element={<Private Component={Home} />} />
    </Routes>
  );
};

export default RoutesComponent;
