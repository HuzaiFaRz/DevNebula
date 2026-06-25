import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./MainPages/Home";
import React from "react";
import ContactUs from "./MainPages/ContactUs";
import AboutUs from "./MainPages/AboutUs";
import Faqs from "./MainPages/Faqs";
import TermsCondition from "./MainPages/TermsCondition";
import PrivacyPolicy from "./MainPages/PrivacyPolicy";
import RollsRoyce from "./ProductPages/RollsRoyce";
import MercedesSClass from "./ProductPages/MercedesSClass";
import ToyotaSupra from "./ProductPages/ToyotaSupra";
import BMWSeriesi7 from "./ProductPages/BMWSeriesi7";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, Component: Home },
      { path: "/contactus", Component: ContactUs },
      { path: "/aboutus", Component: AboutUs },
      { path: "/faqs", Component: Faqs },
      { path: "/termscondition", Component: TermsCondition },
      { path: "/privacypolicy", Component: PrivacyPolicy },
      { path: "/rollsroyce", Component: RollsRoyce },
      { path: "/mercedessclass", Component: MercedesSClass },
      { path: "/toyotasupra", Component: ToyotaSupra },
      { path: "/bmwseriesi7", Component: BMWSeriesi7 },
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
