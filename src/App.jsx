import React from "react";

import Layout from "./Component/Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from './Component/Contact/Contact';
import Portfolio from './Component/Portfolio/Portfolio';
import Notfound from "./Component/NotFound/Notfound";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index:true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
}
