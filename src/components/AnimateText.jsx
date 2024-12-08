import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OutlineToFillAndWritingText = () => {
  useEffect(() => {
    // First, apply the writing effect (strokeDashoffset)
    gsap.fromTo(
      '.text-path',
      {
        strokeDashoffset: 1000,  // Initially hide the stroke
        stroke: '#000', 
        fill: 'transparent',
      },
      {
        strokeDashoffset: 0,  // Make the stroke appear as it's written out
        duration: 3,  // Adjust duration for typing speed
        ease: 'none', // No easing for typing effect
        scrollTrigger: {
          trigger: '.text-container',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true, // Smooth scroll-based animation
        },
      }
    );

    // Once the writing effect is done, fill the text
    gsap.fromTo(
      '.text-path', 
      { fill: 'transparent' }, 
      {
        fill: '#000',  // Fill the text with black color
        duration: 1,  // Duration of the fill effect
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.text-container',
          start: 'top 60%', // Adjust for desired timing
          end: 'top 40%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="text-container" style={{ marginTop: '100vh', textAlign: 'center' }}>
      <svg width="500" height="150">
        <text
          className="text-path"
          x="50"
          y="75"
          fontSize="60"
          fontWeight="bold"
          fill="transparent"
          stroke="black"
          strokeWidth="2"
        >
          GEMS
        </text>
      </svg>
    </div>
  );
};

export default OutlineToFillAndWritingText;



