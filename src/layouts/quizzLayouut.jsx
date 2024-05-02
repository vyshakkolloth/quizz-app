import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
const quizzLayouut = () => {
  return (
    <div className="flex flex-col justify-around h-screen bg-blue-gray-900">
      <Nav />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default quizzLayouut;
