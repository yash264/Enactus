// Leadership team images imports
import UtkarshSharma from '../assets/Teams/TeamMembers/WebTeam/Utkarsh.jpg';
import AdityaRoysha from '../images/roysha.jpeg';
import ShreyanshSingh from '../images/shreyansh.jpeg';

// Leadership team data
export const leadershipData = [
  {
    id: 1,
    src: UtkarshSharma,
    name: "Utkarsh Sharma",
    designation: "President, Enactus MNNIT",
    quote: "Leading with vision and passion, we transform ideas into impactful solutions that create lasting change in our communities.",
    email: "president@enactusmnnit.org",
    linkedin: "https://www.linkedin.com/in/utkarsh-sharma",
    department: "Leadership"
  },
  {
    id: 2,
    src: AdityaRoysha,
    name: "Aditya Roysha",
    designation: "Vice President, Enactus MNNIT",
    quote: "Innovation drives our mission as we coordinate diverse initiatives to empower entrepreneurs and foster sustainable development.",
    email: "vicepresident@enactusmnnit.org",
    linkedin: "https://www.linkedin.com/in/aditya-roysha",
    department: "Leadership"
  },
  {
    id: 3,
    src: ShreyanshSingh,
    name: "Shreyansh Singh",
    designation: "Technical Coordinator, Enactus MNNIT",
    quote: "Bridging technology and social impact, we develop scalable solutions that make meaningful change accessible to all.",
    email: "technical@enactusmnnit.org",
    linkedin: "https://www.linkedin.com/in/shreyansh-singh",
    department: "Technical"
  }
];

// Helper functions
export const getLeadershipData = () => leadershipData;

export const getLeaderById = (id) => {
  return leadershipData.find(leader => leader.id === id);
};

export const getLeadersByDepartment = (department) => {
  return leadershipData.filter(leader => leader.department === department);
};

export default leadershipData;
