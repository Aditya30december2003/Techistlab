import { useState, useEffect } from 'react';
import { FaReact } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { LuFileJson } from "react-icons/lu";
import { ChevronLeft, ChevronRight } from "react-feather";
import { databases } from "../Appwrite/appwrite";
import BufferAnimation from '../components/BufferAnimation';

const fetchServicesContent = async () => {
  try {
    const response = await databases.listDocuments(
      "67594afc0000cafabf62", // Your database ID
      "67594bca0003adc16342"  // Your "services" collection ID
    );

    console.log("Raw Appwrite Response:", response);

    if (response.documents.length > 0) {
      console.log("First document details:", response.documents[0]);
    } else {
      console.warn("No documents found.");
    }

    return response.documents;
  } catch (error) {
    console.error("Appwrite Fetch Error:", {
      message: error.message,
      code: error.code,
      type: error.type,
    });
    throw error;
  }
};

const Services = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="mt-[10rem] md:mt-[15rem] lg:mt-[10rem] mb-[5rem]" data-aos="fade-up" data-aos-duration="2000">
      <h1 className="text-center font-bold text-[1.5rem] lg:text-[1.8rem] heading" data-aos="fade-up" data-aos-duration="2000">
        Services
      </h1>
      <div className="w-[6rem] my-10 bg-black h-[0.2rem] text-center mx-auto"></div>

      <div className="relative h-[100vh] overflow-hidden mt-20">
        <div 
          className="flex h-full transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between z-10 p-4">
          <button
            onClick={prev}
            className="p-2 rounded-full shadow bg-white/20 hover:text-gray-800 hover:bg-white"
          >
            <ChevronLeft className="ArrowIcon" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full shadow bg-white/20 text-gray-800 hover:bg-white"
          >
            <ChevronRight className="ArrowIcon" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-0 right-0 z-10">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`
                  transition-all w-3 h-3 bg-white rounded-full
                  ${curr === i ? "p-2" : "bg-opacity-50"}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceSlide = ({ image, icon, title, description, backgroundImage }) => (
  <div 
    className="w-full h-full flex-shrink-0 relative bg-cover bg-center flex items-center justify-center text-white"
    style={{ 
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="text-center max-w-2xl p-8 bg-black/50 rounded-xl">
      {icon ? (
        <div className="mb-6 text-center">{icon}</div>
      ) : (
        <img src={image} alt="Service Placeholder" className="mb-6 w-20 h-20 mx-auto rounded-full object-cover" />
      )}
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl">{description}</p>
    </div>
  </div>
);

const ServicesContainer = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchServicesContent();

        if (data && data.length > 0) {
          setContent(data[0]);
        } else {
          setError("No content available");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    loadContent();
  }, []);

  const serviceBackgrounds = [
    'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/11780441/pexels-photo-11780441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!content) return <BufferAnimation />;

  return (
    <Services autoSlide={false}>
      <ServiceSlide
        icon={<FaReact size={70} className="mx-auto text-blue-500" />}
        title={content.Service1H}
        description={content.Service1C}
        backgroundImage={serviceBackgrounds[0]}
      />
      <ServiceSlide
        icon={<SiAndroidstudio size={70} className="mx-auto text-green-500" />}
        title={content.Service2H}
        description={content.Service2C}
        backgroundImage={serviceBackgrounds[1]}
      />
      <ServiceSlide
        icon={<FaFigma size={70} className="mx-auto text-purple-500" />}
        title={content.Service3H}
        description={content.Service3C}
        backgroundImage={serviceBackgrounds[2]}
      />
      <ServiceSlide
        icon={<GiShoppingCart size={70} className="mx-auto text-orange-500" />}
        title={content.Service4H}
        description={content.Service4C}
        backgroundImage={serviceBackgrounds[3]}
      />
      <ServiceSlide
        icon={<LuFileJson size={70} className="mx-auto text-cyan-500" />}
        title={content.Service5H}
        description={content.Service5C}
        backgroundImage={serviceBackgrounds[4]}
      />
      <ServiceSlide
        image={content.Service6Img}
        title={content.Service6H}
        description={content.Service6C}
        backgroundImage={serviceBackgrounds[5]}
      />
      <ServiceSlide
        image={content.Service6Img}
        title={content.Service7H}
        description={content.Service7C}
        backgroundImage={serviceBackgrounds[6]}
      />
    </Services>
  );
};

export default ServicesContainer;

