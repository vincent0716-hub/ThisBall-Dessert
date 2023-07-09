import React, { useState, useEffect, useRef } from "react";
import info1 from "../assets/info1.png";
import info3 from "../assets/info3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const InformationLayout2 = ({ phototext, text1, text2 }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [photo, setphoto] = useState();
  const targetRef = useRef(null);
  useEffect(() => {
    if (phototext == "info1") {
      setphoto(info1);
    }
    if (phototext == "info3") {
      setphoto(info3);
    }
  }, [phototext]);
  const [fadeIn, setFadeIn] = useState(false);

  return (
    <section
      className="flex p-20 bg-[] fade-in"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-offset="250"
    >
      <div className="bg-[] flex flex-col justify-center items-center w-[50%]">
        {" "}
        <img src={photo} className="w-[70%] "></img>
      </div>
      <div className="bg-[] w-[50%] flex flex-col justify-center items-center text-center px-16">
        <h1 className="text-[24px]  ">{text1}</h1>
        <span>{text2}</span>
      </div>{" "}
    </section>
  );
};

export default InformationLayout2;
