import React,{useEffect} from "react";
import { MdHighQuality, MdAttachMoney, MdPeople, MdSupport } from "react-icons/md";
import './WhyChooseUs.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const WhyChooseUsSideLayout = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
  const features = [
    {
      title: "High Quality",
      description: "We deliver top-notch products and services with utmost care.",
      icon: <MdHighQuality className="text-white text-6xl text-center" />,
    },
    {
      title: "Affordable Prices",
      description: "Competitive pricing without compromising quality.",
      icon: <MdAttachMoney className="text-white text-6xl text-center" />,
    },
    {
      title: "Expert Team",
      description: "Our experienced team ensures the best outcomes for you.",
      icon: <MdPeople className="text-white text-6xl text-center" />,
    },
    {
      title: "24/7 Support",
      description: "We are available anytime to address your concerns.",
      icon: <MdSupport className="text-white text-6xl text-center" />,
    },
  ];

  return (
    <div className="relative py-16 bg-[#010038]">
      <div className="w-full container mx-auto px-6 sm:px-12 lg:px-16">
        <h2 className="text-6xl font-bold text-white text-left ml-8 mb-8" data-aos='fade-down'>
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
          {/* Left Side Image */}
          <div className="w-full h-full flex items-center justify-center overflow-hidden mb-8 lg:mb-0" data-aos='fade-left'>
            <img
              src="/business-support-services.webp"
              alt="Why Choose Us"
              className="object-cover w-full h-full shadow-xl"
            />
          </div>

          {/* Right Side Cards */}
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos='fade-right'>
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col sm:px-4 items-center justify-center text-center bg-transparent shadow-md addShadow rounded-lg transition h-full"
              >
                <span className="bg-[#F59E0D] rounded-full p-4 flex items-center justify-center mb-4">
                  {feature.icon}
                </span>
                <h3 className="text-xl font-semibold text-white group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-white mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSideLayout;
