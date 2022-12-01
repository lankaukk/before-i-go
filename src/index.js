import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import ActivityList from "./activity-list";
import Profile from "./profile";
import ErrorPage from "./error-page";
import { Header } from "./header";

//import { Activity } from "./activity";
import Activity, { loader as activityLoader } from "./activity";
import { activities } from "./data";

import {
  Route,
  Outlet,
  Link,
  useLoaderData,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const Layout = () => {
   const { activities } = useLoaderData();

  return (
    <div>
      <div>
        <Header>
          {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
          <div
            style={{
              width: "10vw",
              fontFamily: "var(--secondary)",
              padding: "15px 0",
              display: "flex",
              flexDirection: "column",
              overflowY: "scroll",
            }}
          >
            <Link style={{ padding: 15 }} to="/">
              Activities
            </Link>
            <Link style={{ padding: 15 }} to="/profile">
              Profile
            </Link>

            {activities.length ? (
              activities.map((activity) => (
                <Link to={`activities/${activity.id}`} style={{ padding: 15 }}>
                  {activity.name ? activity.name : <i>No Name</i>}{" "}
                </Link>
              ))
            ) : (
              <p>
                <i>No activities</i>
              </p>
            )}
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
      <Route
        path="activities/:activityId"
        element={<Activity />}
        loader={activityLoader}
        // action={activityAction}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
