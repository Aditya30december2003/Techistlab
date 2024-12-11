import {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import PageLoadAnimation from './PageLoadAnimation';

const fetchHomeContent = async () => {
  try {
    const response = await databases.listDocuments(
      "67594afc0000cafabf62", // Your database ID
      "67594b2b0006d71a548d"  // Your "home" collection ID
    );
    
    console.log("Raw Appwrite Response:", response);
    console.log("Documents:", response.documents);
    console.log("Total documents:", response.documents.length);
    
    if (response.documents.length > 0) {
      console.log("First document full details:", response.documents[0]);
      console.log("taglineA value:", response.documents[0].taglineA);
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
const Footer = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  useEffect(()=>{
    const loadContent = async () => {
      try {
        const data = await fetchHomeContent();
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
  
  return (
    <div className="w-full bg-gray-300 text-black p-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[1.1rem]">Techistlab</h1>
          <Link className="text-[0.95rem] font-light">About</Link>
          <Link className="text-[0.95rem] font-light">Blog</Link>
          <Link className="text-[0.95rem] font-light">Careers</Link>
          <Link className="text-[0.95rem] font-light">Contact</Link>
          <Link className="text-[0.95rem] font-light">Portfolio</Link>
          <Link className="text-[0.95rem] font-light">Services</Link>
          <Link className="text-[0.95rem] font-light">Teams</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[1.1rem]">Careers</h1>
          <Link className="text-[0.95rem] font-light">Job Search</Link>
        </div>
      </div>
      <div className="w-[80%] mt-10 bg-black h-[0.03rem]"></div>
      <div className="flex flex-col lg:flex-row items-center gap-7 text-[0.85rem] mt-5 justify-between">
        <div className="flex items-center gap-3">
          <p>© 2024 Techistlab</p>
          <p>.</p>
          <p>Privacy</p>
          <p>.</p>
          <p>Terms</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <p>
            <FaGlobe size={20} />
          </p>
          <p>
            <FaFacebookSquare size={20} />
          </p>
          <p>
            <FaSquareXTwitter size={20} />
          </p>
          <p>
            <FaInstagramSquare size={20} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

