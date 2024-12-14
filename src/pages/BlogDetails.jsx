import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { databases } from "../Appwrite/appwrite";
import BufferAnimation from "../components/BufferAnimation";
import { Query } from "appwrite";

// Fetch blog data by a custom field like "slug" (or any custom field you use to identify blogs)
const fetchBlogContentById = async (slug) => {
  try {
    const response = await databases.listDocuments(
      "67594afc0000cafabf62", // Database ID
      "675bff5c0014be405753", // Collection ID (replace with actual collection ID)
      [
        Query.equal("slug", slug) // Query by the "slug" field
      ]
    );

    if (response.documents.length > 0) {
      return response.documents[0]; // Return the first matching document
    } else {
      throw new Error("Blog not found");
    }
  } catch (error) {
    console.error("Error fetching blog content:", error);
    throw error;
  }
};

const BlogPage = () => {
  const { id } = useParams(); // Get the blog ID (or slug) from the URL
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchBlogContentById(id); // Use slug (or your custom field) for fetching
        setContent(data); // Set the blog data into state
      } catch (err) {
        setError(err.message); // If an error occurs, set the error message
      }
    };

    loadContent();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!content) {
    return <BufferAnimation />; // Display a loading animation while the data is being fetched
  }

  return (
    <div className="blog-page mb-[10rem]">
      {/* Header Section with Background Image */}
      <div className="relative h-[30rem]">
        {/* Blog Header with Title and Subtitle */}
        <div className="absolute inset-0 bg-black/80 p-10 flex flex-col justify-center text-white ">
          <h1 className="text-center text-4xl font-bold">{content.title}</h1>
          <p className="text-center text-xl mt-4">{content.subtitle}</p>
        </div>

        {/* Header Image (Background Image for the Blog) */}
        <img
          className="object-cover w-full h-[30rem]"
          src={content.headerImage} // Assuming 'headerImage' is the field storing the image URL
          alt="Blog Header"
        />
      </div>

      {/* Blog Content Section */}
      <div className="p-5  mt-20">
        {/* Blog Writer Information */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">{content.author}</p>
          <p className="text-sm">{content.date}</p>
        </div>

        {/* Blog Content */}
        <div
          className="mt-10 text-lg lg:text-xl mb-5"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="font-bold text-2xl">{content.contentTitle}</h2>
          <p className="mt-5">{content.contentBody}</p>
        </div>

        {/* Additional Blog Sections if they exist */}
        {content.additionalContent && (
          <div
            className="mt-10 text-lg lg:text-xl mb-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h3 className="font-bold text-2xl">Additional Content</h3>
            <p className="mt-5">{content.additionalContent}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;

