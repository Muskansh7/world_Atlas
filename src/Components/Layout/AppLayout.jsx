import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../UI/Header.jsx";      // default export
import { Footer } from "../UI/Footer.jsx"; // named export

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
