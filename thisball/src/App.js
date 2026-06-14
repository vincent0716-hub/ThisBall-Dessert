import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Router, Routes, Route, Link } from "react-router-dom";
import Information from "./page/Information";
import About from "./page/About";
import Loved from "./page/Loved";
import Food from "./page/Food";
import Homelogo from "./assets/homelogo.jpg";
import shop2 from "./assets/shop2.jpg";
import shop3 from "./assets/shop3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutBoard from "./page/AboutBoard";
import Home from "./page/Home";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-screen h-screen ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/About" element={<About></About>} />
        <Route path="/Food" element={<Food></Food>} />
        <Route path="/Loved" element={<Loved foodID={"test1234"}></Loved>} />
        {/**不管是哪裡分支底下的頁面 子頁面route依序要寫在app檔案底下 在其他子檔案navigate去其他子檔案時 才能找得到這個route */}
        <Route path="/About/AboutBoard" element={<AboutBoard />} />
      </Routes>
    </div>
  );
}

export default App;
