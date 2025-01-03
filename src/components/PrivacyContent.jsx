import { useState, useEffect } from "react";
import { databases } from "../Appwrite/appwrite"; // Assuming Appwrite instance is imported
import { Link } from "react-router-dom";
import BufferAnimation from "../components/BufferAnimation";

const LegalPolicy = () => {
  const [legalDocs, setLegalDocs] = useState({ firstGroup: [], secondGroup: [] });
  const [activeDoc, setActiveDoc] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  const databaseId = "67594afc0000cafabf62";  // Replace with your database ID
  const collectionId = "67767cb7003e57b56096";  // Replace with your collection ID

  useEffect(() => {
    const fetchLegalDocs = async () => {
      try {
        const response = await databases.listDocuments(databaseId, collectionId);
        const docs = response.documents;
        
        // Assuming the policy documents are grouped somehow, adjust accordingly
        const firstGroup = docs.filter((doc) => doc.Group === "firstGroup");
        const secondGroup = docs.filter((doc) => doc.Group === "secondGroup");

        setLegalDocs({ firstGroup, secondGroup });
        if (docs.length > 0) {
          setActiveDoc(docs[0].$id);  // Set the active document
        }
      } catch (error) {
        console.error("Error fetching legal documents:", error);
      }
    };

    fetchLegalDocs();
  }, []);

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveDoc(id);
    }
  };

  if (legalDocs.firstGroup.length === 0 && legalDocs.secondGroup.length === 0) {
    return <BufferAnimation />;
  }

  return (
    <div className="mb-[10rem]">
      {/* Header Section */}
      <div className="h-[30rem] relative">
        <div className="text-white bg-black/80 absolute mt-44 z-100 w-full p-10">
          <h1 className="text-center text-2xl lg:text-4xl heading">
            Terms of Use
          </h1>
          <p className="text-center text-[1.1rem] lg:text-[1.6rem] mt-10">
            Explore our comprehensive policy documents
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
        <h1 className="heading">Recent Policies</h1>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20 p-5 text-white mt-20">
          {/* Group 1 Policies */}
          {legalDocs.firstGroup.map((doc) => (
            <div key={doc.$id} className="relative">
              <Link
                to={doc.link}
                className="cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700"
              >
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h1 className="text-xl text-center font-bold p-10 mx-auto bg-purple-300 w-[80%] rounded-md">
                    {doc.Heading}
                  </h1>
                </div>
                <div>
                  <img
                    className="h-[20rem] w-full object-cover rounded-md"
                    src={doc.Policy2} // Update with actual image URL
                    alt={doc.Heading}
                  />
                </div>
              </Link>
            </div>
          ))}

          {/* Group 2 Policies */}
          {legalDocs.secondGroup.map((doc) => (
            <div key={doc.$id} className="relative">
              <Link
                to={doc.link}
                className="cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700"
              >
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h1 className="text-xl text-center font-bold p-10 mx-auto bg-purple-300 w-[80%] rounded-md">
                    {doc.Heading}
                  </h1>
                </div>
                <div>
                  <img
                    className="h-[20rem] w-full object-cover rounded-md"
                    src={doc.Policy2} // Update with actual image URL
                    alt={doc.Heading}
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

