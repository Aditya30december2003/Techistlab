import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { LuFileJson } from "react-icons/lu";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";
import { databases } from "../Appwrite/appwrite";
import BufferAnimation from "../components/BufferAnimation";
import video from '../assets/video.mp4'
import logo from '../assets/logo.png'

const fetchContent = async (collectionId) => {
  try {
    const response = await databases.listDocuments(
      "67594afc0000cafabf62", // Your database ID
      collectionId
    );

    if (response.documents.length === 0) {
      throw new Error("No content available");
    }

    return response.documents[0];
  } catch (error) {
    console.error("Appwrite fetch error:", error);
    throw error;
  }
};

const Home = () => {
  const [content, setContent] = useState({});
  const [content2, setContent2] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data1 = await fetchContent("67594b2b0006d71a548d"); // "home" collection ID
        const data2 = await fetchContent("675a6f79000e2048804b"); // "home2" collection ID
        setContent(data1);
        setContent2(data2);
      } catch (err) {
        setError(err.message);
      }
    };

    loadContent();
    Aos.init({ duration: 2000 });

    // Cleanup function if needed, e.g., for cancelling the async call
    return () => {
      // Any cleanup needed here
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!content.headingA) return <BufferAnimation />;

  return (
    <div className="relative px-4 pt-[5rem] md:mt-[10rem] lg:mt-[1rem] mb-32" id="home">
      {/* Video Section */}
      <div className="relative inset-0 z-0">
  <video
    src={video}
    autoPlay
    loop
    muted
    className="w-full h-[20rem] lg:h-[46rem] lg:object-cover"
  />
  <img
    src={logo} // Make sure to replace `watermarkImage` with your image source
    alt="Watermark"
    className="absolute top-10 right-5 w-20 lg:w-44 h-10 lg:h-24 opacity-30" // Adjust positioning and size as needed
  />
</div>


      <div className="">

      {/* Content Section */}
      <div className="relative flex flex-col gap-4 mt-5 lg:mt-2 py-0 lg:py-10 w-[100%] lg:w-[60%] mx-auto">
        <p
          className="text-center text-[1.1rem] lg:text-[1.8rem] font-bold"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {content.taglineA}
        </p>
        <div className="w-[6rem] my-5 patti h-[0.2rem] text-center mx-auto"></div>
        <div
          className="text-[2.2rem] md:text-[5rem] lg:text-[3rem] text-center w-[95%] lg:w-[100%] mx-auto font-extrabold heading"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {content.headingA}
        </div>
        <div className="font-bold text-[1rem] md:text-[2.5rem] lg:text-[1.3rem] mt-4 text-center w-[100%] lg:w-[80%] mx-auto">
          <TypeAnimation
            sequence={[
              content.subheadingA, // First text
              0,                   // No pause
              content.subheadingB, // Second text (if any)
              0,                   // No pause
              content.subheadingC, // Third text (if any)
              0,
              content.subheadingD,
              0,
              content.subheadingE,
            ]}
            wrapper="span"
            speed={50}
            className="text-6x1 font-bold"
            repeat={Infinity}
          />
        </div>

        </div>

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
          className="mx-auto text-center w-[95%] lg:w-[45%] mt-10 md:mt-[15rem] lg:mt-[2.5rem] flex items-center border p-2 rounded-[5rem]"
          data-aos="fade-up"
          data-aos-duration="2000"
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

      <div className="py-7 mt-20">
        <div
          className="mx-auto text-center font-bold text-[1.2rem] rounded-md lg:text-[1.2rem] bg-purple-200 p-2 text-gray-700/80"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className="w-[100%] lg:w-[70%] mx-auto text-left">
            <div className="text-[2.5rem]">At Techistlab</div>
            <ol className="flex flex-col gap-10 mt-4 mb-6">
              <li
                data-aos="fade-down"
                data-aos-duration="2000"
                className="bg-black cursor-pointer text-white p-3 rounded-md shadow-[5px_5px_0px_0px_rgba(109,40,217)]"
              >
                {content.contentA}
              </li>
              <li
                data-aos="fade-down"
                data-aos-duration="2000"
                className="bg-black text-white p-3 rounded-md shadow-[5px_5px_0px_0px_rgba(109,40,217)]"
              >
                {content.contentB}
              </li>
              <li
                data-aos="fade-down"
                data-aos-duration="2000"
                className="bg-black text-white p-3 rounded-md shadow-[5px_5px_0px_0px_rgba(109,40,217)]"
              >
                {content.contentC}
              </li>
            </ol>
          </p>
        </div>
      </div>

      <div className="mt-7 px-7 py-2">
          <h1
            className="font-bold text-[1.3rem]"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Our Services
          </h1>
          <div
            className="text-[2rem] lg:text-[2.5rem] font-bold"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            {content2.heading}
          </div>

          <div className="grid mt-7 gap-16">
            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-16">
              {[
                { icon: <FaReact size={70} />, title: content2.Service1H, description: content2.Service1C },
                { icon: <SiAndroidstudio size={70} />, title: content2.Service2H, description: content2.Service2C },
                { icon: <FaFigma size={70} />, title: content2.Servie3H, description: content2.Service3C },
                { icon: <GiShoppingCart size={70} />, title: content2.Service4H, description: content2.Service4C },
                { icon: <LuFileJson size={70} />, title: content2.Service5H , description: content2.Service5C },
                { icon: <img src={content2.img1} alt="Service icon" className="w-[70px] h-[70px] object-cover" />, title: content2.Service6H , description: content2.Service6C },
                { icon: <img src={content2.img2} alt="Service icon" className="w-[70px] h-[70px] object-cover" />, title: content2.Service7H, description: content2.Service7C },
                { icon: <img src={content2.img3} alt="Service icon" className="w-[70px] h-[70px] object-cover" />, title: content2.Service8H, description: content2.Service8C }
              ].map((service, index) => (
                <div
                  key={index}
                  data-aos="fade-right"
                  data-aos-duration={`${1500 + index * 1000}`}
                  className="border-2 cursor-pointer p-6 flex flex-col gap-2 rounded-md shadow-[10px_10px_1px_1px_#D6B4FC] lg:hover:shadow-[10px_10px_1px_1px_#D6B4FC] hover:scale-105"
                >
                  <p>{service.icon}</p>
                  <h1 className="font-bold text-[2rem]">{service.title}</h1>
                  <p className="text-[1.1rem] md:text-[1.8rem] lg:text-[1.1rem]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-20 text-center text-[1.7rem] w-[80%] md:w-[30%] p-2 mx-auto border-2 font-bold rounded-md shadow-[10px_10px_1px_1px_#D6B4FC] lg:hover:shadow-[10px_10px_1px_1px_#D6B4FC] hover:scale-95 cursor-pointer"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          And Many More....
        </div>
      </div>
  );
};

export default Home;