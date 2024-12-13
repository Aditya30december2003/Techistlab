import { useState , useEffect } from "react";
import { databases } from "../Appwrite/appwrite";
import BufferAnimation from "../components/BufferAnimation";
import { Link } from "react-router-dom";
const fetchBlogContent = async () => {
  try {
    const response = await databases.listDocuments(
      "67594afc0000cafabf62", // Your database ID
      "67594bad000dbcdca512"  // Your "blog" collection ID
    );
    
    console.log("Raw Appwrite Response:", response);
    console.log("Documents:", response.documents);
    console.log("Total documents:", response.documents.length);
    
    if (response.documents.length > 0) {
      console.log("First document full details:", response.documents[0]);
      console.log("BlogH1 value:", response.documents[0].BlogH1);
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
const Blog = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const loadContent = async () => {
      try {
        const data = await fetchBlogContent();
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
    <div className=" mb-[10rem]">
      <div className="h-[30rem]">

        <div className="text-white top-0 left-0 bg-black/80 absolute mt-32  z-100 w-[100%] p-10" data-aos="fade-up"
        data-aos-duration="2000">
        <h1 className="text-center text-2xl lg:text-4xl heading" >Insight</h1>
        <p className="text-center text-[1.1rem] lg:text-[1.6rem] mt-10">{content.heading}</p>
        <p className="text-center text-[1rem] lg:text-[1.3rem] mt-10">{content.subHeading}</p>
        </div>


        <div className="z-[-1]">
          <img className="object-cover w-[90rem] h-[30rem]" src={content.bgImage} alt="" />
        </div>
      </div>

      <div className="mt-20">
        <h1 className="heading" data-aos="fade-up"
        data-aos-duration="2000">Recent Posts</h1>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20 p-5 text-white mt-20">
          <Link to='/blog/1' data-aos="fade-up"
        data-aos-duration="2000" className=" cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700">
            
            <Link to='/blog/1' className="absolute h-[20rem]">
              <h1 className="text-xl text-center font-bold mt-20 p-10 mx-auto bg-purple-300 w-[80%] rounded-md">{content.BlogH1}</h1>
            </Link>
            <div><img className="h-[20rem] w-full object-cover rounded-md" src={content.Blog1Img} alt="" /></div>
          </Link>

          
          <Link to='/blog/1' data-aos="fade-up"
        data-aos-duration="2000" className="cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700">
            <div to='/blog/1' className="absolute">
              <h1 className="text-xl text-center font-bold mt-20 p-10 mx-auto bg-purple-300 w-[80%] rounded-md">{content.BlogH2}</h1>
            </div>
            <div><img className="h-[20rem] w-full object-cover rounded-md" src={content.Blog2Img} alt="" /></div>
          </Link>

          <Link to='/blog/1' data-aos="fade-up"
        data-aos-duration="2000" className="cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700">
            <div className="absolute">
              <h1 className="text-xl text-center font-bold mt-20 p-7 mx-auto bg-purple-300 w-[60%] rounded-md">{content.BlogH3}</h1>
            </div>
            <div><img className="h-[20rem] w-full object-cover rounded-md" src={content.Blog3Img} alt="" /></div>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Blog
