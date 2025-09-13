import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../assets/Home/img1.jpg";
import img2 from "../assets/Home/img2.jpg";
import img3 from "../assets/Home/img3.jpg";
import img4 from "../assets/Home/img4.jpg";
import img5 from "../assets/Home/img5.jpg";

import ImagesSlider from "../components/Home/ImagesSlider.jsx";
import LeadershipCards from "../components/Home/LeadershipCards.jsx";
import AboutEnactus from "../components/Home/AboutEnactus.jsx";
import DiscoverEnactus from "../components/Home/DiscoverEnactus.jsx";
import FlipWords from "../components/Home/UI/FlipWords.jsx";
import ProjectCarousel from "../components/Home/ProjectCarousel.jsx";
import SEO from "../components/General/SEO.jsx";
import { leadershipData } from "../data/index.js";
import { seoConfig } from "../data/seoConfig.js";

const images = [img1, img2, img3, img4, img5];
const words = ["innovate", "lead", "impact", "transform"];

const HomePage = () => {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-800 overflow-hidden">
      <SEO 
        title={seoConfig.home.title}
        description={seoConfig.home.description}
        keywords={seoConfig.home.keywords}
        url={seoConfig.home.url}
        image={seoConfig.home.image}
      />
      
      {/* Enhanced Hero Section */}
      <div className="relative">
        <ImagesSlider images={images} autoplay={true} direction="up" className="h-[100vh] w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-30" />
          <div className="h-full z-50 flex flex-col justify-center items-center px-4 relative">
            <div className="text-center space-y-6">
              <div className="text-4xl md:text-7xl lg:text-8xl mx-auto font-bold text-white leading-tight">
                Empower{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  <FlipWords words={words} />
                </span>
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl">with Enactus MNNIT</span>
              </div>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Empowering communities through entrepreneurial action and sustainable solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <button
                  onClick={handleJoinUs}
                  className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 rounded-full shadow-2xl hover:shadow-yellow-500/25"
                >
                  Explore Our Impact
                </button>
                <button
                  onClick={() => navigate("/project")}
                  className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 rounded-full backdrop-blur-sm"
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </ImagesSlider>
      </div>

      {/* About Enactus Section */}
      <AboutEnactus />

      {/* Discover Enactus MNNIT Section */}
      <DiscoverEnactus />

      {/* Modern Impactful Projects Section */}
      <div className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 md:mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full text-orange-600 text-sm md:text-base font-semibold border border-yellow-400/20 backdrop-blur-sm">
                Our Impact Stories
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="block bg-gradient-to-r from-gray-800 via-gray-900 to-blue-900 bg-clip-text text-transparent">
                Transforming
              </span>
              <span className="block bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent mt-2">
                Communities
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Discover how our innovative entrepreneurial solutions are creating lasting impact 
              and empowering communities across India through sustainable development
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ProjectCarousel />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Team Leadership Section */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-yellow-600">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated coordinators and team leads driving our vision forward
            </p>
          </div>
          <LeadershipCards leaders={leadershipData} />
        </div>
      </div>

    </div>
  );
};

export default HomePage;
