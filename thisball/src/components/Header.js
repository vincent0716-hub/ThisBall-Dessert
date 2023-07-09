import React, { useState } from "react";
import logo2 from "../assets/thisballLogo.png";
import logo from "../assets/thisballLogo_preview_rev_1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Router, Routes, Route, Link } from "react-router-dom";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 35) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  } else {
    console.log("You are on the server,Cannot execute");
  }
  return (
    <header
      className={
        navbar
          ? "fixed w-screen h-20 bg-gray-100 flex justify-between items-center fadeIn z-[9999]"
          : "fixed w-screen h-20 bg-[transparent] flex justify-between items-center z-[9999]"
      }
    >
      <Link to="/">
        {" "}
        <div className="ml-12">
          <img src={logo} alt="Example" className="w-12 h-12" />
        </div>
      </Link>

      <div className="mr-12 bg-[] flex justify-between items-center gap-12 text-[20px]">
        <Link to="/Information">
          <h1>Information</h1>
        </Link>
        <Link to="/About">
          {" "}
          <h1>About</h1>
        </Link>
        <Link to="/Loved">
          {" "}
          <h1>Loved</h1>
        </Link>
        <Link to="/Food">
          {" "}
          <h1>Food</h1>
        </Link>

        <AiOutlineShoppingCart className="h-6 w-6"></AiOutlineShoppingCart>
      </div>
    </header>
  );
};

export default Header;
