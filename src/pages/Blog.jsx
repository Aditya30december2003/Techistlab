import { useState , useEffect } from "react";
import { databases } from "../Appwrite/appwrite";
import BufferAnimation from "../components/BufferAnimation";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState({ firstGroup: [], secondGroup: [] });
  const [error, setError] = useState(null);

  // Fetching blog documents
  const fetchBlogContent = async () => {
    try {
      const response = await databases.listDocuments(
        "67594afc0000cafabf62", // Database ID
        "67594bad000dbcdca512"  // Collection ID
      );
      return response.documents; // Returns all documents in the collection
    } catch (error) {
      console.error("Error fetching blog content:", error);
      throw error;
    }
  };

  useEffect(() => {
    const loadContent = async () => {
      try {
        const documents = await fetchBlogContent();

        if (documents.length >= 2) {
          const firstDoc = documents[0];
          const secondDoc = documents[1];

          setBlogs({
            firstGroup: [
              { title: firstDoc.BlogH1, img: firstDoc.Blog1Img, link: '/blog/1' , BgImg:firstDoc.bgImage },
              { title: firstDoc.BlogH2, img: firstDoc.Blog2Img, link:  '/blog/2'},
              { title: firstDoc.BlogH3, img: firstDoc.Blog3Img, link: '/blog/3' },
            ],
            secondGroup: [
              { title: secondDoc.BlogH1, img: secondDoc.Blog1Img, link:  '/blog/4'},
              { title: secondDoc.BlogH2, img: secondDoc.Blog2Img, link:  '/blog/5'},
              { title: secondDoc.BlogH3, img: secondDoc.Blog3Img, link: '/blog/6' },
            ],
          });
        } else {
          setError("Insufficient documents found");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    loadContent();
  }, []);

  // Handle errors or loading states
  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!blogs.firstGroup.length || !blogs.secondGroup.length) {
    return <BufferAnimation />;
  }

  return (
    <div className="mb-[10rem]">
      {/* Header Section */}
      <div className="h-[30rem] relative">
        <div
          className="text-white bg-black/80 absolute mt-32 z-100 w-full p-10"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-center text-2xl lg:text-4xl heading">
            Insights and Innovations
          </h1>
          <p className="text-center text-[1.1rem] lg:text-[1.6rem] mt-10">
            Stay updated with the latest trends
          </p>
        </div>
        <img
          className="object-cover w-full h-[30rem]"
          src={blogs.firstGroup[0]?.BgImg}
          alt="Header"
        />
      </div>

      {/* Recent Posts */}
      <div className="mt-20">
        <h1
          className="heading"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Recent Posts
        </h1>
        <div
          className="flex flex-col lg:grid lg:grid-cols-2 gap-20 p-5 text-white mt-20"
        >
          {blogs.firstGroup.map((blog, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Link to={blog.link} className=" cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700">
              <div className="absolute h-[20rem]">
              <h1 className="text-xl text-center font-bold mt-20 p-10 mx-auto bg-purple-300 w-[80%] rounded-md">{blog.title}</h1>
              </div>
              <div><img className="h-[20rem] w-full object-cover rounded-md" src={blog.img} alt="" /></div>
              </Link>
            </div>
          ))}

          {blogs.secondGroup.map((blog, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Link to={blog.link} className=" cursor-pointer rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:rounded-md duration-700">
              <div className="absolute mx-auto h-[20rem]">
              <h1 className="text-xl text-center font-bold mt-20 p-10 mx-auto bg-purple-300 w-[80%] rounded-md">{blog.title}</h1>
              </div>
              <div><img className="h-[20rem] w-full object-cover rounded-md" src={blog.img} alt="" /></div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
