import Homelogo from "../assets/homelogo.jpg";
import shop2 from "../assets/shop2.jpg";
import shop3 from "../assets/shop3.jpg";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="w-screen h-full relative z-0">
      <section className="relative w-screen h-screen overflow-hidden">
        {/* 背景圖：鋪滿整個 section */}
        <img
          src={Homelogo}
          alt="店面主視覺"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/20" />

        {/* 文字層：置中 */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
            This BALL.
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            Where coffee, music and autumn intertwine.
          </p>
        </div>
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
            Where the essence of autumn dances in the air, mingling with the
            irresistible allure of freshly brewed coffee and the decadent aroma
            of chocolate. Sip on a cup of warmth, as the rich coffee scent
            envelops your senses, while the vibrant touch of orange adds a burst
            of flavor. Embrace the cozy chill and immerse yourself in the
            enchanting vibe of our coffee sanctuary, where love and caffeine
            intertwine to create unforgettable moments.
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
            Step into our coffee sanctuary, where the melodies of midnight
            mingle with the enchanting aroma of freshly brewed coffee. Lose
            yourself in the warm embrace of each sip, as the captivating notes
            of music serenade your soul. Embracing the cozy chill of the night,
            our coffee shop exudes a soothing vibe that invites you to savor the
            symphony of flavors and indulge in moments of tranquility. Welcome
            to a place where the magic of coffee and music intertwine, creating
            an atmosphere that ignites passion and stirs the heart.
          </span>
        </div>{" "}
      </section>{" "}
      <Footer />
    </div>
  );
};
export default Home;
