import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import App from "../pages/App/App";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "app",
        Component: App,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "appDetails/:id",
        Component: AppDetails,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
