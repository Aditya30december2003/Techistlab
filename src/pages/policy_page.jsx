import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { databases, storage } from "../Appwrite/appwrite";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const PolicyPage = () => {
  const { policyLink } = useParams();
  const [policyData, setPolicyData] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [activeTerm, setActiveTerm] = useState(null);
  const [requestedVersions, setRequestedVersions] = useState(new Set());
  const [emailConfig, setEmailConfig] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [pdfUrl, setPdfUrl] = useState("");
  const [isPdfLoading, setIsPdfLoading] = useState(true);
  const [pdfError, setPdfError] = useState(null);

  const databaseId = "67594afc0000cafabf62";
  const collectionId = "67797e54002b7f10d927";
  const emailCollectionId = "67765cda001f1b327f43";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [policyResponse, emailResponse] = await Promise.all([
          databases.listDocuments(databaseId, collectionId),
          databases.listDocuments(databaseId, emailCollectionId),
        ]);

        const matchingPolicy = policyResponse.documents.find(
          (doc) => doc.link === policyLink
        );

        if (matchingPolicy) {
          setPolicyData(matchingPolicy);
          setActiveTerm(matchingPolicy.$id);
        } else {
          console.log("No policy document found for link:", policyLink);
        }

        if (emailResponse.documents.length > 0) {
          setEmailConfig(emailResponse.documents[0]);
        } else {
          setEmailError("No email configuration found. Please contact support.");
        }
      } catch (error) {
        console.error("Error in fetchData:", error);
        setEmailError("Error loading data. Please try again later.");
      }
    };

    fetchData();
  }, [policyLink]);

  // Fetch PDF URL only if policyData and pdf_file_id are available
  useEffect(() => {
    if (policyData && policyData.pdf_file_id) {
      const fetchPdf = async () => {
        try {
          const fileId = `${policyData.pdf_file_id}`; // Make sure this exists in the data
          const result = await storage.getFileView(
            "677a968b001fc355677d", // bucket ID
            fileId // pdf_file_id
          );
          setPdfUrl(result);
          setIsPdfLoading(false);
        } catch (error) {
          console.error("Error fetching PDF:", error);
          setPdfError("Error loading PDF. Please try again later.");
        }
      };

      fetchPdf();
    }
  }, [policyData]); // Dependency on policyData, so it only runs after policyData is fetched

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

      setActiveTerm(id);
    }
  };

  const handleRequestVersion = (version) => {
    if (!emailConfig || requestedVersions.has(version)) {
      return;
    }

    setRequestedVersions(new Set([...requestedVersions, version]));

    const recipient = emailConfig.recipient;
    const subject = emailConfig.subject + version;
    const body = emailConfig.body + version;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  if (!policyData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading policy...</div>
      </div>
    );
  }

  // Dynamic content sections based on policyData
  const contentSections = policyData.Content_Title?.map((title, index) => ({
    id: `section-${index}`,
    title,
    content: policyData.Content[index],
  }));

  if (!policyData.version || !Array.isArray(policyData.version)) {
    console.error("policyData.version is either null, undefined, or not an array");
    return;
  }

  const sortedVersions = [...policyData.version].sort((a, b) => {
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
  });

  const sortedIsLatest = sortedVersions.map(
    (version) => policyData.isLatest[policyData.version.indexOf(version)]
  );
  return (
    <div className="relative mt-[5rem] md:mt-[10rem] lg:mt-[0rem]">
      <div>
        <div className="font-extrabold absolute mt-10 lg:mt-28 z-100 w-full p-10 flex flex-col items-center">
          <h1 className="text-center text-[0.3rem] lg:text-3xl heading text-purple-500">
            {policyData.Title}
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
              <Link to='/legals'>Legals</Link>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-full h-[20rem] lg:h-[24rem] object-cover"
            src={policyData.bgImg}
            alt="Terms Background"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex gap-10 py-8">
    {/* Left Navigation */}
    <div
      className="w-[35%] sticky top-20 hidden md:block overflow-y-auto no-scrollbar max-h-screen"
    >
      <nav>
        <ul className="flex flex-col gap-4 p-4">
          {contentSections.map((section) => (
            <li key={section.id} className="relative duration-100">
              <div
                className={`absolute -left-4 top-0 h-full w-1 transition-all duration-200 ${
                  activeTerm === section.id
                    ? "bg-purple-500"
                    : "bg-transparent"
                }`}
              />
              <button
                onClick={() => handleClick(section.id)}
                className={`font-medium duration-200 text-left text-[0.95rem] w-full hover:text-purple-600 ${
                  activeTerm === section.id
                    ? "text-purple-700 scale-105"
                    : ""
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    {/* Right Content */}
    <div className="w-full md:w-[70%] p-10 md:p-5">
      {contentSections.map((section) => (
        <section key={section.id} id={section.id} className="mb-16">
          <div
            className="cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection(section.id)}
          >
            {<h2 className="text-[0.95rem] font-medium">{section.title}</h2>}
            <button
              className={`text-lg font-medium transition-transform ${
                expandedSections[section.id] ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </button>
          </div>
          {expandedSections[section.id] && (
            <div className="mt-4 text-[1rem] lg:text-[0.95rem] leading-relaxed prose prose-purple max-w-none">
              {section.content}
            </div>
          )}
        </section>
      ))}
    </div>
  </div>
</div>


      {/* Versions Section */}
      <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Past Versions</h2>
        <div className="space-y-2">
          {sortedVersions.map((version, index) => (
            <div
              key={`version-${index}`}
              className="flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex items-center justify-between flex-1">
                <div className="flex items-center space-x-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Version {version ? version : "no"}
                  </h3>
                  {sortedIsLatest[index] && (
                    <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">
                      Latest
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleRequestVersion(version)}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      requestedVersions.has(version)
                        ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                        : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                    }`}
                    disabled={requestedVersions.has(version)}
                  >
                    {requestedVersions.has(version)
                      ? "Requested"
                      : "Request via Email"}
                  </button>
                  <SlArrowRight className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* PDF Viewer */}
      <div  className="flex items-center justify-center  py-20 ">
          {/* <h3 className="text-xl font-bold mb-4">View Policy PDF</h3> */}
          {isPdfLoading ? (
            <p>Loading PDF...</p>
          ) : pdfError ? (
            <p className="text-red-600">{pdfError}</p>
          ) : (
            <button
              onClick={() => window.open(pdfUrl, '_blank')}
              disabled={!pdfUrl}
              className="mt-0 text-center text-[1.7rem] w-[80%] md:w-[30%] p-2 mx-auto border-2 font-bold rounded-md shadow-[10px_10px_1px_1px_#D6B4FC] lg:hover:shadow-[10px_10px_1px_1px_#D6B4FC] hover:scale-95 cursor-pointer"
            >
              View as PDF
            </button>
          )}
        </div>
      </div>
  );
};

export default PolicyPage;
