import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import React from "react";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, Component: Home }],
  },
]);

const App = () => {
  return (
    <React.Fragment>
      <main className="w-full h-full">
        <RouterProvider router={routes} />
      </main>
    </React.Fragment>
  );
};

export default App;
