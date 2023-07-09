import React, { useState, useEffect } from "react";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.jpg";
import info4 from "../assets/info4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const InformationLayout = ({ phototext, text1, text2 }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [photo, setphoto] = useState();
  useEffect(() => {
    if (phototext == "info2") {
      setphoto(info2);
    }
    if (phototext == "info4") {
      setphoto(info4);
    }
  }, [phototext]);

  return (
    <section
      className="flex p-20 bg-[] fade-in"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-offset="250"
    >
      <div className="bg-[] w-[50%] flex flex-col justify-center items-center text-center px-16">
        <h1 className="text-[24px]  ">{text1}</h1>
        <span>{text2}</span>
      </div>{" "}
      <div className="bg-[] flex flex-col justify-center items-center w-[50%]">
        {" "}
        <img src={photo} className="w-[70%] "></img>
      </div>
    </section>
  );
};

export default InformationLayout;
