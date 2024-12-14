import test1 from '../assets/test1.png'
import test2 from '../assets/test2.png'
import { databases } from "../Appwrite/appwrite";
import BufferAnimation from '../components/BufferAnimation'
import { useState , useEffect } from 'react';

const fetchPortfolioContent = async () => {
  try {
    const response = await databases.listDocuments(
      "67594afc0000cafabf62", // Your database ID
      "67594bbf001c420c6ac5"  // Your "portfolio" collection ID
    );
    
    console.log("Raw Appwrite Response:", response);
    console.log("Documents:", response.documents);
    console.log("Total documents:", response.documents.length);
    
    if (response.documents.length > 0) {
      console.log("First document full details:", response.documents[0]);
      console.log("heading value:", response.documents[0].heading);
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
const Portfolio = () => {
   const [content, setContent] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(()=>{
      const loadContent = async () => {
        try {
          const data = await fetchPortfolioContent();
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
    },[])
    if (error) {
      return <div>Error: {error}</div>;
    }
    if (!content) return <BufferAnimation/>;

  return (
    <div className="mt-[10rem] overflow-hidden md:mt-[5rem] lg:mt-[10rem]">
      <h1 className="text-center font-bold text-[1.5rem] lg:text-[1.8rem] heading" data-aos="fade-up"
        data-aos-duration="2000">Portfolio</h1>
      <div className="w-[6rem] my-10 bg-black h-[0.2rem] text-center mx-auto" data-aos="fade-up"
        data-aos-duration="2000"></div>

      <h1 className="text-center font-bold mt-10 text-[2.1rem] lg:text-[3rem] w-full lg:w-[70%] mx-auto" data-aos="fade-up"
        data-aos-duration="2000">{content.heading}</h1>

      <p className="text-center text-[1.2rem] w-full lg:w-[60%] mx-auto mt-10"  data-aos="fade-up"
        data-aos-duration="2000">{content.content}</p>
      
      <div>

      <div className='about flex flex-col lg:flex-row gap-5 p-10 mt-20 items-center w-[90%] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] duration-700 lg:hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] mx-auto'>

       <div className='w-full lg:w-[55%] '  data-aos="fade-up"
        data-aos-duration="2000">
        <img className='cursor-pointer object-cover w-full lg:w-[75%]' src={content.Proj1Img} alt="" />
       </div>
       
       <div className='w-full lg:w-[45%] flex flex-col gap-5'  data-aos="fade-down"
        data-aos-duration="2000">
        <h1 className='text-center font-bold text-[2.5rem]'>{content.Proj1H}</h1>
        <p className='text-[0.9rem] lg:text-[1.2rem] text-center'>{content.Proj1Con}</p>
        </div>

      </div>


      <div className='about flex flex-col lg:flex-row gap-5 p-10 mt-20 items-center w-[90%] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]   duration-700 lg:hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] mx-auto cursor-pointer'>
        <div className='w-full lg:w-[45%] lg:hidden' data-aos="fade-up"
        data-aos-duration="2000">
          <img className='object-cover' src="https://s3-alpha.figma.com/hub/file/4153417031/7808a72d-2fea-4257-86c6-b40c2029bd28-cover.png" alt="" />
        </div>
        <div className='w-full lg:w-[55%] flex flex-col gap-5' data-aos="fade-down"
        data-aos-duration="2000">
          <h1 className='text-center font-bold text-[2.5rem]'>{content.Proj2H}</h1>
          <p className='text-[1.2rem] text-center'>{content.Proj2Con}</p>
        </div>
        <div className='w-full lg:w-[45%] hidden lg:block' data-aos="fade-up"
        data-aos-duration="2000">
          <img className='object-cover' src={content.Proj2Img} alt="" />
        </div>
        </div>
        
        <div className='about flex flex-col lg:flex-row gap-5 p-10 mt-20 items-center w-[90%] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] duration-700 lg:hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] mx-auto cursor-pointer'>
          <div className='w-full lg:w-[55%] ' data-aos="fade-down"
        data-aos-duration="2000">
             <img className='object-cover w-full lg:w-[75%]' src={content.Proj3Img} alt="" />
          </div>
          <div className='w-full lg:w-[45%] flex flex-col gap-5' data-aos="fade-up"
        data-aos-duration="2000">
          <h1 className='text-center font-bold text-[2.5rem]'>{content.Proj3H}</h1>
          <p className='text-[1.2rem] text-center'>{content.Proj3Con}</p>
        </div>
        </div>
      </div>

      <div className='mt-32'>
        <h1 className="text-center font-bold text-[1.8rem] heading" data-aos="fade-down"
        data-aos-duration="2000">Testimonials</h1>
        <p className='text-center font-bold py-2  text-[1.2rem]' data-aos="fade-down"
        data-aos-duration="2000">{content.SubHeadingTest}</p>


      <div className='flex flex-col md:flex-row lg:flex-col md:w-[100%] gap-20 mb-20 mt-10'>
        <div className="flex flex-col lg:flex-row items-center p-2 md:w-[100%] bg-gray-200 testimonials">
          <div className='w-[30%]' data-aos="fade-right"
        data-aos-duration="2000">
          <img className="w-[20rem] lg:w-[12rem] mx-auto object-cover h-[7rem] lg:h-[12rem] rounded-[100%]" src={content.Test1Img	} alt="" />
          </div>
          <div className='w-full lg:w-[60%] flex flex-col gap-7' data-aos="fade-left"
        data-aos-duration="2000">
          
          <p className='text-[1rem] lg:text-[1.5rem] text-center lg:text-left'><super><span className='text-[2.3rem] font-bold'>66</span></super>{content.Test1C}<span className='text-[2.5rem] font-bold'>99</span></p>
          <p className='text-[1.4rem] text-center lg:text-left font-bold text-purple-400/90'>{content.Test1Name}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center p-2 md:w-[100%] bg-gray-200 testimonials">
          <div className='w-[30%]' data-aos="fade-right"
        data-aos-duration="2000">
          <img className="w-[30rem] lg:w-[12rem] mx-auto object-cover h-[7rem] lg:h-[12rem] rounded-[100%]" src={content.Tech2Img} alt="" />
          </div>
          <div className='w-full lg:w-[60%] flex flex-col gap-7' data-aos="fade-left"
        data-aos-duration="2000">
          <p className='text-[1rem] lg:text-[1.5rem] text-center lg:text-left'><super><span className='text-[2.3rem] font-bold'>66</span></super>{content.Test2C} <span className='text-[2.5rem] font-bold'>99</span></p>
          <p className='text-[1.4rem] text-center lg:text-left font-bold text-purple-400/90'>{content.Test2Name}</p>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Portfolio