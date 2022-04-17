import React from "react";
import { Route } from "react-router-dom";
import ProfileBadgeScreen from "../screens/ProfileBadgeScreen";

import ButtonAppBar from "./AppBar";
import FreindsSidebar from "./FreindsSidebar";
import Layout from "./Layout";
import Sidebar from "./Sidebar";

function AppRoute({ element: Element, ...rest }) {
  const sidebar = React.useRef(null);
  const fsidebar = React.useRef(null);
  return <Route path="profile-badge" element={<ProfileBadgeScreen />} />;
}

export default AppRoute;
