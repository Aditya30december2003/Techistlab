import { FaHandshake } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuHeartHandshake } from "react-icons/lu";
import { SiTicktick } from "react-icons/si";



const Team = () => {
  return (
    <div  className="mt-[10rem] md:mt-[15rem] lg:mt-[10rem]">
      <h1 className="text-center font-bold text-[1.5rem] lg:text-[1.8rem] heading" data-aos="fade-up"
        data-aos-duration="2000">Our Team</h1>
      <div className="w-[6rem] my-10 bg-black h-[0.2rem] text-center mx-auto" data-aos="fade-up"
        data-aos-duration="2000"></div>
      <h1 className="text-center font-bold mt-10 text-[2.3rem] lg:text-[3rem] w-full lg:w-[70%] mx-auto" data-aos="fade-up"
        data-aos-duration="2000">Skill, Vision, Dedication</h1>
      <p  className="text-center text-[1.2rem] w-full lg:w-[60%] mx-auto mt-10" data-aos="fade-up"
        data-aos-duration="2000">We are a diverse group of designers, developers, and strategists who share a passion for innovation. With expertise spanning multiple industries and technologies, our team collaborates to bring the best of every discipline to your project.</p>
    
      <div className="mt-24 px-10">
        <h1 className="text-center font-bold text-[2rem] heading" data-aos="fade-up"
        data-aos-duration="2000">Core Values</h1>

        <div className="mx-auto bg-purple-500 text-white p-2 w-[100%] lg:w-[70%] mt-10 rounded-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"  data-aos="fade-down"
        data-aos-duration="2000">
          <div className="flex items-center justify-between">
          <h1 className="text-[2rem] lg:text-[2.4rem] font-bold">Integrity</h1>
          <p><FaHandshake size={50}/></p>
          </div>
          <p className="text-left my-3 text-[0.9rem] lg:text-[1.1rem]">We build trust by maintaining transparency and standing by our commitments.</p>
          <img src="" alt="" />
        </div>

        <div className="mx-auto bg-purple-500 text-white p-2 w-[100%] lg:w-[70%] mt-10 rounded-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"  data-aos="fade-down"
        data-aos-duration="2000">
          <div className="flex items-center justify-between">
          <h1 className="text-[2rem] lg:text-[2.4rem] font-bold">Innovation</h1>
          <p><HiOutlineLightBulb size={50}/></p>
          </div>
          <p className="text-left my-3 text-[0.9rem] lg:text-[1.1rem]">We embrace emerging trends and technologies to continually push the boundaries of what’s possible.</p>
          <img src="" alt="" />
        </div>

        <div className="mx-auto bg-purple-500 text-white p-2 w-[100%] lg:w-[70%] mt-10 rounded-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]" data-aos="fade-down"
        data-aos-duration="2000">
          <div className="flex items-center justify-between">
          <h1 className="text-[2rem] lg:text-[2.4rem] font-bold">Partnership</h1>
          <p><LuHeartHandshake size={50}/></p>
          </div>
          <p className="text-left my-3 text-[0.9rem] lg:text-[1.1rem]">We work alongside our clients, viewing their goals as our own.</p>
          <img src="" alt="" />
        </div>

        <div className="mx-auto bg-purple-500 text-white p-2 w-[100%] lg:w-[70%] mt-10 rounded-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]" data-aos="fade-down"
        data-aos-duration="2000">
          <div className="flex items-center justify-between">
          <h1 className="text-[2rem] lg:text-[2.4rem] font-bold">Quality</h1>
          <p><SiTicktick size={50}/></p>
          </div>
          <p className="text-left my-3 text-[0.9rem] lg:text-[1.1rem]">We hold ourselves to the highest standards, ensuring our products deliver value from day one.</p>
          <img src="" alt="" />
        </div>

      </div>

    </div>
  )
}

export default Team
