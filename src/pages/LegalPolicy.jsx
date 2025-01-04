import {useState , useEffect} from 'react'
import Image from '../assets/terms_bg.jpg'
import { FaHome } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import {Link} from 'react-router-dom'
import LegalContent from '../components/LegalContent';
import LegalVersions from '../components/LegalVersions'
import LegalPdf from '../components/LegalPdf'
import { databases } from '../Appwrite/appwrite';
const LegalPolicy = () => {
  const [legalData, setLegalData] = useState([]); // State to hold fetched data
  const databaseId = "67594afc0000cafabf62"; // Replace with your Appwrite database ID
  const collectionId = "677910f30002b5a0f689"; // Replace with your Appwrite collection ID

  useEffect(() => {
    const fetchLegalData = async () => {
      try {
        const response = await databases.listDocuments(databaseId, collectionId);
        console.log("Fetched Legal Data:", response); // Debug API response
        setLegalData(response.documents);
      } catch (error) {
        console.error("Error fetching legal data:", error);
      }
    };

    fetchLegalData();
  }, []);

  return (
    <div className="relative mt-[5rem] md:mt-[10rem] lg:mt-[0rem]">
      <div>
      <div
          className="font-extrabold absolute mt-10 lg:mt-28 z-100 w-full p-10 flex flex-col items-center"
        >
          <h1 className="text-center text-[0.3rem] lg:text-3xl heading text-purple-500">
          {legalData.length > 0 ? legalData[0]?.Title || "Legal Policy" : "Loading..."}
          </h1>
          <div className='text-black'>
            <div className='flex items-center gap-3  w-[13%] mt-3 p-1 justify-between'>
                <div><FaHome /></div>
                <Link to='/' className='font-thin'>Home</Link>
                <div><SlArrowRight/></div>
                <Link to='/terms'>Terms</Link>
            </div>
          </div>
        </div>
      <div>
        <img className='w-full h-[20rem] lg:h-[24rem] object-cover' src={Image} alt="" />
      </div>
      </div>

      <div className='flex flex-col gap-[2vh]'>

      <div className='max-w-[1200px] mx-auto mt-4 w-full'>
        <LegalContent/>
      </div>
      
      <div>
        <LegalVersions/>
      </div>

      <div>
        <LegalPdf/>
      </div>

      </div>

    </div>
  )
}

export default LegalPolicy
