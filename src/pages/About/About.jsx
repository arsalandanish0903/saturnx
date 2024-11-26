import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="about-container dark:bg-white bg-[#010038] sm:p-16 px-6 sm:py-8 py-8">
      <div className='container mx-auto'>
      <div className="text-center">
        <h1
          className="about-heading dark:text-black"
          data-aos="fade-up"
        >
          About
        </h1>
        <p
          className="about-text dark:text-black text-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We are a <span className="highlight">creative agency</span> providing outstanding tools for your company's development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="about-image-container" data-aos="fade-left">
          <img
            src="../../public/about.png"
            alt="About"
            className="about-image"
          />
          <span className="about-circles"></span>
          <span className="about-circles"></span>
          <span className="about-circles"></span>
          <span className="about-circles"></span>
          <span className="about-circles"></span>
          <span className="about-circles"></span>
        </div>

        {/* Text Section */}
        <div data-aos="fade-right">
          <h3 className="sm:text-3xl text-xl font-bold mb-4 dark:text-black">
            SATURNX Digital Solutions
          </h3>
          <p className="text-md sm:text-lg text-white text-left dark:text-black">
            We are an advanced <span className="highlight">digital transformation consultancy</span> and engineering company that delivers cutting-edge solutions for global organizations and technology startups. 
            <br /><br />
            Since <span className="highlight">2014</span>, we have been helping organizations and established brands reimagine their businesses through <span className="highlight">digitalization</span>.
          </p>
        </div>
      </div>  
      </div>     
    </div>
  );
}

export default About;
