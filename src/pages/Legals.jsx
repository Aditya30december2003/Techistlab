import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BufferAnimation from "../components/BufferAnimation";

const LegalPolicy = () => {
  const [legalDocs, setLegalDocs] = useState({ firstGroup: [], secondGroup: [] });

  useEffect(() => {
    // Static data for legal documents
    const staticDocs = {
      firstGroup: [
        { title: "Privacy Policy", img: "https://images.pexels.com/photos/4160125/pexels-photo-4160125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", link: "/privacy", BgImg: "/images/header-bg.jpg" },
        { title: "Terms & Conditions", img: "https://images.pexels.com/photos/7821937/pexels-photo-7821937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", link: "/terms" },
        { title: "Cookie Policy", img: "https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg", link: "/cookies" },
      ],
      secondGroup: [
        { title: "Legal Policy", img: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", link: "/legalpolicy" },
      ],
    };

    setLegalDocs(staticDocs);
  }, []);

  // Show loading animation until data is ready
  if (!legalDocs.firstGroup.length || !legalDocs.secondGroup.length) {
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
        <h1 className="heading" data-aos="fade-up" data-aos-duration="2000">
          Recent Policies
        </h1>
        <div
          className="flex flex-col lg:grid lg:grid-cols-2 gap-20 p-5 text-white mt-20"
        >
          {legalDocs.firstGroup.map((doc, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
              className="relative"
            >
              <Link
                to={doc.link}
                className="cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700"
              >
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h1 className="text-xl text-center font-bold p-10 mx-auto bg-purple-300 w-[80%] rounded-md">{doc.title}</h1>
                </div>
                <div>
                  <img
                    className="h-[20rem] w-full object-cover rounded-md"
                    src={doc.img}
                    alt={doc.title}
                  />
                </div>
              </Link>
            </div>
          ))}

          {legalDocs.secondGroup.map((doc, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
              className="relative"
            >
              <Link
                to={doc.link}
                className="cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700"
              >
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h1 className="text-xl text-center font-bold p-10 mx-auto bg-purple-300 w-[80%] rounded-md">{doc.title}</h1>
                </div>
                <div>
                  <img
                    className="h-[20rem] w-full object-cover rounded-md"
                    src={doc.img}
                    alt={doc.title}
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
