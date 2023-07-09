import React from "react";
import about1 from "../assets/aboutimage1.png";
import about2 from "../assets/aboutimage2.png";
import about3 from "../assets/aboutimage3.png";
import about4 from "../assets/aboutimage4.png";
import about5 from "../assets/aboutimage5.png";
import Footer from "../components/Footer";
const About = () => {
  const searchSource = [
    {
      header: about1,
      title1: "About employment",
      title2:
        "we are planning to employ someone who are passionate for making...",
      date: "2023/5/22",
    },
    {
      header: about2,
      title1: "About Valentines 520",
      title2: "The most important date has finally arrived - Valentines Day...",
      date: "2023/5/20",
    },
    {
      header: about3,
      title1: "About Event",
      title2: "We provide multiple service to customer...",
      date: "2023/5/20",
    },
    {
      header: about4,
      title1: "About our second floor rental information",
      title2: "Our furnitures, facilities ...",
      date: "2023/5/20",
    },
    {
      header: about5,
      title1: "About delivery",
      title2: "We can deliver all of our food during our business hours...",
      date: "2023/5/20",
    },
  ];
  return (
    <div className="w-screen h-screen">
      <div className="w-screen flex justify-center items-center text-[36px] p-16">
        About Us
      </div>
      <div className="h-[2px] w-full bg-gray-100 my-6"></div>
      {/**section */}
      {/**  <div className="  h-[75%] bg-[] w-screen flex flex-col justify-center items-center">
        <div className="bg-gray-100 h-[58%] w-[60%] shadow-2xl flex">
          <div className="h-full w-[35%] bg-[]">
            {" "}
            <img
              src={about1}
              className="w-full h-full object-center object-cover"
            ></img>
          </div>
          <div className="h-full w-[65%] bg-[]">
            <div className="w-full h-full px-8 py-8  relative">
              <h1 className="text-[24px] font-semibold my-2">
                About employment
              </h1>
              <h1 className="text-[16px] font-normal  my-5">
                We are planning to employ someone who are passionate for
                making...
              </h1>
              <h1 className="text-[16px] font-normal  absolute bottom-6 left-8">
                2023/5/22
              </h1>
              <button className="bg-gray-200 p-2 absolute bottom-6 right-12">
                See More
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="h-[2px] w-[60%] bg-gray-100 my-16"></div>
      </div>*/}

      {/**end of section */}
      {searchSource.map((searchSource, index) => (
        <div
          className="  h-[75%] bg-[] w-screen flex flex-col justify-center items-center"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-offset="250"
        >
          <div className="bg-gray-100 h-[58%] w-[60%] shadow-2xl flex">
            <div className="h-full w-[35%] bg-[]">
              {" "}
              <img
                src={searchSource.header}
                className="w-full h-full object-center object-cover"
              ></img>
            </div>
            <div className="h-full w-[65%] bg-[]">
              <div className="w-full h-full px-8 py-8  relative">
                <h1 className="text-[24px] font-semibold my-2">
                  {searchSource.title1}
                </h1>
                <h1 className="text-[16px] font-normal  my-5">
                  {searchSource.title2}
                </h1>
                <h1 className="text-[16px] font-normal  absolute bottom-6 left-8">
                  {searchSource.date}
                </h1>
                <button className="bg-gray-200 p-2 absolute bottom-6 right-12">
                  See More
                </button>
              </div>
            </div>
          </div>{" "}
          <div className="h-[2px] w-[60%] bg-gray-100 my-16"></div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default About;
