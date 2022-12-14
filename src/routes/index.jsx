import React from "react";
import { Routes, Route } from "react-router-dom";
import Private from "./private";
import PrivateAdmin from "./privateAdmin";
import Login from "../pages/login";
import Home from "../pages/home";
import Register from "../pages/register";
import ForgotPassword from "../pages/forgotPassword";
import Code from "../pages/forgotPassword/setCode";
import AdminUser from "../pages/admin/user";
import UpdateUser from "../pages/admin/user/update";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/code" element={<Code />} />
      <Route path="/" element={<Private Component={Home} />} />
      <Route path="/admin" element={<PrivateAdmin Component={AdminUser} />} />
      <Route path="/admin/user/update/:id" element={<PrivateAdmin Component={UpdateUser} />} />
    </Routes>
  );
};

export default RoutesComponent;
