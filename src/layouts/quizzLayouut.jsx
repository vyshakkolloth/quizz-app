import React from "react";
import Nav from "../components/nav";
import { Outlet } from "react-router-dom";
const quizzLayouut = () => {
  return (
    <div className="flex flex-col justify-around h-screen bg-blue-gray-300">
      <Nav />
      <Outlet/>
      quizzLayouut
    </div>
  );
};

export default quizzLayouut;
