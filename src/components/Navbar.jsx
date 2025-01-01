import { useEffect} from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { CiHome } from "react-icons/ci";
import { MdRoundaboutLeft } from "react-icons/md";
import { RiBloggerLine } from "react-icons/ri";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { CiVoicemail } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import logo from '../assets/logo.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTheme } from "../Context/ThemeContext";

const Navbar = () => {
  const location = useLocation()
  const {theme, toggleTheme} = useTheme();
  const [icon , setIcon] = useState(true)
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const location = useLocation();
  const toggleMode = () => {
    setIcon(!icon)
    toggleTheme();
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      
      Aos.init({duration:2000});
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Active link styling
  const activeNavLinkStyle = ({ isActive }) => ({
    color: isActive ? '#9333ea' : 'inherit', // Purple color when active
    fontWeight: isActive ? 'bold' : 'normal',
    // textDecoration: 'underline',
    // textUnderlineOffset: '4px',
    // textDecorationColor: isActive ? '#9333ea' : 'transparent'
  });

  const activeMobileNavLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? 'rgba(192, 132, 252, 0.6)' : 'transparent',
    color: isActive ? 'white' : 'inherit'
  });

  const isTermsPage = location.pathname === "/terms";

  return ( 
    <div className="navbar">
      {/* Navbar */}
      <div
       className={`flex justify-between lg:gap-10 items-center px-2 py-4 w-[100%] fixed top-0 left-0 z-50 transition-shadow duration-300 ${
        !isTermsPage && isScrolled ? "shadow-md navbg" : "navbg"
      } ${isTermsPage ? "sticky" : ""}`} 
      >
        <div className="text-[2rem] font-bold w-[50%] lg:w-[15%] px-4 flex items-center flex-col">
          <img  className="w-[45rem] lg:w-[25rem]" src={logo} alt="Logo" data-aos="fade-up" data-aos-duration="2000"/>
          <p className="text-[0.5rem]">Services to Propel Your Vision</p>
        </div>
        <div className="w-[60%] lg:w-[60%]  hidden lg:block ">
          <ul className="flex  w-[100%]  mx-auto items-center gap-7 text-[1rem] md:text-[0.8rem] lg:text-[1.1rem] justify-between" data-aos="fade-up" data-aos-duration="2000">
            <NavLink 
              to="/" 
              style={activeNavLinkStyle}
              className="underline-animation hover:text-purple-400"
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              style={activeNavLinkStyle}
              className="underline-animation hover:text-purple-400" 
            >
              About
            </NavLink>
            <NavLink 
              to="/blog" 
              style={activeNavLinkStyle}
              className="underline-animation hover:text-purple-400" 
            >
              Blog
            </NavLink>
            <NavLink 
              to="/careers" 
              style={activeNavLinkStyle}
              className="underline-animation hover:text-purple-400" 
            >
              Careers
            </NavLink>
            <NavLink 
              to="/contact" 
              style={activeNavLinkStyle}
              className="underline-animation hover:text-purple-400" 
            >
              Contact
            </NavLink>
            <NavLink 
              to="/portfolio" 
              style={activeNavLinkStyle}
              className="underline-animation hover:text-purple-400" 
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/services" 
              style={activeNavLinkStyle}
              className="underline-animation hover:text-purple-400" 
            >
              Services
            </NavLink>
            <NavLink 
              to="/team" 
              style={activeNavLinkStyle}
              className="underline-animation hover:text-purple-400" 
            >
              Teams
            </NavLink>
          </ul>
        </div>
        <div
              onClick={toggleMode}
              className="cursor-pointer border-2 hidden lg:block   p-4 rounded-[100%]" data-aos="fade-up" data-aos-duration="2000"
            >
              {icon ? <GoSun size={25}/> : <FaMoon size={25}/>}
            </div>
        {/* Hamburger Icon */}
       
        <div className="block lg:hidden" onClick={() => setNav(!nav)}>
          {!nav ? (
            <GiHamburgerMenu size={30} className="cursor-pointer" />
          ) : (
            <RxCross1 size={30} />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed z-100 top-0 left-0 w-full h-screen bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  text-black-400 transform ${
          nav ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 z-10 lg:hidden`}
      >
        {/* Close Icon */}
        <div
          onClick={() => setNav(false)}
          className="ml-[85%] mt-2 bg-gray-500 p-2 rounded-[100%] cursor-pointer"
        ></div>

        {/* Mobile Menu Links */}
        <ul className="grid mt-20 md:mt-52 grid-cols-2 mx-auto w-[70%] items-center gap-10 text-[1rem] justify-between py-5 my-auto">
          <NavLink
            className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2"
            style={activeMobileNavLinkStyle}
            to="/"
            onClick={() => setNav(false)}
          >
            <CiHome size={25} />
            <p>Home</p>
          </NavLink>
          <NavLink
            className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2"
            style={activeMobileNavLinkStyle}
            to="/about"
            onClick={() => setNav(false)}
          >
            <MdRoundaboutLeft size={25} />
            <p>About</p>
          </NavLink>
          <NavLink
            className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2"
            style={activeMobileNavLinkStyle}
            to="/blog"
            onClick={() => setNav(false)}
          >
            <RiBloggerLine size={25} />
            <p>Blog</p>
          </NavLink>
          <NavLink
            className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2"
            style={activeMobileNavLinkStyle}
            to="/careers"
            onClick={() => setNav(false)}
          >
            <HiMiniArrowTrendingUp size={25} />
            <p>Careers</p>
          </NavLink>
          <NavLink
            className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2"
            style={activeMobileNavLinkStyle}
            to="/contact"
            onClick={() => setNav(false)}
          >
            <CiVoicemail size={25} />
            <p>Contact</p>
          </NavLink>
          <NavLink
            className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2"
            style={activeMobileNavLinkStyle}
            to="/portfolio"
            onClick={() => setNav(false)}
          >
            <GrProjects />
            <p>Portfolio</p>
          </NavLink>
          <NavLink
            className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2"
            style={activeMobileNavLinkStyle}
            to="/services"
            onClick={() => setNav(false)}
          >
            <MdOutlineMiscellaneousServices size={25} />
            <p>Services</p>
          </NavLink>
          <NavLink
            className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2"
            style={activeMobileNavLinkStyle}
            to="/team"
            onClick={() => setNav(false)}
          >
            <RiTeamLine size={25} />
            <p>Teams</p>
          </NavLink>
        </ul>
        <div
          className="cursor-pointer py-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-center mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2"
          onClick={toggleMode}
        >
          {!icon ? <GoSun /> : <FaMoon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

