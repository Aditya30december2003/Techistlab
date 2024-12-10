import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoadAnimation = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 3500); // Total animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-purple-600"
          initial={{ opacity: 1, y: 0 }}
          animate={{ 
            y: '-100%', // Slide the entire page upward
            transition: {
              duration: 1.5,
              delay: 2, // Delay before sliding up
              ease: "easeInOut"
            }
          }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5 }
          }}
        >
          {/* Text Animation */}
          <motion.div
            className="text-5xl lg:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 70
              }
            }}
          >
            Techistlab
          </motion.div>
        </motion.div>
      )}
      {!isAnimating && children}
    </AnimatePresence>
  );
};

export default PageLoadAnimation;