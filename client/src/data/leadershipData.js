// Leadership team images imports
import Dev_Mani_Tripathi from "../assets/Home/Team_Leaders/Dev_Mani_Tripathi.jpg";
import Jatin_Chaudhary from "../assets/Home/Team_Leaders/Jatin_Chaudhary.jpg";
import Shaghil_Jawed from "../assets/Home/Team_Leaders/Shaghil_Jawed.jpg";
import Akshat_Mahanth from "../assets/Home/Team_Leaders/Akshat_Mahanth.jpg";

// Leadership team data
export const leadershipData = [
  {
    id: 1,
    src: Jatin_Chaudhary,
    name: " Jatin Chaudhary",
    designation: "President, Enactus MNNIT",
    quote:
      "Leading with vision and passion, we transform ideas into impactful solutions that create lasting change in our communities.",
    email: "chaudharyjatin205@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/jatinchaudhary20?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    department: "Leadership",
  },
  {
    id: 2,
    src: Shaghil_Jawed,
    name: "Shaghil Jawed",
    designation: "Vice President, Enactus MNNIT",
    quote:
      "Innovation drives our mission as we coordinate diverse initiatives to empower entrepreneurs and foster sustainable development.",
    email: "shaghiljawed76@gmail.com",
    linkedin: "https://www.linkedin.com/in/shaghil-jawed/",
    department: "Leadership",
  },
  {
    id: 3,
    src: Dev_Mani_Tripathi,
    name: "Dev Mani Tripathi",
    designation: "Secretary, Enactus MNNIT",
    quote:
      "Bridging technology and social impact, we develop scalable solutions that make meaningful change accessible to all.",
    email: "devmanit311@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/dev-mani-tripathi-70221227b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    department: "Leadership",
  },
  {
    id: 4,
    src: Akshat_Mahanth,
    name: "Akshat Mahanth",
    designation: "Treasurer, Enactus MNNIT",
    quote:
      "Treasurer of Enactus MNNIT, responsible for managing finances and ensuring smooth execution of projects.",
    email: "akshatmahantham@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/akshat-mahanth-b1262924b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    department: "Leadership",
  },
];

// Helper functions
export const getLeadershipData = () => leadershipData;

export const getLeaderById = (id) => {
  return leadershipData.find((leader) => leader.id === id);
};

export const getLeadersByDepartment = (department) => {
  return leadershipData.filter((leader) => leader.department === department);
};

export default leadershipData;
