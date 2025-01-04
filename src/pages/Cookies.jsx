import { useEffect, useState } from "react";
import Image from "../assets/terms_bg.jpg";
import { FaHome } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import CookieContent from "../components/CookieContent";
import CookieVersions from "../components/CookieVersions";
import CookiesPdf from "../components/CookiesPdf";
import { databases } from "../Appwrite/appwrite";

const LegalPolicy = () => {
  const [termsData, setTermsData] = useState([]);
  const databaseId = "67594afc0000cafabf62";
  const collectionId = "67790d81001949c58f56";

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await databases.listDocuments(databaseId, collectionId);
        console.log("API Response:", response); // Debug the response structure
        setTermsData(response.documents);
      } catch (error) {
        console.error("Error fetching terms:", error);
      }
    };

    fetchTerms();
  }, []);

  return (
    <div className="relative mt-[5rem] md:mt-[10rem] lg:mt-[0rem]">
      <div>
        <div
          className="font-extrabold absolute mt-10 lg:mt-28 z-100 w-full p-10 flex flex-col items-center"
        >
          <h1 className="text-center text-[0.3rem] lg:text-3xl heading text-purple-500">
            {termsData.length > 0 ? termsData[0].Title : "Loading..."}
          </h1>
          <div className="text-black">
            <div className="flex items-center gap-3 w-[13%] mt-3 p-1 justify-between">
              <div>
                <FaHome />
              </div>
              <Link to="/" className="font-thin">
                Home
              </Link>
              <div>
                <SlArrowRight />
              </div>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-full h-[20rem] lg:h-[24rem] object-cover"
            src={Image}
            alt="Terms Background"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[2vh]">
        <div className="max-w-[1200px] mx-auto mt-4 w-full">
          <CookieContent />
        </div>

        <div>
          <CookieVersions />
        </div>

        <div>
          <CookiesPdf />
        </div>
      </div>
    </div>
  );
};

export default LegalPolicy;
