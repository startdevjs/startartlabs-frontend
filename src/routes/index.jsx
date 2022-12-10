import React from "react";
import { Routes, Route } from "react-router-dom";
import Private from "./private";
import Login from "../pages/login";
import Home from "../pages/home";
import Register from "../pages/register";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Private Component={Home} />} />
    </Routes>
  );
};

export default RoutesComponent;
