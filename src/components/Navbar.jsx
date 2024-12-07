import { Link } from 'react-router-dom'
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { useState } from 'react';
const Navbar = () => {
  const [theme , setTheme] =useState(false)
  const [nav , setNav]= useState(false);
  return (
    <div className='flex items-center py-2 px-4 justify-between'>
      <div className='text-[1.8rem] font-bold'>Techistlab</div>
      <div>
        <ul className='flex items-center gap-5'>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/services'>Services</Link>
            <Link to='/teams'>Teams</Link>
            <div className='cursor-pointer border-2 p-2 border-black rounded-[100%]' onClick={()=>setTheme(!theme)}>{theme?<GoSun/>:<FaMoon/>}</div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
