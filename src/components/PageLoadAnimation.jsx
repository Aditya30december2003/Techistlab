import { databases } from "../Appwrite/appwrite";
import BufferAnimation from '../components/BufferAnimation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const fetchContent = async () => {
  try {
    const response = await databases.listDocuments(
      "67594afc0000cafabf62", // Your database ID
      "675bebfc001c66e1af4b"  // Your "portfolio" collection ID
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

const PageLoadAnimation = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 5000); // Reduced total animation duration to 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchContent();
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
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!content) return <BufferAnimation />;

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1, y: 0 }}
          animate={{
            y: '-100%', // Slide the entire page upward
            transition: {
              duration: 1.5,
              delay: 3.5, // Animation ends after 5 seconds total
              ease: 'easeInOut',
            },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5 },
          }}
        >
          {/* Centered Logo and Tagline */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 70,
              },
            }}
          >
            <img src={logo} alt="Logo" className="w-[20rem] h-[10rem] mb-4" />
            <div className="text-[1.2rem] text-center text-white">{content.tagline}</div>
          </motion.div>
        </motion.div>
      )}
      {!isAnimating && children}
    </AnimatePresence>
  );
};

export default PageLoadAnimation;
