import { useState , useEffect } from "react";
import { databases } from "../Appwrite/appwrite";
import BufferAnimation from "../components/BufferAnimation";

const fetchCareerContent = async () => {
  try {
    const response = await databases.listDocuments(
      "67594afc0000cafabf62", // Your database ID
      "67594bb100303835b484"  // Your "career" collection ID
    );
    
    console.log("Raw Appwrite Response:", response);
    console.log("Documents:", response.documents);
    console.log("Total documents:", response.documents.length);
    
    if (response.documents.length > 0) {
      console.log("First document full details:", response.documents[0]);
      console.log("Job1 value:", response.documents[0].Job1);
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
const Careers = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const loadContent = async () => {
      try {
        const data = await fetchCareerContent();
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
    <div className="mt-[10rem] md:mt-[20rem] lg:mt-[10rem] mb-20">
      <h1 className="text-center font-bold text-[1.5rem] lg:text-[1.8rem] heading" data-aos="fade-up"
        data-aos-duration="2000">Careers</h1>
      <div className="w-[6rem] my-10 bg-black h-[0.2rem] text-center mx-auto" data-aos="fade-up"
        data-aos-duration="2000"></div>
      <h1 className="text-center font-bold text-[1.5rem] lg:text-[3.7rem]" data-aos="fade-up"
        data-aos-duration="2000">Discover your place at Techistlab</h1>
      <p className="text-center text-[1.2rem] w-full lg:w-[60%] mx-auto mt-10" data-aos="fade-up"
        data-aos-duration="2000">
        Are you passionate about technology and innovation? Explore career opportunities with us and help shape the future of digital solutions.
      </p>

      {/* Career Sections */}
      <div className="mt-16 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5" data-aos="fade-up"
        data-aos-duration="2000">
        {/* Job 1 */}
        <div className="border border-gray-300 shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 cursor-pointer">
          <h2 className="text-xl font-semibold">{content.Job1}</h2>
          <p className="">Location: {content.Location1}</p>
          <p className="mt-4 ">
            {content.Job1C}
          </p>
        </div>

        {/* Job 2 */}
        <div className="border border-gray-300 shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 cursor-pointer" data-aos="fade-up"
        data-aos-duration="2000">
          <h2 className="text-xl font-semibold">{content.Job2}</h2>
          <p className=" mt-2">Location: {content.Location2}</p>
          <p className="mt-4">
          {content.Job2C}
          </p>
        </div>

        {/* Job 3 */}
        <div className="border border-gray-300 shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 cursor-pointer" data-aos="fade-up"
        data-aos-duration="2000">
          <h2 className="text-xl font-semibold">{content.Job3}</h2>
          <p className=" mt-2">Location: {content.Location3}</p>
          <p className="mt-4 ">
          {content.Job3C}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;

