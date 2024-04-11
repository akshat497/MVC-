import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminHeader } from "./common/AdminHeader";
import ProfilePage from "./components/ProfilePage";
import { MenuCards } from "./components/MenuCards";
import AddMenuCards from "./components/AddMenuCards";
import { Orders } from "./components/Orders";

export const Admin = () => {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route path="/" element=<ProfilePage /> />
        <Route path="/menucards" element=<MenuCards /> />
        <Route path="/addmenucards" element=<AddMenuCards /> />
        <Route path="/orders" element=<Orders /> />
      </Routes>
    </>
  );
};
