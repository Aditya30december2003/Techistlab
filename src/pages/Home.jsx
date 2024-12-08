import { FaReact } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { LuFileJson } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  return (
    <div className="px-4 pt-[5rem]">
      <div className="flex flex-col gap-4">
      <p className="mt-10 text-center text-[1.1rem]">Techistlab</p>
      <div className="text-[2.2rem] lg:text-[3.2rem] font-bold text-center w-[95%] lg:w-[60%] mx-auto">Building <span className="bg-gradient-to-r from-teal-300 to-violet-500 bg-clip-text text-transparent">Digital Experiences</span> That Drive <span  className="bg-gradient-to-r from-teal-300 to-violet-500 bg-clip-text text-transparent">Success</span></div>
      <div className="bg-gradient-to-r from-teal-300 to-violet-500 bg-clip-text text-transparent font-bold text-[1rem] lg:text-[1.3rem] mt-4 text-center w-[100%] lg:w-[70%] mx-auto">We craft custom web and mobile applications that help you connect with your audience, streamline operations, and scale with confidence.</div>
      
      <div className="mx-auto text-center w-[95%] lg:w-[25%] mt-6 p-2 rounded-xl border-2 border-black flex items-center">
        <button className="text-center mx-auto">Join Now</button>
        <MdArrowOutward className=""/>
      </div>
      </div>
      
      <div className="bg-gradient-to-r from-teal-300 to-violet-500 text-white py-7 mt-20">
      <div className="mx-auto text-center font-bold text-[0.8rem] lg:text-[1.1rem]"><p className="w-[100%] lg:w-[70%] mx-auto">At Techistlab, we blend strategic thinking, meticulous design, and cutting-edge technology to develop solutions that empower businesses of all sizes. From user-friendly mobile apps to robust web platforms, our team delivers products that not only look great but perform flawlessly. Let us help you transform your vision into a digital reality.</p></div>
      </div>

      <div className="mt-7 px-7 py-2">
        <h1 className="font-bold text-[1.3rem]">Our Services</h1>
        <div className="text-[2rem] lg:text-[2.5rem] font-bold">What We’re Offering?</div>

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

export default Home
