import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/Home/img1.jpg";
import img2 from "../assets/Home/img2.jpg";
import img3 from "../assets/Home/img3.jpg";
import img4 from "../assets/Home/img4.jpg";
import img5 from "../assets/Home/img5.jpg";

import ImagesSlider from "../components/Home/ImagesSlider.jsx";
import FlipWords from "../components/Home/UI/FlipWords.jsx";
import TextGenerate from "../components/Home/UI/TextGenerate.jsx";
import Stats from "../components/Home/Stats.jsx";
import Details from "../components/Home/Details.jsx";
import ProjectCarousel from "../components/Home/ProjectCarousel.jsx";
import News from "../components/Home/News.jsx";
import TeamCard from "../components/Home/TeamCard.jsx";

const images = [img1, img2, img3, img4, img5];
const words = ["innovate", "lead", "impact", "transform"];

const generateWord = "Enactus is the world's largest experiential learning platform dedicated to creating a better world while developing the next generation of entrepreneurial leaders and social innovators. The Enactus network of global business, academic and student leaders are unified by our vision—to create a better, more sustainable world.";


const HomePage = () => {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 mt-8 text-gray-800">

      <ImagesSlider images={images} autoplay={true} direction="up" className="h-[100vh] w-full">
        <div className="h-full z-50 flex flex-col justify-center items-center px-4">
          <div className="text-4xl md:text-7xl mx-auto font-semibold text-gray-100">
            Empower
            <FlipWords words={words} /> <br />
            with Enactus MNNIT
          </div>
          <button
            onClick={handleJoinUs}
            className="mt-6 px-4 py-2 text-lg md:text-xl text-black bg-yellow-500 hover:bg-yellow-600 transform transition-all duration-300 rounded-lg"
          >
            Explore
          </button>
        </div>
      </ImagesSlider>


      <div className="py-20 md:py-24 lg:py-20 h-full">
        <Stats />
      </div>

      <div className="py-20 md:py-24 lg:py-20 h-full">
        <div className="max-w-4xl mx-auto px-6">
          <strong className="text-2xl text-indigo-600"> ABOUT ENACTUS </strong>
          <TextGenerate generateWord={generateWord} />
        </div>
      </div>

      <div className="py-20 md:py-24 lg:py-16 h-full">
        <Details />
      </div>

      <div className="pb-16 md:pb-24 lg:pb-28 h-full">
        <ProjectCarousel />
      </div>

      <div className="pb-16 md:pb-24 lg:pb-28 h-full text-center">
        <strong className="text-2xl text-indigo-600"> MEET OUR TEAM</strong>
        <TeamCard />
      </div>

      <div className="pb-16 md:pb-24 lg:pb-28 h-full">
        <News />
      </div>

    </div>
  );
};

export default HomePage;
