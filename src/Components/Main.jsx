/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <div className=" backdrop-blur-lg w-full sticky top-0 bg-white bg-opacity-20 p-5 border-b-4 border-white">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
