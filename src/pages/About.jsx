import { useState , useEffect } from "react";
import { databases } from "../Appwrite/appwrite";
import BufferAnimation from "../components/BufferAnimation";

const fetchAboutContent = async () => {
  try {
    const response = await databases.listDocuments(
      "67594afc0000cafabf62", // Your database ID
      "67594b3c0027c8dde47a"  // Your "about" collection ID
    );
    
    console.log("Raw Appwrite Response:", response);
    console.log("Documents:", response.documents);
    console.log("Total documents:", response.documents.length);
    
    if (response.documents.length > 0) {
      console.log("First document full details:", response.documents[0]);
      console.log("DiscoveryContent value:", response.documents[0].DiscoveryContent);
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
const About = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const loadContent = async () => {
      try {
        const data = await fetchAboutContent();
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
    <div className="text-center py-[10rem] md:mt-[5rem] lg:mt-[1rem] overflow-hidden" id="about">
      <h1 className="text-[1.5rem] lg:text-[1.8rem] font-bold heading" data-aos="fade-up"
        data-aos-duration="1500">About Us</h1>
      <div className="w-[6rem] my-10 bg-black h-[0.2rem] text-center mx-auto" data-aos="fade-up"
        data-aos-duration="2000"></div>
      <div className="mt-10">
        <h1 className="text-[3.4rem] font-bold" data-aos="fade-up"
        data-aos-duration="1500">Our Mission</h1>
        <p className=" mb-[3rem] w-[80%] mx-auto" data-aos="fade-up"
        data-aos-duration="1500">We believe that technology should simplify life, not complicate it. Our mission is to help businesses harness the power of digital solutions to improve efficiency, reach new audiences, and deliver exceptional customer experiences.</p>
      </div>

      <div data-aos="fade-down"
        data-aos-duration="3000"><img className="lg:py-15 lg:px-20 p-4 w-[100rem] rounded-md" src="https://images.ctfassets.net/kftzwdyauwt9/32cmTSUIF5POX5FMuoHJwO/be8b42b8016957ca28e07274f05f1d3d/stangel-2022-0527.webp?w=1920&q=90&fm=webp" alt="" /></div>

      <div className="py-[3.7rem] px-[2rem]">
        <h1 className="font-bold text-[2.4rem]" data-aos="fade-down"
        data-aos-duration="1500">Our Approach</h1>
        
        <div data-aos="fade-down"
        data-aos-duration="2000" className="about flex flex-col lg:flex-row justify-between  items-center mt-[3rem] mx-auto shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-[1.3rem] w-full lg:w-[90%]">
          <div className="text-left p-10 flex w-full lg:w-[40%] flex-col gap-5">
          <h1 className="text-[2.2rem] font-bold">Discovery</h1>
          <p>{content.DiscoveryContent}</p>
          </div>
          <div className="w-full lg:w-[50%]">
            <img className="rounded-b-[1.3rem] lg:rounded-r-[1.3rem] lg:rounded-bl-[0rem] w-[40rem] h-[12rem] lg:h-[20rem]" src={content.DiscoveryImage} alt="" />
          </div>
        </div>

        <div  data-aos="fade-down"
        data-aos-duration="2000"><img className="lg:py-15 lg:px-20 p-4 mt-24 w-[100rem]" src="https://images.ctfassets.net/kftzwdyauwt9/7fnM7WwfGlji0mE0t8DefO/cc161016b8d84fd6d789b06c92416544/stangel-openAI-offices-2022-1714.webp?w=1920&q=90&fm=webp" alt="" /></div>

        <div data-aos="fade-down"
        data-aos-duration="2000" className="about flex flex-col lg:flex-row justify-between items-center mt-[3rem] mx-auto shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-[1.3rem] w-full lg:w-[90%]">
          <div className="text-left p-10 flex w-full lg:w-[40%] flex-col gap-5">
          <h1 className="text-[2.2rem] font-bold">Design</h1>
          <p>{content.DesignContent}</p>
          </div>
          <div className="w-full lg:w-[50%]">
            <img className="rounded-b-[1.3rem] lg:rounded-r-[1.3rem] lg:rounded-bl-[0rem] w-[40rem] h-[12rem] lg:h-[20rem]" src={content.DesignImage} alt="" />
          </div>
        </div>

        <div data-aos="fade-down"
        data-aos-duration="2000"><img className="lg:py-15 lg:px-20 p-4 mt-24 w-[100rem]" src="https://images.ctfassets.net/kftzwdyauwt9/2ROfAZ7SlUiikj2Hp98LS0/7e71fd438017ce9cebe46fdce580bb04/stangel-2022-1534.webp?w=1920&q=90&fm=webp" alt="" /></div>

        <div data-aos="fade-down"
        data-aos-duration="2000" className="about flex flex-col lg:flex-row justify-between items-center mt-[3rem] mx-auto shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-[1.3rem] w-full lg:w-[90%]">
          <div  className="text-left p-10 flex  w-full lg:w-[40%] flex-col gap-5">
          <h1 className="text-[2.2rem] font-bold">Development</h1>
          <p>{content.DevelopmentContent}</p>
          </div>
          <div className="w-full lg:w-[50%]">
            <img className="rounded-b-[1.3rem] lg:rounded-r-[1.3rem] lg:rounded-bl-[0rem] w-[40rem] h-[12rem] lg:h-[20rem]" src={content.DevelopmentImage} alt="" />
          </div>
        </div>
  
        <div data-aos="fade-down"
        data-aos-duration="2000"><img className="lg:py-15 lg:px-20 p-4 mt-24 w-[100rem]" src="https://images.pexels.com/photos/7652180/pexels-photo-7652180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>


        <div data-aos="fade-down"
        data-aos-duration="2000" className="about flex flex-col lg:flex-row justify-between items-center mt-[3rem] mx-auto shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-[1.3rem] w-full lg:w-[90%]">
          <div className="text-left p-10 flex flex-col gap-5 w-full lg:w-[40%]">
          <h1  className="text-[2.2rem] font-bold">Testing & Launch</h1>
          <p>{content.TestingContent}</p>
          </div>
          <div className="w-full lg:w-[50%]">
            <img className="rounded-b-[1.3rem] lg:rounded-r-[1.3rem] lg:rounded-bl-[0rem] w-[40rem] h-[12rem] lg:h-[20rem]" src={content.TestingImage} alt="" />
          </div>
        </div>

        <div data-aos="fade-down"
        data-aos-duration="2000"><img className="lg:py-15 lg:px-20 p-4 mt-24 w-[100rem]" src="https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>

        <div data-aos="fade-down"
        data-aos-duration="2000" className="about flex flex-col lg:flex-row justify-between items-center mt-[3rem]  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-[1.3rem] w-full lg:w-[90%] mx-auto">
          <div className="text-left p-10 flex flex-col gap-5 w-[100%] lg:w-[40%]">
          <h1 className="text-[2.2rem] font-bold">Continuous Improvement</h1>
          <p>{content.ImprovementContent}</p>
          </div>
          <div className="w-[100%] lg:w-[50%]">
            <img className="rounded-b-[1.3rem] lg:rounded-r-[1.3rem] lg:rounded-bl-[0rem] w-[40rem] h-[12rem] lg:h-[20rem]" src={content.ImprovementImage} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
