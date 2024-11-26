import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../contexts/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleTheme, theme } = useContext(ThemeContext);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            // Check if the page is scrolled more than 50 pixels
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // 1A120B
    return (
        <header
            className={`w-full text-white transition-all sm:px-16 px-6 py-1.5 duration-300 ease-in-out fixed top-0 z-50 ${isScrolled
                    ? "bg-[#010038] dark:bg-white dark:text-black"
                    : "bg-transparent dark:bg-transparent"
                }`}
        >
            <div className="container mx-auto  flex justify-between items-center">
                {/* Logo */}
                <div className="sm:text-4xl text-xl font-bold w-28">
                    <NavLink to="/" onClick={() => setIsOpen(false)}>
                        <img
                            src={
                                theme === "light"
                                    ? "../../public/SaturnXDigitalLogo_white.png"
                                    : "../../public/SaturnXDigitalLogo_Transparent.png"
                            }
                            className="w-full object-cover  transition-all duration-300 ease-in-out transform hover:scale-105"
                            alt="Logo"
                        />
                    </NavLink>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `py-1 px-8 text-xl font-semibold transition-all duration-300 ease-in-out ${isActive
                                ? "bg-[#F59E0D] dark:text-white shadow-lg rounded-md"
                                : "hover:bg-[#F59E0D]  dark::bg-[#F59E0D] hover:rounded-md dark:hover:text-white"
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `py-1 px-8 text-xl font-semibold transition-all duration-300 ease-in-out ${isActive
                                ? "bg-[#F59E0D] text-white shadow-lg rounded-md"
                                : "  hover:bg-[#F59E0D] hover:rounded-md dark:hover:text-white"
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/service"
                        className={({ isActive }) =>
                            `py-1 px-8 text-xl font-semibold transition-all duration-300 ease-in-out ${isActive
                                ? "bg-[#F59E0D] text-white shadow-lg rounded-md"
                                : "hover:bg-[#F59E0D] hover:rounded-md dark:hover:text-white"
                            }`
                        }
                    >
                        Service
                    </NavLink>
                    <NavLink
                        to="/technology"
                        className={({ isActive }) =>
                            `py-1 px-8 text-xl font-semibold transition-all duration-300 ease-in-out ${isActive
                                ? "bg-[#F59E0D] text-white shadow-lg rounded-md"
                                : "hover:bg-[#F59E0D] hover:rounded-md dark:hover:text-white"
                            }`
                        }
                    >
                        Technology
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `py-1 px-8 text-xl font-semibold transition-all duration-300 ease-in-out ${isActive
                                ? "bg-[#F59E0D] text-white shadow-lg rounded-md"
                                : "hover:bg-[#F59E0D]   hover:rounded-md dark:hover:text-white"
                            }`
                        }
                    >
                        Contact
                    </NavLink>
                </nav>


                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="sm:ml-4 sm:p-2 p-2 rounded-md bg-[#F59E0D] text-white dark:[#F59E0D] dark:text-black transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none shadow-none"
                >
                    {theme === "light" ? <CiLight /> : <MdDarkMode />}
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden sm:text-2xl bg-transparent border-none text-lg transition-all duration-300 ease-in-out hover:scale-110 text-white dark:text-white z-50"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black text-white fixed top-0 left-0 w-full h-full z-40 flex justify-center items-center transition-all duration-300 ease-in-out">
                    <nav className="flex flex-col items-center space-y-6">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `py-1 px-8 text-xl font-semibold transition-all duration-300 ease-in-out ${isActive
                                    ? "bg-black text-white shadow-lg rounded-md"
                                    : "hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `py-1 px-8 text-xl font-semibold transition-all duration-300 ease-in-out ${isActive
                                    ? "bg-black text-white shadow-lg rounded-md"
                                    : "hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/service"
                            className={({ isActive }) =>
                                `py-1 px-8 text-xl font-semibold transition-all duration-300 ease-in-out ${isActive
                                    ? "bg-black text-white shadow-lg rounded-md"
                                    : "hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
                                }`
                            }
                        >
                            Service
                        </NavLink>
                        <NavLink
                        to="/service"
                        className={({ isActive }) =>
                            `py-1 px-8 text-xl font-semibold transition-all duration-300 ease-in-out ${isActive
                                ? "bg-[#F59E0D] text-white shadow-lg rounded-md"
                                : "hover:bg-[#F59E0D] hover:rounded-md dark:hover:text-white"
                            }`
                        }
                    >
                        Technology
                    </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `py-1 px-8 text-xl font-semibold transition-all duration-300 ease-in-out ${isActive
                                    ? "bg-black text-white shadow-lg rounded-md"
                                    : "hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </nav>

                </div>
            )}
        </header>
    );
};

export default Header;
