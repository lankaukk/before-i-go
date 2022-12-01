import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import ActivityList from "./activity-list";
import Profile from "./profile";
import ErrorPage from "./error-page";
import { Activity } from "./activity";
import { Header } from "./header";

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
      <div>
        <Header>
          {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
          <div style={{ width: "10vw", fontFamily: 'var(--secondary)',  padding: '15px 0'}}>
            <Link style={{padding: 15}} to="/">Activities</Link>
            <br></br>
            <br></br>
            <Link style={{padding: 15}} to="/profile">Profile</Link>
            {/* <br></br>
            <br></br>
            <Link to="/one">Activity 1</Link> */}
          </div>
        </Header>

        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<ActivityList />} />
      <Route path="profile" element={<Profile />} />
      <Route path="one" element={<Activity />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
