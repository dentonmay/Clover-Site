"use client";

import { useState, useEffect } from 'react';
    import Image from 'next/image';

    const PicReel = ({ images }) => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const [transitioning, setTransitioning] = useState(false);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTransitioning(true);
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setTransitioning(false);
          }, 500); // Match the transition duration
        }, 5000); // Change image every 3 seconds
    
        return () => clearTimeout(timer); // Clear timer on unmount or update
      }, [currentIndex, images.length]);
    
      return (
        <div className="pic-reel-container">
          <div
            className={`pic-reel-image ${transitioning ? 'fade-out' : ''}`}
            key={currentIndex}
          >
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              width={500}
              height={300}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <style jsx>{`
            .pic-reel-container {
              position: relative;
              width: 500px;
              height: 300px;
              overflow: hidden;
              margin-top: 50px;
              
            }
    
            .pic-reel-image {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              transition: opacity 0.5s ease-in-out;
             
            }
    
            .fade-out {
              opacity: 0;
            }
          `}</style>
        </div>
      );
    };
    
    export default PicReel;