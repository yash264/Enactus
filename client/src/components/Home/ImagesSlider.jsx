"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils"; 

const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const loadImages = () => {
      setLoading(true);
      const loadPromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve(image);
          img.onerror = reject;
        });
      });

      Promise.all(loadPromises)
        .then((loadedImages) => {
          setLoadedImages(loadedImages);
          setLoading(false);
        })
        .catch((error) => console.error("Failed to load images", error));
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 4000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious]);

  const slideVariants = {
    initial: { 
      scale: 1.1, 
      opacity: 0, 
      filter: "blur(10px)",
      rotateX: 15 
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        filter: { duration: 0.8 }
      },
    },
    upExit: {
      opacity: 0,
      scale: 0.95,
      y: "-100%",
      filter: "blur(5px)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    downExit: {
      opacity: 0,
      scale: 0.95,
      y: "100%",
      filter: "blur(5px)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {/* Enhanced Loading Indicator */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
            <p className="text-white mt-4 text-lg">Loading Experience...</p>
          </div>
        </div>
      )}
      
      {areImagesLoaded && children}
      
      {/* Enhanced Overlay with Gradient */}
      {areImagesLoaded && overlay && (
        <div className={cn(
          "absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 z-40", 
          overlayClassName
        )} />
      )}
      
      {/* Enhanced Image Slider */}
      {areImagesLoaded && (
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="absolute inset-0"
            >
              <img
                src={loadedImages[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="h-full w-full object-cover object-center"
              />
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30" />
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      
      {/* Navigation Dots */}
      {areImagesLoaded && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2">
          {loadedImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-yellow-500 w-8" 
                  : "bg-white/50 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      )}
      
      {/* Side Navigation Arrows */}
      {areImagesLoaded && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      
      {/* Progress Bar */}
      {areImagesLoaded && autoplay && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-50">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          />
        </div>
      )}
    </div>
  );
};

export default ImagesSlider;
