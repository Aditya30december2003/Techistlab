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
    <div className="w-full bg-gray-300 text-black p-4 lg:p-5">
      <div className='mb-0'>
      <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const name = "TechistLab Inquiry";
            const message = "I am interested in hiring your services.";
            const mailtoLink = `mailto:ask@techistlab.co.uk?subject=Contact%20from%20${encodeURIComponent(
              name
            )}&body=From:%20${encodeURIComponent(email)}%0A%0A${encodeURIComponent(
              message
            )}`;
            window.location.href = mailtoLink;
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
            Let's talk tech
          </button>
        </form>
      </div>
  <div className="flex flex-col md:flex-row gap-[1rem] lg:gap-[6rem] lg:items-center">
  <div className="md:flex hidden justify-center items-center p-14">
  <div className="hidden md:block bg-gray-400 rounded-full w-[10rem] h-[10rem] lg:w-[12rem] lg:h-[12rem] flex-col text-center justify-center items-center">
    <img 
      src="https://techistlab.co.uk/assets/logo-D8JJhk6e.png" 
      alt="Logo" 
      className=" lg:w-48 lg:h-48 object-contain mx-auto"
    />
  </div>
</div>

        <div className="flex flex-col gap-3 mt-5 md:mt-0">
          <h1 className="font-bold text-[1.3rem]">{content.legalTerm1}</h1>
          <p to="/about"  className="text-[1rem] font-light">{content.legalTerm2}</p>
          <p to="/blog"  className="text-[1rem] font-light">{content.legalTerm3}</p>
          <p to="/careers"  className="text-[1rem] font-light">{content.legalTerm4}</p>
          <Link to="/contact"  className="text-[1rem] font-light">Contact</Link>
          <p to="/portfolio"  className="text-[1rem] font-light">{content.legalTerm5}</p>
        </div>
        <div className='flex gap-2 flex-col'>
        <div className="flex flex-col gap-1 text-[2.3rem]">
          <h1 className="font-bold text-[1.3rem]">Careers</h1>
          <Link className="text-[1rem] font-light">Job Search</Link>
        </div>
        <div>
        <h1 className="font-bold text-[1.3rem]">Where to find us?</h1>
        <div className="text-[1rem] font-light"><span className='font-bold'>Address 1 :</span>{content.Address1}</div>
        <div className="text-[1rem] font-light"><span className='font-bold'>Address 2 :</span>{content.Address2}</div>
        <div className="text-[1rem] font-light"><span className='font-bold'>Address 3 :</span>{content.Address3}</div>
        </div>
        <div>
        <h1 className="font-bold text-[1.3rem]">Phone no.</h1>
        <Link className="text-[1rem] font-light">{content.phoneNum}</Link>
        </div>
        <div>
        <h1 className="font-bold text-[1.3rem]">Email</h1>
        <Link className="text-[1rem] font-light">{content.email}</Link>
        </div>
        </div>
        <div className='flex flex-col gap-10'>
        <h1 className="font-bold text-[1.3rem]">Get in touch</h1>
        <Link className="text-[1rem] font-light">
        <div className="flex flex-row items-center gap-3">
          <Link to={content.website}>
            <FaGlobe size={40} />
          </Link>
          <Link  to={content.facebook}>
            <FaFacebookSquare size={40} />
          </Link>
          <Link  to={content.twitter}>
            <FaSquareXTwitter size={40} />
          </Link>
          <Link  to={content.insta}>
            <FaInstagramSquare size={40} />
          </Link>
        </div>
        </Link>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-10 bg-black h-[0.03rem]"></div>
      <div className="flex flex-col lg:flex-row items-center gap-7 text-[0.85rem] mt-5 justify-between">
        <div className="flex items-center gap-3 text-[1.1rem] mx-auto">
          <p>© 2024 Techistlab</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

