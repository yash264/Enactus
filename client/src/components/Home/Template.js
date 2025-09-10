import { motion, useAnimationControls } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Imagecard from "../Home/ImageCard.js";

const Template = ({ members }) => {
  const controls = useAnimationControls();
  const carouselRef = useRef(null);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setDragLimit(scrollWidth - offsetWidth);
    }
  }, [members]);

  // helper to start scrolling smoothly
  const startScrolling = () => {
    controls.start({
      x: -dragLimit,
      transition: {
        duration: 20, // adjust speed
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  useEffect(() => {
    if (dragLimit > 0) startScrolling();
  }, [dragLimit]);

  return (
    <div ref={carouselRef} className="overflow-hidden w-full py-8">
      <motion.div
        className="flex flex-nowrap gap-8 cursor-grab active:cursor-grabbing"
        animate={controls}
        drag="x"
        dragConstraints={{ left: -dragLimit, right: 0 }}
        onHoverStart={() => controls.stop()} // ✅ pause exactly where it is
        onHoverEnd={startScrolling} // ✅ resume from same spot
        onDragStart={() => controls.stop()} // ✅ pause while dragging
        onDragEnd={startScrolling} // ✅ resume smoothly
      >
        {[...members, ...members].map((member, index) => (
          <div key={index} className="min-w-[400px] max-w-[400]">
            <Imagecard {...member} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Template;
