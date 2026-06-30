import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import LoadingPage from "../MainPages/LoadingPage";
const Layout = () => {
  return (
    <>
      <LoadingPage />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
