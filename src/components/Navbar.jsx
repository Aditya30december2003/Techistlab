import { Link } from 'react-router-dom'
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [theme , setTheme] =useState(false)
  const [nav , setNav]= useState(false);
  return (
    <>
    <div>
    <div className='flex justify-between lg:justify-normal items-center px-2 py-4 mb-20 w-[100%] gap-5 border-b-2 border-black fixed bg-white top-0 left-0 z-50'>
      <div className='text-[2rem] font-bold w-[20%] px-4'>Techistlab</div>
      <div className='w-[80%] hidden lg:block'>
        <ul className='flex items-center gap-5 text-[1rem] justify-between'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/services'>Services</Link>
            <Link to='/team'>Teams</Link>
            <div className='cursor-pointer border-2 p-2 border-black rounded-[100%]' onClick={()=>setTheme(!theme)}>{theme?<GoSun/>:<FaMoon/>}</div>
        </ul>
      </div>
      <div className='block lg:hidden'><GiHamburgerMenu size={30} className='cursor-pointer'/></div>
    </div>
    
    <div className={!nav?'top-0 left-0 bg-blue-900 w-full text-white lg:hidden h-screen mt-[-250%] duration-1000 fixed z-10':'top-0 left-0 z-10 fixed w-full duration-1000 bg-blue-900 overflow-hidden text-white lg:hidden h-screen mt-[0%]'}>
    <div onClick={()=>{setNav(!nav)}} className='ml-[85%] mt-5 bg-gray-500 p-2 rounded-[100%]'><RxCross1 size={35} className='z-20 duration-300 cursor-pointer' /></div>
    <ul className='flex flex-col items-center gap-5 text-[1rem] justify-between'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/services'>Services</Link>
            <Link to='/team'>Teams</Link>
            <div className='cursor-pointer border-2 p-2 border-black rounded-[100%]' onClick={()=>setTheme(!theme)}>{theme?<GoSun/>:<FaMoon/>}</div>
      </ul>
    </div>

    </div>
    </>
  )
}

export default Navbar;


