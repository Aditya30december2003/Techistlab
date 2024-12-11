import { useEffect , useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { LuFileJson } from "react-icons/lu";
import { TypeAnimation } from "react-type-animation";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { databases } from "../Appwrite/appwrite";
import BufferAnimation from '../components/BufferAnimation'

const fetchHomeContent = async () => {
  try {
    const response = await databases.listDocuments(
      "67594afc0000cafabf62", // Your database ID
      "67594b2b0006d71a548d"  // Your "home" collection ID
    );
    
    console.log("Raw Appwrite Response:", response);
    console.log("Documents:", response.documents);
    console.log("Total documents:", response.documents.length);
    
    if (response.documents.length > 0) {
      console.log("First document full details:", response.documents[0]);
      console.log("taglineA value:", response.documents[0].taglineA);
    }
    
    return response.documents;
  } catch (error) {
    console.error("Detailed Appwrite Fetch Error:", {
      message: error.message,
      code: error.code,
      type: error.type
    });
    throw error;
  }
};
const Home = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  useEffect(()=>{
    const loadContent = async () => {
      try {
        const data = await fetchHomeContent();
        console.log("Fetched data in component:", data);
        
        if (data && data.length > 0) {
          console.log("Setting content:", data[0]);
          setContent(data[0]);
        } else {
          console.warn("No documents found");
          setError("No content available");
        }
      } catch (err) {
        console.error("Component fetch error:", err);
        setError(err.message);
      }
    };

    loadContent();
    Aos.init({duration:2000});
  },[])

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!content) return <BufferAnimation/>;
  return (
    <div className="px-4 pt-[10rem] md:mt-[10rem] lg:mt-[1rem]" id="home">
      <div className="flex flex-col gap-4">
      <p className="text-center text-[1.1rem] lg:text-[1.8rem] font-bold" data-aos="fade-up"
        data-aos-duration="2000" >{content.taglineA}</p>
      <div className="w-[6rem] my-10 bg-black h-[0.2rem] text-center mx-auto"></div>
      <div className="text-[2.2rem] md:text-[5rem] lg:text-[3rem] text-center w-[95%] lg:w-[60%] mx-auto font-extrabold heading" data-aos="fade-up"
        data-aos-duration="2000" >
          {content.headingA}
        </div>
      <div className="bg-gradient-to-r font-bold text-[1rem] md:text-[2.5rem] lg:text-[1.3rem] mt-4 text-center w-[100%] lg:w-[80%] mx-auto">
      <TypeAnimation
sequence={[
  content.subheadingA,
1000,
]}
wrapper="span"
speed={20}
className="text-6x1 font-bold "
repeat= {Infinity}/>
        
      </div>
      
      <form 
  onSubmit={(e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = "TechistLab Inquiry";
    const message = "I am interested in hiring your services.";
    const mailtoLink = `mailto:ask@techistlab.co.uk?subject=Contact%20from%20${encodeURIComponent(
      name
    )}&body=From:%20${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  }}
  className="mx-auto text-center w-[95%] lg:w-[45%] mt-28 lg:mt-20 flex items-center border p-2 rounded-[5rem]"
  data-aos="fade-up"
  data-aos-duration="2000"
>
  <input 
    type="email"
    id="email"
    name="email"
    required  
    placeholder="Email" 
    className="border-none outline-none p-2 bg-transparent w-[70%]"
  />
  <button  
    type="submit" 
    className="text-center mx-auto subcolor1 text-white p-3 w-[30%] rounded-[5rem] text-[1rem] font-bold"
  >
    Hire Us
  </button>
</form>

      </div>
      
      <div className="py-7 mt-20">
      <div className="mx-auto text-center font-bold text-[1.2rem] rounded-md lg:text-[1.2rem] bg-purple-200 p-2 text-gray-700/80" data-aos="fade-up"
        data-aos-duration="2000">
      <p className="w-[100%] lg:w-[70%] mx-auto" >
        {content.contentA}
        </p>
      </div>
      </div>

      <div className="mt-7 px-7 py-2">
        <h1 className="font-bold text-[1.3rem]" data-aos="fade-right"
        data-aos-duration="3000">Our Services</h1>
        <div className="text-[2rem] lg:text-[2.5rem] font-bold" data-aos="fade-right"
        data-aos-duration="2000">What We’re Offering?</div>

        <div className="grid mt-7 gap-16">

          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-16">

          <div data-aos="fade-right"
        data-aos-duration="3000" className="border-2 cursor-pointer p-6 flex flex-col gap-2 rounded-md shadow-[10px_10px_1px_1px_#D6B4FC] lg:hover:shadow-[10px_10px_1px_1px_#D6B4FC] hover:scale-105">
                <p><FaReact size={70}/></p>
                <h1 className="font-bold text-[2rem]">Custom Web Development</h1>
                <p className="text-[1.1rem] md:text-[1.8rem] lg:text-[1.1rem]">Create scalable, secure, and high-performing websites tailored to your unique needs.</p>
            </div>

            <div data-aos="fade-right"
        data-aos-duration="4000" className="border-2 cursor-pointer p-6 flex flex-col gap-2 rounded-md shadow-[10px_10px_1px_1px_#D6B4FC]  lg:hover:shadow-[10px_10px_1px_1px_#D6B4FC] hover:scale-105">
                <p><SiAndroidstudio size={70}/></p>
                <h1 className="font-bold text-[2rem]">Mobile App Development</h1>
                <p className="text-[1.1rem] md:text-[1.8rem] lg:text-[1.1rem]">Build engaging, intuitive, and future-ready applications for iOS and Android.</p>
            </div>
                
            <div className="border-2 cursor-pointer p-6 flex flex-col gap-2 rounded-md shadow-[10px_10px_1px_1px_#D6B4FC]  lg:hover:shadow-[10px_10px_1px_1px_#D6B4FC] hover:scale-105" data-aos="fade-right"
        data-aos-duration="1500">
                <p><FaFigma size={70}/></p>
                <h1 className="font-bold text-[2rem]">UI/UX Design</h1>
                <p className="text-[1.1rem] md:text-[1.8rem] lg:text-[1.1rem] mt-8">Design interfaces that captivate your audience and keep them coming back for more.</p>
            </div>
          </div>
            
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 w-[100%] lg:w-[70%] mx-auto">
            <div className="border-2 cursor-pointer p-6 flex flex-col gap-2 rounded-md shadow-[10px_10px_1px_1px_#D6B4FC]  lg:hover:shadow-[10px_10px_1px_1px_#D6B4FC] hover:scale-105" data-aos="fade-right"
        data-aos-duration="1500">
                <p><GiShoppingCart size={70}/></p>
                <h1 className="font-bold text-[2rem]">E-commerce Solutions</h1>
                <p className="text-[1.1rem] md:text-[1.8rem] lg:text-[1.1rem] mt-14">Launch or enhance your online store with seamless checkout and integrated payment systems.</p>
            </div>

            <div className="border-2 cursor-pointer p-6 flex flex-col gap-2 rounded-md shadow-[10px_10px_1px_1px_#D6B4FC]  lg:hover:shadow-[10px_10px_1px_1px_#D6B4FC] hover:scale-105" data-aos="fade-right"
        data-aos-duration="1500">
             <p><LuFileJson size={70}/></p>
             <h1 className="font-bold text-[2rem]">API & Integration Services</h1>
             <p className="text-[1.1rem] md:text-[1.8rem] lg:text-[1.1rem]">Connect with third-party tools and platforms to enhance your product’s capabilities.</p>
            </div>

          </div>

          </div>
        
      </div>
    </div>
  )
}

export default Home
