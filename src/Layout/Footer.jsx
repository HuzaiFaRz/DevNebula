import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full p-5 bg-layout/90 text-layoutText flex justify-between items-center">
        <p className="text-xs tablet:text-sm copyright font-mono">
          {" "}
          © {new Date().getFullYear()} Car X. All rights reserved.
        </p>
        <span className="text-lg tablet:text-3xl font-Bruney">CAR X</span>
      </footer>
    </>
  );
};

export default Footer;
