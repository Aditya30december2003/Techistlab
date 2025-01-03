import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { databases } from "../Appwrite/appwrite";
import BufferAnimation from "../components/BufferAnimation";

const LegalPolicy = () => {
  const [headerContent, setHeaderContent] = useState({ heading: '', subHeading: '' });
  const [policies, setPolicies] = useState({ firstGroup: [], secondGroup: [] });
  const [isLoading, setIsLoading] = useState(true);
  const databaseId = "67594afc0000cafabf62";
  const collectionId = "67784401000d985c04c2";

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await databases.listDocuments(databaseId, collectionId);
        
        if (response.documents.length > 0) {
          // Get the first document for header content
          const doc = response.documents[0];
          setHeaderContent({
            heading: doc.Heading || 'Terms of Use',
            subHeading: doc.subHeading || 'Explore our comprehensive policy documents'
          });

          // Transform the policies into cards
          const allPolicies = [
            {
              title: doc.Policy1,
              img: "https://images.pexels.com/photos/4160125/pexels-photo-4160125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              link: "/privacy"
            },
            {
              title: doc.Policy2,
              img: "https://images.pexels.com/photos/7821937/pexels-photo-7821937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              link: "/terms"
            },
            {
              title: doc.Policy3,
              img: "https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg",
              link: "/cookies"
            },
            {
              title: doc.Policy4,
              img: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              link: "/legalpolicy"
            }
          ].filter(policy => policy.title); // Remove any policies without titles

          setPolicies({
            firstGroup: allPolicies.slice(0, 3),
            secondGroup: allPolicies.slice(3)
          });
        }
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (isLoading) {
    return <BufferAnimation />;
  }

  return (
    <div className="mb-[10rem]">
      {/* Header Section */}
      <div className="h-[30rem] relative">
        <div
          className="text-white bg-black/80 absolute mt-44 z-100 w-full p-10"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-center text-2xl lg:text-4xl heading">
            {headerContent.heading}
          </h1>
          <p className="text-center text-[1.1rem] lg:text-[1.6rem] mt-10">
            {headerContent.subHeading}
          </p>
        </div>
        <img
          className="object-cover w-full h-[30rem]"
          src="https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Header"
        />
      </div>

      {/* Policies Section */}
      <div className="mt-20">
        <h1 className="heading" data-aos="fade-up" data-aos-duration="2000">
          Recent Policies
        </h1>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20 p-5 text-white mt-20">
          {policies.firstGroup.map((policy, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
              className="relative"
            >
              <Link
                to={policy.link}
                className="cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700"
              >
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h1 className="text-xl text-center font-bold p-10 mx-auto bg-purple-300 w-[80%] rounded-md">
                    {policy.title}
                  </h1>
                </div>
                <div>
                  <img
                    className="h-[20rem] w-full object-cover rounded-md"
                    src={policy.img}
                    alt={policy.title}
                  />
                </div>
              </Link>
            </div>
          ))}

          {policies.secondGroup.map((policy, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
              className="relative"
            >
              <Link
                to={policy.link}
                className="cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700"
              >
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h1 className="text-xl text-center font-bold p-10 mx-auto bg-purple-300 w-[80%] rounded-md">
                    {policy.title}
                  </h1>
                </div>
                <div>
                  <img
                    className="h-[20rem] w-full object-cover rounded-md"
                    src={policy.img}
                    alt={policy.title}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalPolicy;