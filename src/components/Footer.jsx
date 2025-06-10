import { Link } from 'react-router-dom';
import { FaGlobe } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { databases } from "../Appwrite/appwrite";
import BufferAnimation from '../components/BufferAnimation'
import { useState , useEffect } from 'react';

const fetchFooterContent = async () => {
  try {
    const response = await databases.listDocuments(
      "67594afc0000cafabf62", // Your database ID
      "675de1df00361665c2f3"  // Your "footer" collection ID
    );
    
    console.log("Raw Appwrite Response:", response);
    console.log("Documents:", response.documents);
    console.log("Total documents:", response.documents.length);
    
    if (response.documents.length > 0) {
      console.log("First document full details:", response.documents[0]);
      console.log("heading value:", response.documents[0].heading);
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
          const data = await fetchFooterContent();
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
    <div className="w-full bg-purple-300 text-black p-4 lg:p-5">
    <div className="mb-0">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const email = e.target.email.value
          const name = "TechistLab Inquiry"
          const message = "I am interested in hiring your services."
          const mailtoLink = `mailto:ask@techistlab.co.uk?subject=Contact%20from%20${encodeURIComponent(
            name,
          )}&body=From:%20${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`
          window.location.href = mailtoLink
        }}
        className="mx-auto text-center w-[100%] lg:w-[45%] mt-18 lg:mt-10 flex items-center border p-2 rounded-[5rem] "
      >
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email"
          className="border-none outline-none p-2 bg-transparent w-[70%]"
        />
        <button
          type="submit"
          className="text-center mx-auto subcolor1 text-white p-3 w-[30%] rounded-[5rem] text-[1rem] font-bold"
        >
          Lets talk tech
        </button>
      </form>
    </div>
    <div className="flex flex-col lg:flex-row gap-[0.5rem] lg:gap-[2rem] lg:items-center text-center">
      <div className="md:flex hidden justify-center items-center p-14">
        <div className="hidden lg:block bg-gray-400 rounded-full w-[10rem] h-[10rem] lg:w-[12rem] lg:h-[12rem] flex-col text-center justify-center items-center">
          <img
            src="https://techistlab.co.uk/assets/logo-D8JJhk6e.png"
            alt="Logo"
            className="w-32 h-32 lg:w-48 lg:h-48 object-contain mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-5 md:mt-[-2.5rem] w-[30%] mx-auto">
        <Link to="/legals" className="font-bold text-[1.3rem]">
          {content.legalTerm1}
        </Link>
        <Link to="/terms" className="text-[1rem] font-light">
          {content.legalTerm2}
        </Link>
        <Link to="/privacy" className="text-[1rem] font-light">
          {content.legalTerm3}
        </Link>
        <Link to="/cookies" className="text-[1rem] font-light">
          {content.legalTerm4}
        </Link>
        <Link to="/legalpolicy" className="text-[1rem] font-light">
          {content.legalTerm5}
        </Link>
      </div>
      <div className="flex flex-col gap-1 text-[2.3rem] mt-10 lg:mt-[-9.5rem]">
        <h1 className="font-bold text-[1.3rem]">Careers</h1>
        <Link className="text-[1rem] font-light">Job Search</Link>
      </div>
      <div className="flex gap-2 flex-col items-center w-[100%] mt-5">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[1.3rem] mb-4">Where to find us?</h1>
          <div className="flex flex-col gap-5">
            <div className="text-[1rem] font-light flex flex-col w-[60%] mx-auto">
              <span className="font-bold">{content.AdressHeading1}</span>
              <span>{content.Address1}</span>
            </div>
            <div className="text-[1rem] font-light flex flex-col w-[60%] mx-auto">
              <span className="font-bold">{content.AdressHeading2}</span>
              <span>{content.Address2}</span>
            </div>
            <div className="text-[1rem] font-light flex flex-col w-[60%] mx-auto">
              <span className="font-bold">{content.AdressHeading3}</span>
              <span>{content.Address3}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-[1.3rem]">Get in touch</h1>
        <div className="flex flex-row items-center gap-3 mx-auto">
          <Link to={content.website}>
            <FaGlobe size={20} />
          </Link>
          <Link to={content.facebook}>
            <FaFacebookSquare size={20} />
          </Link>
          <Link to={content.twitter}>
            <FaSquareXTwitter size={20} />
          </Link>
          <Link to={content.insta}>
            <FaInstagramSquare size={20} />
          </Link>
        </div>
        <div>
          <h2 className="font-bold text-[1.1rem]">Phone no.</h2>
          <Link className="text-[0.8rem] font-light">{content.phoneNum}</Link>
        </div>
        <div>
          <h2 className="font-bold text-[1.1rem]">Email</h2>
          <Link className="text-[1rem] font-light">{content.email}</Link>
        </div>
      </div>
    </div>
    <div className="w-[80%] mx-auto mt-10 bg-black h-[0.03rem]"></div>
    <div className="flex flex-col lg:flex-row items-center gap-7 text-[0.85rem] mt-5 justify-between">
      <div className="flex items-center gap-3 text-[1.1rem] mx-auto">
        <p>{content.footer_bottom}</p>
      </div>
    </div>
  </div>
  );
};

export default Footer;

