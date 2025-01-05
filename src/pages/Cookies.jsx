import { useEffect, useState } from "react";
import Image from "../assets/terms_bg.jpg";
import { FaHome } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import CookieContent from "../components/CookieContent";
import CookieVersions from "../components/CookieVersions";
import CookiesPdf from "../components/CookiesPdf";
import { databases } from "../Appwrite/appwrite";

// Skeleton component for loading
const Skeleton = () => (
  <div className="skeleton w-full h-10 bg-gray-200 animate-pulse mb-4"></div>
);

const LegalPolicy = () => {
  const [termsData, setTermsData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state to show skeleton
  const databaseId = "67594afc0000cafabf62";
  const collectionId = "67797e54002b7f10d927";

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await databases.listDocuments(databaseId, collectionId);
        console.log("API Response:", response); // Debug the response structure
        setTermsData(response.documents);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching terms:", error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchTerms();
  }, []);

  return (
    <div className="relative mt-[5rem] md:mt-[10rem] lg:mt-[0rem]">
      <div>
        <div className="font-extrabold absolute mt-10 lg:mt-28 z-100 w-full p-10 flex flex-col items-center">
          {loading ? (
            // Skeleton Loading
            <Skeleton />
          ) : (
            <h1 className="text-center text-[0.3rem] lg:text-3xl heading text-purple-500">
              {termsData.length > 0 ? termsData[0].Title : "Loading..."}
            </h1>
          )}

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
          <CookieContent termsData={termsData} loading={loading} />
        </div>

        <div>
          <CookieVersions termsData={termsData} loading={loading} />
        </div>

        <div>
          <CookiesPdf termsData={termsData} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default LegalPolicy;
