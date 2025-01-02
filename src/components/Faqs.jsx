import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { databases } from "../Appwrite/appwrite"; // Add Query import

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      gsap.set(contentRef.current, { height: 'auto' });
      const height = contentRef.current.offsetHeight;
      gsap.set(contentRef.current, { height: 0 });
      gsap.to(contentRef.current, {
        height: height,
        duration: 0.2,
        ease: 'power2.out'
      });
      
      gsap.to(containerRef.current, {
        padding: 24,
        duration: 0.2,
        ease: 'power2.out'
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.2,
        ease: 'power2.inOut'
      });
      
      gsap.to(containerRef.current, {
        padding: 16,
        duration: 0.2,
        ease: 'power2.inOut'
      });
    }
  }, [isOpen]);

  return (
    <div 
      ref={containerRef}
      className="border-2 cursor-pointer p-6 flex flex-col gap-2 rounded-md shadow-[10px_10px_1px_1px_#D6B4FC] lg:hover:shadow-[10px_10px_1px_1px_#D6B4FC]"
      data-aos="fade-down"
      data-aos-duration='2000'
    >
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <button className="text-purple-500 font-bold text-2xl">
          {!isOpen ? <CiSquarePlus /> : <CiSquareMinus />}
        </button>
      </div>
      <div 
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0 }}
      >
        <div className="pt-4">
          <p className="leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqData, setFaqData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const databaseId = "67594afc0000cafabf62"; // Your database ID
  const collectionId = "67761fcd002e4abf3801"; // Your collection ID where FAQs are stored

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        // Fetch documents from your FAQ collection
        const response = await databases.listDocuments(
          databaseId,
          collectionId,
          [
            // Add any queries if needed, like sorting
            // Query.orderDesc('$createdAt')
          ]
        );
        
        // Map the documents to your FAQ format
        const formattedFaqs = response.documents.map(doc => ({
          id: doc.$id,
          question: doc.Question,    // Assuming these are your field names
          answer: doc.Answer        // in the Appwrite collection
        }));
        
        setFaqData(formattedFaqs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        setError("Failed to load FAQs. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-red-600">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-0 lg:py-7">
      <div className="text-center mb-12" data-aos="fade-up"
            data-aos-duration='2000'>
        <h1 className="text-4xl font-medium mb-4">Have any questions?</h1>
        <p className="text-gray-600">Find answers to commonly asked questions below</p>
      </div>
      
      <div className="space-y-4 flex flex-col gap-4">
        {faqData.map((faq, index) => (
          <FaqItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      {faqData.length === 0 && (
        <div className="text-center text-gray-600 py-10">
          No FAQs available at the moment.
        </div>
      )}
    </div>
  );
};

export default Faqs;