import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IconArrowRight, IconArrowLeft, IconCalendar, IconTag } from "@tabler/icons-react";

export const Carousel = ({ data = [] }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? data.length - 1 : prevCurrent - 1
    );
  };

  const next = () => {
    setDirection(1);
    setCurrent((prevCurrent) =>
      prevCurrent === data.length - 1 ? 0 : prevCurrent + 1
    );
  };

  useEffect(() => {
    if (data.length === 0) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prevCurrent) =>
        prevCurrent === data.length - 1 ? 0 : prevCurrent + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [data.length]);

  // Early return if no data - after hooks
  if (!data || data.length === 0) {
    return <div className="relative w-full h-[70vh] flex items-center justify-center">
      <p className="text-gray-500">No data available</p>
    </div>;
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <div className="relative w-full h-[70vh] lg:h-[80vh]">
      {/* Main Carousel Container */}
      <div className="relative h-full w-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 }
            }}
            className="absolute inset-0"
          >
            <ProjectSlide {...data[current]} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute inset-x-0 bottom-2 flex justify-center gap-3 z-30">
          <motion.button
            onClick={prev}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 group"
          >
            <IconArrowLeft className="w-5 h-5 text-white group-hover:text-blue-200 transition-colors" />
          </motion.button>
          
          <motion.button
            onClick={next}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 group"
          >
            <IconArrowRight className="w-5 h-5 text-white group-hover:text-blue-200 transition-colors" />
          </motion.button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className="relative group"
            >
              <div className={`w-10 h-1.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white shadow-lg shadow-white/50"
                  : "bg-white/30 hover:bg-white/50 group-hover:scale-110"
              }`} />
              {index === current && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 w-10 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="hidden lg:flex absolute -bottom-[4.5rem] left-1/2 transform -translate-x-1/2 space-x-3 z-20">
        {data.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            whileHover={{ 
              scale: 1.05,
              y: -3,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              index === current 
                ? "border-white shadow-lg shadow-white/30" 
                : "border-white/30 hover:border-white/60"
            }`}
          >
            <img 
              src={item.src} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              index === current ? "opacity-0" : "opacity-40 hover:opacity-20"
            }`} />
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

const ProjectSlide = ({ src, title, description, impact, impactLabel, category, year, button }) => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover"
          src={src}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-16 max-w-4xl">
        {/* Category and Year */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <IconTag className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 text-sm font-medium">{category}</span>
          </span>
          {year && (
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <IconCalendar className="w-4 h-4 text-green-300" />
              <span className="text-green-200 text-sm font-medium">{year}</span>
            </span>
          )}
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-yellow-200 bg-clip-text text-transparent leading-tight"
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg lg:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Impact Stats */}
        {impact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-6 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-white mb-1">{impact}</div>
              <div className="text-blue-200 text-sm">{impactLabel}</div>
            </motion.div>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/20 group"
          >
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              {button || "Learn More"}
            </span>
            <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
