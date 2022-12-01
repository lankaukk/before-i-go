import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import ActivityList from "./activity-list";
import Profile from "./profile";
import ErrorPage from "./error-page";

import {
  Route,
  Outlet,
  Link,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}

      <li>
        <Link to="/">Activities</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<ActivityList />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
