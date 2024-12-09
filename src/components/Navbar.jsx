import { Link } from "react-router-dom";
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


const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <div className="">
      {/* Navbar */}
      <div className="flex justify-between lg:justify-normal bg-white items-center px-2 py-4 mb-20 w-[100%] gap-5 fixed top-0 left-0 z-50 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
        <div className="text-[2rem] font-bold w-[20%] px-4">Techistlab</div>
        <div className="w-[80%] hidden lg:block ">
          <ul className="flex items-center gap-5 text-[1rem] justify-between ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/services">Services</Link>
            <Link to="/team">Teams</Link>
            <div
              className="cursor-pointer border-2 p-2 border-black rounded-[100%]"
              onClick={() => setTheme(!theme)}
            >
              {theme ? <GoSun /> : <FaMoon />}
            </div>
          </ul>
        </div>
        {/* Hamburger Icon */}
        <div
          className="block lg:hidden"
          onClick={() => setNav(!nav)}
        >
          {!nav?<GiHamburgerMenu size={30} className="cursor-pointer" />:<RxCross1 size={30} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 text-black-400 transform ${
          nav ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 z-10 lg:hidden`}
      >
        {/* Close Icon */}
        <div
          onClick={() => setNav(false)}
          className="ml-[85%] mt-5 bg-gray-500 p-2 rounded-[100%] cursor-pointer"
        >
         
        </div>
        {/* Mobile Menu Links */}
        <ul className="grid grid-cols-2 mx-auto w-[70%]  items-center gap-10 text-[1rem] justify-between mt-10 py-5 my-auto">
          <Link className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2" to="/" onClick={() => setNav(false)}>
            <CiHome size={25}/>
            <p>Home</p>
          </Link>
          <Link className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2" to="/about" onClick={() => setNav(false)}>
            <MdRoundaboutLeft size={25}/>
            <p>About</p>
          </Link>
          <Link className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2" to="/blog" onClick={() => setNav(false)}>
            <RiBloggerLine size={25}/>
            <p>Blog</p>
          </Link>
          <Link className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2" to="/careers" onClick={() => setNav(false)}>
          <HiMiniArrowTrendingUp size={25}/>
          <p>Careers</p>
          </Link>
          <Link className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2" to="/contact" onClick={() => setNav(false)}>
            <CiVoicemail size={25}/>
            <p>Contact</p>
          </Link>
          <Link className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2" to="/portfolio" onClick={() => setNav(false)}>
            <GrProjects/>
            <p>Portfolio</p>
          </Link>
          <Link className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2" to="/services" onClick={() => setNav(false)}>
            <MdOutlineMiscellaneousServices size={25}/>
            <p>Services</p>
          </Link>
          <Link className="flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2" to="/team" onClick={() => setNav(false)}>
           <RiTeamLine size={25}/>
           <p>Teams</p>
          </Link>
        </ul>
        <div
            className="cursor-pointer py-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-center mx-auto p-4 w-24 h-24 rounded-[10rem] gap-2"
            onClick={() => setTheme(!theme)}
          >
            {theme ? <GoSun /> : <FaMoon />}
          </div>
      </div>
    </div>
  );
};

export default Navbar;


