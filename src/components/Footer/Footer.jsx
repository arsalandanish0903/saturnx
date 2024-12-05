// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { ThemeContext } from "../../contexts/ThemeContext";
// const Footer = () => {
//   const { toggleTheme, theme } = useContext(ThemeContext);
//   return (
//     <footer classNameName="bg-[#010038] dark:bg-[#F59E0D] text-white dark:text-black py-12 relative overflow-hidden">
//       {/* Animated Shapes */}
//       <div className="absolute top-0 left-0 w-40 h-40 bg-[#F59E0D] dark:bg-[#010038] rounded-full opacity-20 animate-bounce"></div>
//       <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#F59E0D] dark:bg-[#010038] rounded-full opacity-20 animate-ping"></div>

//       <div className="container mx-auto px-6 sm:px-16 flex flex-col items-center space-y-8 relative z-10">
//         {/* Logo */}
//         <div className="w-32">
//           <NavLink to="/">
//             <img
//               src={
//                 theme === "light"
//                   ? "../../public/SaturnXDigitalLogo_white.png"
//                   : "../../public/SaturnXDigitalLogo_Transparent.png"
//               }
//               className="w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
//               alt="Logo"
//             />
//           </NavLink>
//         </div>

//         {/* Navigation Links */}
//         <nav className="flex flex-wrap justify-center space-x-6 text-lg font-medium">
//           <NavLink
//             to="/"
//             className="hover:text-[#F59E0D] dark:hover:text-[#010038] transition duration-300 ease-in-out"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className="hover:text-[#F59E0D] dark:hover:text-[#010038] transition duration-300 ease-in-out"
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/service"
//             className="hover:text-[#F59E0D] dark:hover:text-[#010038] transition duration-300 ease-in-out"
//           >
//             Service
//           </NavLink>
//           <NavLink
//             to="/technology"
//             className="hover:text-[#F59E0D] dark:hover:text-[#010038] transition duration-300 ease-in-out"
//           >
//             Technology
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className="hover:text-[#F59E0D] dark:hover:text-[#010038] transition duration-300 ease-in-out"
//           >
//             Contact
//           </NavLink>
//           <NavLink
//             to="/faq"
//             className="hover:text-[#F59E0D] dark:hover:text-[#010038] transition duration-300 ease-in-out"
//           >
//             FAQ
//           </NavLink>
//           <NavLink
//             to="/blog"
//             className="hover:text-[#F59E0D] dark:hover:text-[#010038] transition duration-300 ease-in-out"
//           >
//             Blog
//           </NavLink>
//         </nav>

//         {/* Social Media Icons */}
//         <div className="flex space-x-6 text-2xl">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#F59E0D] dark:hover:text-[#010038] transition duration-300 ease-in-out"
//           >
//             <FaFacebook />
//           </a>
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#F59E0D] dark:hover:text-[#010038] transition duration-300 ease-in-out"
//           >
//             <FaTwitter />
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#F59E0D] dark:hover:text-[#010038] transition duration-300 ease-in-out"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#F59E0D] dark:hover:text-[#010038] transition duration-300 ease-in-out"
//           >
//             <FaLinkedin />
//           </a>
//         </div>

//         {/* Copyright */}
//         <div className="text-center text-sm">
//           © {new Date().getFullYear()} SaturnX Digital. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-[#010038] w-full border-t-2 sm:py-8">
      {/* <svg className="w-full h-16 -mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path className="fill-[#F59E0D]" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg> */}
      <footer className="text-white container  mx-auto px-4 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Link to="/">
                <img src="/SaturnXDigitalLogo_white.png" alt="Logo" className="w-28" />
              </Link>
            </div>
            <p className="text-gray-400 text-sm">We are an advanced digital transformation consultancy and engineering company that delivers cutting-edge solutions for global organizations and technology startups.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/technology" className="text-gray-400 hover:text-white">Technology</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Notice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" target="_blank" className="text-gray-400 hover:text-white">Support Center</a></li>
              <li><a href="#" target="_blank" className="text-gray-400 hover:text-white">Service Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Customers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Reviews</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a href="#" target="_blank" className="text-gray-400 hover:text-white">
            <span className="sr-only">LinkedIn</span>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank" className="text-gray-400 hover:text-white">
            <span className="sr-only">Twitter</span>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" className="text-gray-400 hover:text-white">
            <span className="sr-only">YouTube</span>
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" target="_blank" className="text-gray-400 hover:text-white">
            <span className="sr-only">GitHub</span>
            <i className="fab fa-github"></i>
          </a>
        </div>
        
        <div className="mt-16 text-center text-sm text-gray-400">
          <p>© SaturnX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );

}

export default Footer;