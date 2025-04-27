import React from 'react';
import { Link } from "react-router-dom";
import { Code, Pencil, Users, Megaphone } from 'lucide-react';
import Reserach from '../assets/Teams/research.webp'
import Design from '../assets/Teams/DESIGN.jpg'
import Sponsorship from '../assets/Teams/SPONSORSHIP.jpg'
import Content from '../assets/Teams/content.jpg'
import Web from '../assets/Teams/web.jpg'
import Fild from '../assets/Teams/field.jpg'
const departments = [
  {
    title: "WEB TEAM",
    path: "/webTeam",
    image: Web,
    icon: Code,
    description: "Building digital experiences"
  },
  {
    title: "RESEARCH AND DEVELOPMENT",
    path: "/reserchAndDevelopment",
    image: Reserach,
    icon: Code,
    description: "Innovating for tomorrow"
  },
  {
    title: "CONTENT TEAM",
    path: "/contentDepartment",
    image: Content,
    icon: Pencil,
    description: "Crafting compelling stories"
  },
  {
    title: "FIELD OFFICER",
    path: "/fieldOfficer",
    image: Fild,
    icon: Users,
    description: "Making impact on ground"
  },
  {
    title: "DESIGN TEAM",
    path: "/designDepartment",
    image: Design,
    icon: Pencil,
    description: "Creating visual excellence"
  },
  {
    title: "MARKETING AND SPONSORSHIP",
    path: "/marketingAndSponcership",
    image: Sponsorship,
    icon: Megaphone,
    description: "Driving growth and partnerships"
  }
];

const DepartmentCard = ({ title, path, image, icon: Icon, description }) => {
  return (
    <Link 
      to={path}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-zinc-900/20 opacity-60 transition-opacity duration-300 group-hover:opacity-70" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="mb-2 flex items-center gap-2">
          <Icon className="h-5 w-5 text-yellow-400" />
          <p className="text-sm font-medium text-yellow-400">{description}</p>
        </div>
        
        <h2 className="text-2xl font-bold tracking-tight">
          {title}
        </h2>
        
        <div className="mt-4 h-0.5 w-12 bg-yellow-600 transition-all duration-300 group-hover:w-24" />
      </div>
    </Link>
  );
};

const Selection = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden pt-6 md:pt-16 lg:pt-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight mb-3">
            Our Departments
          </h1>
          <p className="text-xl md:text-base text-zinc-700 italic">
            Explore our specialized teams working together to drive innovation and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <DepartmentCard key={index} {...dept} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selection;