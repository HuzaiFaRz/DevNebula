import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const pageLocation = useLocation();
  useEffect(() => {
    if (pageLocation.pathname !== "/") {
      const currentPageURL = pageLocation.pathname
        .slice(1)
        .split("-")
        .map((e) => {
          return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
        })
        .join(" ");

      document.title = `DevNebula _ ${currentPageURL}`;
      return;
    }
  }, [pageLocation.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
