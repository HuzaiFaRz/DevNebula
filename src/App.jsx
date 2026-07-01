import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./MainPages/Home";
import React, { Fragment, useEffect } from "react";
import ContactUs from "./MainPages/ContactUs";
import AboutUs from "./MainPages/AboutUs";
import Faqs from "./MainPages/Faqs";
import PrivacyPolicy from "./MainPages/PrivacyPolicy";
import CarDetails from "./MainPages/CarDetails";
import ErrorRoute from "./MainPages/ErrorRoute";
import Lenis from "lenis";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorRoute />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "contactus", element: <ContactUs /> },
//       { path: "aboutus", element: <AboutUs /> },
//       { path: "faqs", element: <Faqs /> },
//       { path: "privacypolicy", element: <PrivacyPolicy /> },
//       { path: ":carID", element: <CarDetails /> },
//     ],
//   },
//   {
//     path: "*",
//     element: <ErrorRoute />,
//   },
// ]);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    // <React.Fragment>
    //   <main className="w-full h-full">
    //     <RouterProvider router={routes} />
    //   </main>
    // </React.Fragment>

    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorRoute />}>
          <Route path="/" element={<Home />} index />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path=":carID" element={<CarDetails />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
