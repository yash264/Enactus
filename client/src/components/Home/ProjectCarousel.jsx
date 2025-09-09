import { Carousel } from "./UI/ProjectsCarousel";

import samveshImage from '../../assets/projects/images/samvesh.jpg';
import neerImage from '../../assets/projects/images/neer.jpg';
import moonjImage from '../../assets/projects/images/moonj.jpg';
import sahyogImage from '../../assets/projects/images/sahyog.jpg';

export default function ProjectCarousel() {
  const slideData = [
    {
      title: "Samvesh",
      button: "Explore Samvesh",
      src: samveshImage,
    },
    {
      title: "Neer",
      button: "Explore Neer",
      src: neerImage,
    },
    {
      title: "Moonj",
      button: "Explore Moonj",
      src: moonjImage,
    },
    {
      title: "Sahyog",
      button: "Explore Sahyog",
      src: sahyogImage,
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
