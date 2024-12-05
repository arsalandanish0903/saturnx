import React, { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Slider from "react-slick";
import { LuCircleDollarSign } from "react-icons/lu";
import { PiHospitalLight } from "react-icons/pi";
import { MdConstruction } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import "aos/dist/aos.css";
import AOS from "aos";
import { CiShop } from "react-icons/ci";
import About from "./About/About";
import Service from "./Services/Service";
import Technology from "./Technology/Technology";
import ClientSlider from "../components/ClientSlider/ClientSlider";
import StatsSection from "../components/StatsSection/StatsSection";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import BookSlider from "../components/BookSlider/BookSlider";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const sliderRef = useRef(null);

  // Initialize AOS animation when the component is mounted
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animation only once
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div className="custom-dots">
        <ul className="space-y-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-600"></button>
    ),
  };

  const homePageCards = [
    {
      icon: <LuCircleDollarSign />,
      text: "Finetech",
    },
    {
      icon: <PiHospitalLight />,
      text: "Healthcare & Well Being",
    },
    {
      icon: <MdConstruction />,
      text: "Construction",
    },
    {
      icon: <FaMapLocationDot />,
      text: "Transportation",
    },
    {
      icon: <FaCarAlt />,
      text: "Automotive",
    },
    {
      icon: <MdCastForEducation />,
      text: "Edutech",
    },
    {
      icon: <IoIosPaper />,
      text: "Insurance",
    },
    {
      icon: <CiShop />,
      text: "Ecommerce",
    },
  ];

  return (
    <>
      <div
        className={`relative  w-full  ${theme === "dark" ? "bg-white" : "bg-black"}`}
      >
        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          <div className="relative w-full h-screen">
            <img
              src="/slider3.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 z-10"></div>
            <div className="absolute inset-0 flex container mx-auto flex-col top-32 sm:top-0 justify-center text-white z-20 px-6 sm:px-16">
              <h1 className="text-xl sm:text-6xl font-bold mb-2" data-aos="fade-right" data-aos-duration="2000">
                Build Bespoke Software Solution for Your Business Growth
              </h1>
              <p className="text-sm my-2 sm:my-8 sm:text-xl text-left text-white ">
                From innovative startups to Fortune 500 enterprises, businesses trust us to develop, test, upgrade, and scale their digital products.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {homePageCards.map(({ icon, text }, index) => (
                  <div
                    key={index}
                    className="group relative flex items-center dark:hover:text-white flex-col sm:px-2 sm:py-4 px-2 py-2 bg-[#010038] dark:bg-white dark:text-black text-white rounded-lg shadow-md w-full animate-infinite-bounce transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#010038] hover:to-[#F59E0D] dark:hover:from-white dark:hover:to-[#F59E0D]"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  >
                    <span className="text-2xl sm:text-6xl">{icon}</span>
                    <p className="text-sm sm:text-base font-medium text-center">{text}</p>
                    {/* Pseudo-element for gradient effect */}
                    <div className="absolute inset-0 z-[-3] rounded-lg bg-gradient-to-r from-[#F59E0D] to-black opacity-0 group-hover:opacity-100 group-hover:scale-95 transition-all duration-500"></div>
                  </div>
                ))}
              </div>


              <div className="mt-2 sm:mt-8">
                <button
                  className="relative sm:px-12 sm:py-2 px-2 py-1 text-white bg-transparent border-2 border-white rounded-md sm:text-lg text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-[#010038]"
                  data-aos="fade-right" data-aos-duration="2000"
                >
                  Let's Talk
                  <span className="absolute top-0 left-0 w-full h-full bg-[#010038] opacity-50 rounded-full animate-ping"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Additional slides */}
          <div className="relative w-full h-screen" data-aos="fade-up">
            <img
              src="/slider2.png"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white z-20">
              <h1 className="text-5xl font-bold">Discover Our Services</h1>
            </div>
          </div>
          <div className="relative w-full h-screen" data-aos="fade-up">
            <img
              src="/slider3.png"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white z-20">
              <h1 className="text-5xl font-bold">Join Us Today</h1>
            </div>
          </div>
        </Slider>

        {/* Custom Dots Navigation */}
        <div className="absolute right-8 bottom-8 transform z-10 sm:block hidden">
          <ul className="flex items-center gap-4 z-50">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => sliderRef.current.slickGoTo(index)}
                className={`transition-all ${sliderRef.current?.innerSlider?.state.currentSlide === index
                  ? "bg-gray-600"
                  : "bg-gray-400"
                  }`}
              ></button>
            ))}
          </ul>
        </div>
      </div>
      <About />
      <Service />
      <Technology />
      <StatsSection />
      <ClientSlider />
      <WhyChooseUs />
      
    </>
  );
};

export default Home;
