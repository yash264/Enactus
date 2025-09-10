import { Carousel } from "./UI/ProjectsCarousel";
import { motion } from "framer-motion";

import samveshImage from '../../assets/projects/images/samvesh.jpg';
import neerImage from '../../assets/projects/images/neer.jpg';
import moonjImage from '../../assets/projects/images/moonj.jpg';
import sahyogImage from '../../assets/projects/images/sahyog.jpg';

export default function ProjectCarousel() {
  const slideData = [
    {
      title: "Samvesh",
      button: "Explore Impact →",
      src: samveshImage,
      description: "Empowering rural artisans through sustainable craft development and market linkages, creating a thriving ecosystem for traditional skills.",
      impact: "200+",
      impactLabel: "Artisans Empowered",
      category: "Rural Empowerment",
      year: "2023-Present"
    },
    {
      title: "Neer",
      button: "Discover Solution →",
      src: neerImage,
      description: "Revolutionary water purification solutions bringing clean, safe drinking water to underserved communities across rural India.",
      impact: "5000+",
      impactLabel: "Lives Improved",
      category: "Clean Water Initiative",
      year: "2022-Present"
    },
    {
      title: "Moonj",
      button: "See Innovation →",
      src: moonjImage,
      description: "Transforming traditional moonj grass into sustainable livelihood opportunities, preserving heritage while creating modern solutions.",
      impact: "150+",
      impactLabel: "Families Benefited",
      category: "Sustainable Livelihoods",
      year: "2023-Present"
    },
    {
      title: "Sahyog",
      button: "Learn More →",
      src: sahyogImage,
      description: "Comprehensive educational support and skill development programs empowering underprivileged youth with future-ready capabilities.",
      impact: "300+",
      impactLabel: "Youth Trained",
      category: "Education & Skills",
      year: "2022-Present"
    },
  ];

  return (
    <div className="relative w-full">
      {/* Modern Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-20"
      >
        <Carousel data={slideData} />
      </motion.div>
      
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-16"
      >
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg"
        >
          View All Projects
        </motion.button>
      </motion.div>
    </div>
  );
}
