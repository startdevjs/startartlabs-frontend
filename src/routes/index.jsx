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
import AdminProject from "../pages/admin/project";
import CreateProject from "../pages/admin/project/create";
import UpdateProject from "../pages/admin/project/update";
import AdminLession from "../pages/admin/lession";
import CreateLession from "../pages/admin/lession/create";
import UpdateLession from "../pages/admin/lession/update";
import UpdateWarning from "../pages/admin/warning/update";
import CreateWarning from "../pages/admin/warning/create";
import AdminWarning from "../pages/admin/warning";
import AdminExercise from "../pages/admin/exercise";
import AdminForum from "../pages/admin/forum";
import CreateForum from "../pages/admin/forum/create";
import UpdateForum from "../pages/admin/forum/update";
import UpdateExercise from "../pages/admin/exercise/update";
import Project from "../pages/projects/project";
import Profile from "../pages/profile";
import Projects from "../pages/projects";
import Community from "../pages/community";
import CommunityPost from "../pages/community/post";
import CommunityHome from "../pages/community/communityHome";
import CommunityByProject from "../pages/community/communityByProject";
import PrivateCourses from "./privateCourses";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/code" element={<Code />} />
      <Route path="/profile" element={<Private Component={Profile} />} />
      <Route path="/" element={<Private Component={Home} />} />
      <Route path="/projects" element={<Private Component={Projects} />} />
      <Route path="/project/:projectId" element={<Private Component={Project} />} />

      <Route path="/course/:projectId" element={<PrivateCourses Component={Project} />} />

      <Route path="/community" element={<Private Component={CommunityHome} />} />
      <Route path="/community/:id" element={<Private Component={Community} />} />
      <Route path="/community/project/:id" element={<Private Component={CommunityByProject} />} />
      <Route path="/community/post/:id" element={<Private Component={CommunityPost} />} />
      <Route path="/admin" element={<PrivateAdmin Component={AdminUser} />} />
      <Route path="/admin/user/update/:id" element={<PrivateAdmin Component={UpdateUser} />} />
      <Route path="/admin/project" element={<PrivateAdmin Component={AdminProject} />} />
      <Route path="/admin/project/create" element={<PrivateAdmin Component={CreateProject} />} />
      <Route
        path="/admin/project/update/:id"
        element={<PrivateAdmin Component={UpdateProject} />}
      />
      <Route path="/admin/lession" element={<PrivateAdmin Component={AdminLession} />} />
      <Route path="/admin/lession/create" element={<PrivateAdmin Component={CreateLession} />} />
      <Route
        path="/admin/lession/update/:id"
        element={<PrivateAdmin Component={UpdateLession} />}
      />
      <Route path="/admin/warning" element={<PrivateAdmin Component={AdminWarning} />} />
      <Route path="/admin/warning/create" element={<PrivateAdmin Component={CreateWarning} />} />
      <Route
        path="/admin/warning/update/:id"
        element={<PrivateAdmin Component={UpdateWarning} />}
      />
      <Route path="/admin/forum" element={<PrivateAdmin Component={AdminForum} />} />
      <Route path="/admin/forum/create" element={<PrivateAdmin Component={CreateForum} />} />
      <Route path="/admin/forum/update/:id" element={<PrivateAdmin Component={UpdateForum} />} />
      <Route path="/admin/exercise" element={<PrivateAdmin Component={AdminExercise} />} />
      <Route
        path="/admin/exercise/update/:id"
        element={<PrivateAdmin Component={UpdateExercise} />}
      />
    </Routes>
  );
};

export default RoutesComponent;
