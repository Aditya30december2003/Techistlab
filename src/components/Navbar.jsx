import { Link } from "react-router-dom";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between lg:justify-normal items-center px-2 py-4 mb-20 w-[100%] gap-5 border-b-2 border-black fixed bg-white top-0 left-0 z-50">
        <div className="text-[2rem] font-bold w-[20%] px-4">Techistlab</div>
        <div className="w-[80%] hidden lg:block">
          <ul className="flex items-center gap-5 text-[1rem] justify-between">
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
        className={`fixed top-0 left-0 w-full h-screen bg-white text-black-400 transform ${
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
        <ul className="flex flex-col items-center gap-5 text-[1rem] justify-between mt-10 py-5">
          <Link to="/" onClick={() => setNav(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setNav(false)}>
            About
          </Link>
          <Link to="/blog" onClick={() => setNav(false)}>
            Blog
          </Link>
          <Link to="/careers" onClick={() => setNav(false)}>
            Careers
          </Link>
          <Link to="/contact" onClick={() => setNav(false)}>
            Contact
          </Link>
          <Link to="/portfolio" onClick={() => setNav(false)}>
            Portfolio
          </Link>
          <Link to="/services" onClick={() => setNav(false)}>
            Services
          </Link>
          <Link to="/team" onClick={() => setNav(false)}>
            Teams
          </Link>
          <div
            className="cursor-pointer border-2 p-2 border-white rounded-[100%]"
            onClick={() => setTheme(!theme)}
          >
            {theme ? <GoSun /> : <FaMoon />}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


