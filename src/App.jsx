import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./MainPages/Home";
import React, { useEffect } from "react";
import ContactUs from "./MainPages/ContactUs";
import AboutUs from "./MainPages/AboutUs";
import Faqs from "./MainPages/Faqs";
import PrivacyPolicy from "./MainPages/PrivacyPolicy";
import CarDetails from "./MainPages/CarDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, Component: Home },
      { path: "/contactus", Component: ContactUs },
      { path: "/aboutus", Component: AboutUs },
      { path: "/faqs", Component: Faqs },
      { path: "/privacypolicy", Component: PrivacyPolicy },
      { path: "/:carID", Component: CarDetails },
    ],
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
