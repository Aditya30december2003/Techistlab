import { useState, useEffect } from "react";
import { databases } from "../Appwrite/appwrite";

const PrivacyLayout = () => {
  const [termsData, setTermsData] = useState([]);
  const [activeTerm, setActiveTerm] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const databaseId = "67594afc0000cafabf62";
  const collectionId = "67767cb7003e57b56096";

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await databases.listDocuments(databaseId, collectionId);
        setTermsData(response.documents);
        if (response.documents.length > 0) {
          setActiveTerm(response.documents[0].$id);
        }
      } catch (error) {
        console.error("Error fetching terms:", error);
      }
    };

    fetchTerms();
  }, []);

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const navItems = termsData.map((item) => ({
    id: item.$id,
    text: item.Title,
  }));

  const contentSections = termsData.map((item) => ({
    id: item.$id,
    title: item.Title,
    content: item.TitleContent,
  }));

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

      setActiveTerm(id);
    }
  };

  if (termsData.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading Terms...</div>
      </div>
    );
  }

  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex gap-10 py-8">
        {/* Left Navigation */}
        <div className="w-[35%] h-screen sticky top-20 hidden md:block overflow-y-auto no-scrollbar">
          <nav>
            <ul className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <li key={item.id} className="relative duration-100">
                  <div
                    className={`absolute -left-4 top-0 h-full w-1 transition-all duration-200 ${
                      activeTerm === item.id ? "bg-purple-500" : "bg-transparent"
                    }`}
                  />
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`text-lg font-medium duration-200 text-left text-[0.95rem] w-full hover:text-purple-600 ${
                      activeTerm === item.id ? "text-purple-700 scale-105" : ""
                    }`}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[70%]">
          {contentSections.map((section) => (
            <section key={section.id} id={section.id} className="mb-16">
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => toggleSection(section.id)}
              >
                <h2 className="text-[0.95rem] font-medium">{section.title}</h2>
                <h3 className="text-lg font-medium">{section.subTitle}</h3>
                <button
                  className={`text-lg font-medium transition-transform ${
                    expandedSections[section.id] ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </button>
              </div>
              {expandedSections[section.id] && (
                <div className="mt-4 text-[0.95rem] lg:text-[0.95rem] leading-relaxed prose prose-purple max-w-none">
                  {section.content}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyLayout;
