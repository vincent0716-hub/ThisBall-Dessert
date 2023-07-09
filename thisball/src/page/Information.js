import React from "react";
import info1 from "../assets/info1.png";
import InformationLayout from "../components/InformationLayout";
import InformationLayout2 from "../components/InformationLayout2";
import Footer from "../components/Footer";
const Information = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-screen flex justify-center items-center text-[36px] p-16">
        What We Are
      </div>
      <div className="h-[2px] w-full bg-gray-100 my-6"></div>
      <InformationLayout2
        phototext="info1"
        text1="ThisBALL Hand Burnt Pancake Balls | Unlimited Time Café | Space Rental"
        text2="Pure without dilution, hand-burned to preserve the uniqueness of each.
        Round, yet not so round, not so perfect, like life, being the way you like. 🤍
        #Wishing to become the warmest ball"
      ></InformationLayout2>
      <InformationLayout
        phototext="info2"
        text1="About This ball"
        text2="Starting from a small food cart, relying on a small food cart at the beginning, without much stall rental, utility bills, or other personnel costs, I thought as long as I don't go hungry, it'll be fine. I really didn't starve, but the revenue was actually lower than the salary from my previous job before starting this business. But it's all right, at least the boss lady is happy doing it, watching familiar old ball friends like you come to buy balls and chat, it feels comfortable and joyful."
      ></InformationLayout>
      <InformationLayout2
        phototext="info3"
        text1="Imagination and reality will never be exactly the same."
        text2="Using pure milk pancake batter, French animal-based fresh cream, and 100% honey, etc. Although the boss lady doesn't know how many people can understand their value and price, she still wants to say that animal-based fresh cream is really expensive. Because it's something we consume, ingredient selection cannot be taken lightly. Not every ingredient needs to be top-notch, but having qualified inspection reports for the raw materials is a must. The old saying remains: Only sell what you dare to eat, and liking the food is the most basic requirement."
      ></InformationLayout2>
      <InformationLayout
        phototext="info4"
        text1="Walking on the original path all the way, being the warmest ball."
        text2="Perhaps some people around us have lost their way or gone far, but let's also believe that new ones will come. Never be afraid of losing or facing any person or thing. No matter what, this year, we are also here. ThisBALL enters its fifth year, continuing to live the days together, full of cuteness and joy. ( ´▽` )ﾉ"
      ></InformationLayout>
      <Footer />
    </div>
  );
};

export default Information;
