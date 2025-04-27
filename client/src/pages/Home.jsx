import ImagesSlider from "../components/Home/ImagesSlider.jsx";
import AnimatedTestimonials from "../components/Home/AnimatedTestimonials.jsx";
import React from "react";
import HeroParallax, { Header } from "../components/Home/AnimateSlider.jsx";
import { FlipWords } from "../components/Home/UI/Flip-words.jsx";
import Stats from "../components/Home/Stats.jsx";

import img1 from "../assets/Home/portfolio-1.jpg";
import img2 from "../assets/Home/portfolio-2.jpg";
import img3 from "../assets/Home/portfolio-3.jpg";
import News from "../components/Home/News.jsx";
import { ProjectCarousel } from "../components/Home/ProjectCarousel.jsx";
import { useNavigate } from "react-router-dom";
import { Details } from "../components/Home/Details.jsx";

const images = [img1, img2, img3, img1, img2, img3];

const words = ["innovate", "lead", "impact", "transform"];

const HomePage = () => {
  const navigate = useNavigate();
  const handleJoinUs = () => {
    navigate("/about");
  };
  return (
    <div className="bg-gray-50 text-gray-800">
      <ImagesSlider images={images} autoplay={true} direction="up" className="h-[100vh] w-full">
        <div className="h-full z-50 flex flex-col justify-center items-center px-4">
          <div className="text-4xl md:text-7xl mx-auto font-semibold text-gray-100">
            Empower
            <FlipWords words={words} /> <br />
            with Enactus MNNIT
          </div>
          <button
            onClick={handleJoinUs}
            className="mt-6 px-4 py-2 text-lg md:text-xl text-white bg-yellow-500 hover:bg-yellow-600 transform transition-all duration-300 rounded-lg"
          >
            Explore
          </button>
        </div>
      </ImagesSlider>

      <div className="py-20 md:py-24 lg:py-20 h-full"><Stats/></div>
      <div className="py-20 md:py-24 lg:py-16 h-full"><Details/></div>
      <div className="pb-16 md:pb-24 lg:pb-28 h-full"><ProjectCarousel /></div>

      {/* <div className="mt-16 mb-20 px-2 py-2">
        <AnimatedTestimonials autoplay={true} />
      </div> */}

      <div>
        <News />
      </div>
    </div>
  );
};

export default HomePage;
