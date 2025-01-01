import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { CiSquarePlus , CiSquareMinus  } from "react-icons/ci";

const FaqItem = ({ question, answer, isOpen, onClick, index }) => {
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      // First set height to auto to get the natural height
      gsap.set(contentRef.current, { height: 'auto' });
      // Get the natural height
      const height = contentRef.current.offsetHeight;
      // Set height back to 0 instantly
      gsap.set(contentRef.current, { height: 0 });
      // Animate from 0 to natural height
      gsap.to(contentRef.current, {
        height: height,
        duration: 0.2,
        ease: 'power2.out'
      });
      
      // Animate container padding
      gsap.to(containerRef.current, {
        padding: 24, // equivalent to p-6
        duration: 0.2,
        ease: 'power2.out'
      });
    } else {
      // Animate back to collapsed state
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.2,
        ease: 'power2.inOut'
      });
      
      // Animate container padding back
      gsap.to(containerRef.current, {
        padding: 16, // equivalent to p-4
        duration: 0.2,
        ease: 'power2.inOut'
      });
    }
  }, [isOpen]);

  return (
    <div 
      ref={containerRef}
      className="bg-white rounded-lg shadow-md p-4"
    >
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-black">{question}</h3>
        <button className="text-purple-500 font-bold text-xl">
          {!isOpen ? <CiSquarePlus/> : <CiSquareMinus/>}
        </button>
      </div>
      <div 
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0 }}
      >
        <div className="pt-4">
          <p className="text-gray-600 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Do You Accept All Major Credit Cards ?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique aliquam voluptatibus in, quas atque quod ratione aut modi nihil"
    },
    {
      question: "Do You Support Local Farmers?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique aliquam voluptatibus in, quas atque quod ratione aut modi nihil"
    },
    {
      question: "Do You Use Organic Ingredients?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique aliquam voluptatibus in, quas atque quod ratione aut modi nihil"
    },
    {
        question: "Do You Accept All Major Credit Cards ?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique aliquam voluptatibus in, quas atque quod ratione aut modi nihil"
      },
      {
        question: "Do You Support Local Farmers?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique aliquam voluptatibus in, quas atque quod ratione aut modi nihil"
      },
      {
        question: "Do You Use Organic Ingredients?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique aliquam voluptatibus in, quas atque quod ratione aut modi nihil"
      }
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-medium">Have any question?</h1>
      </div>
      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;