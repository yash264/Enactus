import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/Home/img1.jpg";
import img2 from "../assets/Home/img2.jpg";
import img3 from "../assets/Home/img3.jpg";
import img4 from "../assets/Home/img4.jpg";
import img5 from "../assets/Home/img5.jpg";

import ImagesSlider from "../components/Home/ImagesSlider.jsx";
import LeadershipCards from "../components/Home/LeadershipCards.jsx";
import AboutEnactus from "../components/Home/AboutEnactus.jsx";
import React from "react";
import { FlipWords } from "../components/Home/UI/Flip-words.jsx";

import img1 from "../assets/Home/portfolio-1.jpg";
import img2 from "../assets/Home/portfolio-2.jpg";
import img3 from "../assets/Home/portfolio-3.jpg";
import { ProjectCarousel } from "../components/Home/ProjectCarousel.jsx";
import { useNavigate } from "react-router-dom";
import { asset } from "../images/asset.js";

const images = [img1, img2, img3, img4, img5];
const words = ["innovate", "lead", "impact", "transform"];

// Sample team leaders data
const teamLeaders = [
  {
    src: asset.utkarsh,
    name: "Utkarsh Sharma",
    designation: "President, Enactus MNNIT",
    quote: "Leading with vision and passion, we transform ideas into impactful solutions that create lasting change in our communities."
  },
  {
    src: asset.roysha,
    name: "Aditya Roysha",
    designation: "Vice President, Enactus MNNIT",
    quote: "Innovation drives our mission as we coordinate diverse initiatives to empower entrepreneurs and foster sustainable development."
  },
  {
    src: asset.shreyansh,
    name: "Shreyansh Singh",
    designation: "Technical Coordinator, Enactus MNNIT",
    quote: "Bridging technology and social impact, we develop scalable solutions that make meaningful change accessible to all."
  }
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-800 overflow-hidden">
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
                  onClick={() => navigate("/projects")}
                  className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 rounded-full backdrop-blur-sm"
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </ImagesSlider>
        
        {/* Floating Stats - Fixed Alignment */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
          <div className="flex items-center justify-center space-x-12 text-white/90 backdrop-blur-sm bg-black/20 rounded-full px-10 py-6">
            <div className="flex flex-col items-center justify-center text-center min-w-[120px]">
              <div className="text-3xl font-bold leading-tight">4+</div>
              <div className="text-sm font-medium mt-1 whitespace-nowrap">Active Projects</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="flex flex-col items-center justify-center text-center min-w-[120px]">
              <div className="text-3xl font-bold leading-tight">500+</div>
              <div className="text-sm font-medium mt-1 whitespace-nowrap">Lives Impacted</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="flex flex-col items-center justify-center text-center min-w-[120px]">
              <div className="text-3xl font-bold leading-tight">3</div>
              <div className="text-sm font-medium mt-1 whitespace-nowrap">Years Experience</div>
            </div>
          </div>
        </div>
        
        {/* Mobile Stats */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
          <div className="flex items-center justify-center space-x-6 text-white/90 backdrop-blur-sm bg-black/20 rounded-full px-6 py-4">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-xl font-bold leading-tight">4+</div>
              <div className="text-xs font-medium mt-1">Projects</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-xl font-bold leading-tight">500+</div>
              <div className="text-xs font-medium mt-1">Lives</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-xl font-bold leading-tight">3</div>
              <div className="text-xs font-medium mt-1">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* About Enactus Section */}
      <AboutEnactus />

      {/* Enhanced Details Section */}
      <div className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover <span className="text-yellow-600">Enactus MNNIT</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where innovation meets impact, and ideas transform into sustainable solutions for a better tomorrow
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Projects Section */}
      <div className="pb-20 md:pb-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-yellow-600">Impact Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming communities through sustainable entrepreneurial solutions
            </p>
          </div>
          <ProjectCarousel />
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
          <LeadershipCards leaders={teamLeaders} />
        </div>
      </div>

    </div>
  );
};

export default HomePage;
