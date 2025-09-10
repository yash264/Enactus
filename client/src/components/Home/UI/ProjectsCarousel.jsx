import { IconArrowRight, IconBolt } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Slide = ({
  slide,
  index,
  current,
  handleSlideClick
}) => {
  const slideRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title, description } = slide;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/project");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <motion.li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-500 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -10 }}
        style={{
          transform:
            current !== index
              ? "scale(0.95) rotateX(12deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden transition-all duration-300 ease-out shadow-2xl border border-gray-800"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 25), calc(var(--y) / 25), 0)"
                : "none",
          }}
        >
          <img
<<<<<<< HEAD
            className="absolute inset-0 w-[110%] h-[110%] object-cover transition-all duration-700 ease-in-out"
=======
            className="absolute inset-0 w-[100%] h-[100%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
>>>>>>> 600a2fcca2a64463a78a27213611abc10a14c107
            style={{
              opacity: current === index ? 0.9 : 0.6,
              transform: current === index ? "scale(1.05)" : "scale(1)",
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-700" />
          
          {/* Animated elements */}
          {current === index && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-6 right-6 bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full shadow-lg"
              >
                <IconBolt className="h-5 w-5 text-white" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                <span className="text-xs font-semibold text-white">Featured Project</span>
              </motion.div>
            </>
          )}
        </div>

        <motion.article
          className={`relative p-8 transition-all duration-700 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
<<<<<<< HEAD
          }`}
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: current === index ? 0 : 30,
            opacity: current === index ? 1 : 0
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-5xl font-bold relative mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: current === index ? 0 : 20,
              opacity: current === index ? 1 : 0
            }}
            transition={{ delay: 0.1 }}
          >
=======
          }`}>
          <h2 className="text-lg text-sky-400 md:text-2xl lg:text-4xl font-semibold  relative">
>>>>>>> 600a2fcca2a64463a78a27213611abc10a14c107
            {title}
          </motion.h2>
          
          {description && (
            <motion.p
              className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed max-w-md mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: current === index ? 0 : 20,
                opacity: current === index ? 1 : 0
              }}
              transition={{ delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
          
          <motion.div
            className="flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: current === index ? 0 : 20,
              opacity: current === index ? 1 : 0
            }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={handleNavigation}
<<<<<<< HEAD
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] skew-x-12 group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative flex items-center space-x-2">
                <span>{button}</span>
                <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
=======
              className="mt-6  px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-rose-400 h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              {button}
>>>>>>> 600a2fcca2a64463a78a27213611abc10a14c107
            </button>
          </motion.div>
        </motion.article>
      </motion.li>
    </div>
  );
};

const CarouselControl = ({
  type,
  title,
  handleClick
}) => {

  return (
    <motion.button
      className={`w-14 h-14 flex items-center mx-3 justify-center bg-gradient-to-r from-white to-gray-50 hover:from-yellow-500 hover:to-orange-500 border-2 border-gray-200 hover:border-yellow-400 rounded-full focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl group ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
<<<<<<< HEAD
      onClick={handleClick}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconArrowRight className="text-gray-700 group-hover:text-white h-6 w-6 transition-colors duration-300" />
    </motion.button>
=======
      onClick={handleClick}>
      <IconArrowNarrowRight className="text-green-600 dark:text-green-200" />
    </button>
>>>>>>> 600a2fcca2a64463a78a27213611abc10a14c107
  );
};

export function Carousel({
  slides
}) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = useCallback(() => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  }, [current, slides.length]);

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, handleNextClick]);

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <motion.ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </motion.ul>
      
      {/* Enhanced Controls */}
      <div className="absolute flex justify-center items-center w-full top-[calc(100%+2rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        {/* Progress Indicators */}
        <div className="flex space-x-2 mx-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current 
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 w-8" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
