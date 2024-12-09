import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full mt-20 bottom-0 bg-gray-300 text-black p-20 '>
    <div className="flex flex-col lg:flex-row gap-10">
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-[1.1rem]'>Techistlab</h1>
        <Link className='text-[0.95rem] font-light'>About</Link>
        <Link className='text-[0.95rem] font-light'>Blog</Link>
        <Link className='text-[0.95rem] font-light'>Careers</Link>
        <Link className='text-[0.95rem] font-light'>Contact</Link>
        <Link className='text-[0.95rem] font-light'>Portfolio</Link>
        <Link className='text-[0.95rem] font-light'>Services</Link>
        <Link className='text-[0.95rem] font-light'>Teams</Link>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-[1.1rem]'>Careers</h1>
        <Link  className='text-[0.95rem] font-light'>Job Search</Link>
        <Link></Link>
      </div>
    </div>
    <div className='w-[80%] mt-10 bg-black h-[0.03rem]'></div>
    <div className='flex flex-col lg:flex-row items-center gap-7 text-[0.85rem] mt-5 justify-between'>
      <div className='flex items-center gap-3'>
      <p>© 2024 Techistlab</p>
      <p>.</p>
      <p>Privacy</p>
      <p>.</p>
      <p>Terms</p>
      </div>
      <div className='flex flex-row  items-center gap-3'>
        <p><FaGlobe size={20}/></p>
        <p><FaFacebookSquare size={20}/></p>
        <p><FaSquareXTwitter size={20}/></p>
        <p><FaInstagramSquare size={20}/></p>
      </div>
    </div>
    </div>
  );
};

export default Footer;

