import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ActivityList from "./activity-list";
import Profile from "./profile";
import Nav from "./Nav";
import {
  Routes,
  Route,
  Outlet,
  Link,
  createMemoryRouter,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="activities" element={<ActivityList />} />
      <Route path="profile" element={<Profile />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
