import { FaHandshake } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuHeartHandshake } from "react-icons/lu";
import { SiTicktick } from "react-icons/si";
import { databases } from "../Appwrite/appwrite";
import BufferAnimation from "../components/BufferAnimation";
import { useEffect, useState } from "react";

// Fetch data from Appwrite
const fetchTeamContent = async () => {
  try {
    const response = await databases.listDocuments(
      "67594afc0000cafabf62", // Database ID
      "67594bd500345d46c798"  // Collection ID
    );
    return response.documents;
  } catch (error) {
    console.error("Error fetching team content:", error);
    throw error;
  }
};

const Team = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchTeamContent();
        if (data && data.length > 0) {
          setContent(data[0]); // Assuming only one document is required
        } else {
          setError("No content available.");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    loadContent();
  }, []);

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  if (!content) return <BufferAnimation />;

  return (
    <div className="mt-[10rem] mb-32">
      {/* Main Section */}
      <h1 className="text-center font-bold text-[1.5rem] lg:text-[1.8rem] heading" data-aos="fade-up" data-aos-duration="2000">
        {content.heading || "Our Team"}
      </h1>
      <div className="w-[6rem] my-10 bg-black h-[0.2rem] mx-auto" data-aos="fade-up" data-aos-duration="2000"></div>
      <h2 className="text-center font-bold text-[2.3rem] lg:text-[3rem] w-full lg:w-[70%] mx-auto" data-aos="fade-up" data-aos-duration="2000">
        {content.subHeading || "Skill, Vision, Dedication"}
      </h2>
      <p className="text-center text-[1.2rem] w-full lg:w-[60%] mx-auto mt-10" data-aos="fade-up" data-aos-duration="2000">
        {content.Content || "We are a diverse group of designers, developers, and strategists who share a passion for innovation."}
      </p>

      {/* Core Values */}
      <div className="mt-24 px-10">
        <h2 className="text-center font-bold text-[2rem] heading" data-aos="fade-up" data-aos-duration="2000">
          {content.subHeading2 || "Core Values"}
        </h2>

        {/* Map core values dynamically */}
        {[1, 2, 3, 4].map((index) => {
          const heading = content[`Value${index}H`];
          const description = content[`Value${index}C`];
          const IconComponent = {
            1: FaHandshake,
            2: HiOutlineLightBulb,
            3: LuHeartHandshake,
            4: SiTicktick
          }[index];

          if (!heading || !description) return null;

          return (
            <div
              key={index}
              className="mx-auto bg-purple-500 text-white p-2 w-[100%] lg:w-[70%] mt-10 rounded-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[2rem] lg:text-[2.4rem] font-bold">{heading}</h3>
                <p>{IconComponent && <IconComponent size={50} />}</p>
              </div>
              <p className="text-left my-3 text-[0.9rem] lg:text-[1.1rem]">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;

