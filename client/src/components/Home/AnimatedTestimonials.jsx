"use client";

import { IconArrowLeft, IconArrowRight, IconQuote } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  if (!testimonials || testimonials.length === 0) {
    return <div>No testimonials available</div>;
  }

  return (
    <div className="max-w-6xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Enhanced Image Section */}
        <div className="relative">
          <div className="relative h-96 w-full">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100 rounded-3xl rotate-3 scale-105 opacity-50"></div>
            
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.3,
                    scale: isActive(index) ? 1 : 0.85,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 10 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -20, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="relative h-full w-full">
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-2xl border-4 border-white"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                    
                    {/* Floating badge */}
                    {isActive(index) && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-3 rounded-full shadow-lg"
                      >
                        <IconQuote className="h-6 w-6" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-15 blur-2xl"></div>
          </div>
        </div>

        {/* Enhanced Text Section */}
        <div className="flex justify-between flex-col py-8 space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="space-y-6"
            >
              {/* Quote Icon */}
              <div className="text-yellow-500">
                <IconQuote className="h-12 w-12" />
              </div>

              {/* Testimonial Text */}
              <motion.blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light italic">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  "{testimonials[active].quote}"
                </motion.span>
              </motion.blockquote>

              {/* Author Info */}
              <div className="space-y-2">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {testimonials[active].name}
                </motion.h3>
                <motion.p 
                  className="text-lg text-gray-500 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {testimonials[active].designation}
                </motion.p>
              </div>

              {/* Rating Stars */}
              <motion.div 
                className="flex space-x-1"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation */}
          <div className="flex items-center justify-between pt-8">
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="group relative h-12 w-12 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-yellow-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <IconArrowLeft className="h-6 w-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="group relative h-12 w-12 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-yellow-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <IconArrowRight className="h-6 w-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
              </button>
            </div>

            {/* Progress Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === active 
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 w-8" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
