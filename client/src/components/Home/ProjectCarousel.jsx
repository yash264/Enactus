import { Carousel } from "./UI/ProjectsCarousel";
import { motion } from "framer-motion";

import samveshImage from '../../assets/projects/images/samvesh.jpg';
import neerImage from '../../assets/projects/images/neer.jpg';
import moonjImage from '../../assets/projects/images/moonj.jpg';
import sahyogImage from '../../assets/projects/images/sahyog.jpg';

export function ProjectCarousel() {
  const slideData = [
    {
      title: "Samvesh",
      button: "Explore Samvesh",
      src: samveshImage,
      description: "Empowering rural artisans through sustainable craft development and market linkages.",
    },
    {
      title: "Neer",
      button: "Explore Neer",
      src: neerImage,
      description: "Innovative water purification solutions for underserved communities.",
    },
    {
      title: "Moonj",
      button: "Explore Moonj",
      src: moonjImage,
      description: "Transforming traditional moonj grass into sustainable livelihood opportunities.",
    },
    {
      title: "Sahyog",
      button: "Explore Sahyog",
      src: sahyogImage,
      description: "Educational support and skill development for underprivileged youth.",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-purple-50 opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Carousel slides={slideData} />
      </motion.div>
      
      {/* Project stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex justify-center mt-16"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="flex space-x-12 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">4+</div>
              <div className="text-sm text-gray-600 font-medium">Active Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-gray-600 font-medium">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
