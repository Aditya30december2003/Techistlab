import { FaReact } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { LuFileJson } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";

const Services = () => {
  return (
    <div className="mt-[10rem]">
      <h1 className="text-center font-bold text-[1.5rem] lg:text-[1.8rem] heading">Services</h1>
      <div className="w-[6rem] my-10 bg-black h-[0.2rem] text-center mx-auto"></div>
      <h1 className="text-center font-bold mt-10 text-[2.3rem] lg:text-[3rem] w-full lg:w-[70%] mx-auto">Comprehensive Digital Solutions to Empower Your Business Growth</h1>

      <div className="p-10">

      <div className="grid mt-7 gap-16">

<div className="flex flex-col lg:grid lg:grid-cols-3 gap-16">

<div className="border-2 cursor-pointer p-6 flex flex-col gap-2 rounded-md hover:shadow-[10px_10px_1px_1px_#1a202c] hover:scale-105">
      <p><FaReact size={70}/></p>
      <h1 className="font-bold text-[2rem]">Custom Web Development</h1>
      <p className="text-[1.1rem]">Create scalable, secure, and high-performing websites tailored to your unique needs.</p>
  </div>

  <div className="border-2 cursor-pointer p-6 flex flex-col gap-2 rounded-md hover:shadow-[10px_10px_1px_1px_#1a202c] hover:scale-105">
      <p><SiAndroidstudio size={70}/></p>
      <h1 className="font-bold text-[2rem]">Mobile App Development</h1>
      <p className="text-[1.1rem]">Build engaging, intuitive, and future-ready applications for iOS and Android.</p>
  </div>
      
  <div className="border-2 cursor-pointer p-6 flex flex-col gap-2 rounded-md hover:shadow-[10px_10px_1px_1px_#1a202c] hover:scale-105">
      <p><FaFigma size={70}/></p>
      <h1 className="font-bold text-[2rem]">UI/UX Design</h1>
      <p className="text-[1.1rem] mt-8">Design interfaces that captivate your audience and keep them coming back for more.</p>
  </div>
</div>
  
<div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 w-[100%] lg:w-[70%] mx-auto">
  <div className="border-2 cursor-pointer p-6 flex flex-col gap-2 rounded-md hover:shadow-[10px_10px_1px_1px_#1a202c] hover:scale-105">
      <p><GiShoppingCart size={70}/></p>
      <h1 className="font-bold text-[2rem]">E-commerce Solutions</h1>
      <p className="text-[1.1rem] mt-14">Launch or enhance your online store with seamless checkout and integrated payment systems.</p>
  </div>

  <div className="border-2 cursor-pointer p-6 flex flex-col gap-2 rounded-md hover:shadow-[10px_10px_1px_1px_#1a202c] hover:scale-105">
   <p><LuFileJson size={70}/></p>
   <h1 className="font-bold text-[2rem]">API & Integration Services</h1>
   <p className="text-[1.1rem]">Connect with third-party tools and platforms to enhance your product’s capabilities.</p>
  </div>

</div>

</div>

      </div>
    </div>
  )
}

export default Services
