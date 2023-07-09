import React from "react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="">
      <div className="bg-gray-100 w-screen h-20 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-6">
          {" "}
          <AiFillGithub className="h-6 w-6" />
          <AiOutlineInstagram className="h-6 w-6" />
          <BsFacebook className="h-6 w-6" />
        </div>
        <div className="text-[10px]">
          <h1>
            Copyright © 2023 - Yu-Cheng Lin The purpose of this site is for
            personal practice use
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
