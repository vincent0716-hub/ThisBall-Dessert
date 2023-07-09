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
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-screen h-screen ">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-screen h-full relative z-0">
              <section className="w-screen h-[70%] bg-[] overflow-hidden">
                <img
                  src={Homelogo}
                  alt="sjkd"
                  className="relative -top-96 object-center object-cover"
                ></img>
              </section>
              <section
                className="w-screen bg-[white] h-screen flex px-64 justify-center items-center "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset="250"
              >
                <div className="bg-[] flex justify-center flex-col p-12 text-left">
                  <h1 className="text-[24px] my-6">This BALL.Afternoon</h1>
                  <div className="h-[2px] w-full bg-gray-300 mb-6"></div>
                  <span>
                    Where the essence of autumn dances in the air, mingling with
                    the irresistible allure of freshly brewed coffee and the
                    decadent aroma of chocolate. Sip on a cup of warmth, as the
                    rich coffee scent envelops your senses, while the vibrant
                    touch of orange adds a burst of flavor. Embrace the cozy
                    chill and immerse yourself in the enchanting vibe of our
                    coffee sanctuary, where love and caffeine intertwine to
                    create unforgettable moments.
                  </span>
                </div>
                <img
                  src={shop2}
                  className="  w-[80%] h-[80%] object-center object-cover"
                ></img>
              </section>
              <section
                className="w-screen bg-[white] h-screen flex px-52  justify-center items-center"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset="250"
              >
                <img
                  src={shop3}
                  className="w-[80%] h-[80%] object-center object-cover"
                ></img>{" "}
                <div className="bg-[] flex justify-center flex-col p-24   text-right">
                  <h1 className="text-[24px] my-6">This BALL.Midnight</h1>
                  <div className="h-[2px] w-full bg-gray-300 mb-6"></div>
                  <span>
                    Step into our coffee sanctuary, where the melodies of
                    midnight mingle with the enchanting aroma of freshly brewed
                    coffee. Lose yourself in the warm embrace of each sip, as
                    the captivating notes of music serenade your soul. Embracing
                    the cozy chill of the night, our coffee shop exudes a
                    soothing vibe that invites you to savor the symphony of
                    flavors and indulge in moments of tranquility. Welcome to a
                    place where the magic of coffee and music intertwine,
                    creating an atmosphere that ignites passion and stirs the
                    heart.
                  </span>
                </div>{" "}
              </section>{" "}
              <Footer />
            </div>
          }
        />
        <Route path="/Information" element={<Information />} />
        <Route path="/About" element={<About></About>} />
        <Route path="/Food" element={<Food></Food>} />
        <Route path="/Loved" element={<Loved foodID={"test1234"}></Loved>} />
      </Routes>
    </div>
  );
}

export default App;
