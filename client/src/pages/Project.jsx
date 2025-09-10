import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconArrowLeft, 
  IconExternalLink, 
  IconUsers, 
  IconTarget,
  IconTrendingUp,
  IconHeart,
  IconLeaf,
  IconDroplet,
  IconHandRock
} from '@tabler/icons-react';
import Webpage from '../components/Projects/Webpage';

import samveshImage from '../assets/projects/images/samvesh.jpg';
import neerImage from '../assets/projects/images/neer.jpg';
import moonjImage from '../assets/projects/images/moonj.jpg';
import sahyogImage from '../assets/projects/images/sahyog.jpg';

const Project = () => {
  const [activeProject, setActiveProject] = useState('');
  const [visible, setInvisible] = useState(true);

  const handleClick = (project) => {
    setActiveProject(project);
    setInvisible(false);
  };

  const goBack = () => {
    setInvisible(true);
  };

  const projectsData = {
    samvesh: {
      title: "Samvesh",
      subtitle: "Bridging Rural-Urban Divide",
      description: "Connecting rural artisans with urban markets through sustainable trade practices and digital platforms.",
      image: samveshImage,
      icon: IconUsers,
      impact: "50+ Artisans Empowered",
      status: "Active",
      category: "Social Enterprise",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    neer: {
      title: "Neer",
      subtitle: "Clean Water Initiative",
      description: "Providing sustainable water solutions and promoting water conservation in rural communities.",
      image: neerImage,
      icon: IconDroplet,
      impact: "200+ Lives Impacted",
      status: "Active",
      category: "Environmental",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50"
    },
    moonj: {
      title: "Moonj",
      subtitle: "Sustainable Crafts",
      description: "Reviving traditional moonj grass crafts while creating sustainable livelihoods for rural women.",
      image: moonjImage,
      icon: IconLeaf,
      impact: "30+ Women Trained",
      status: "Active",
      category: "Sustainability",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    sahyog: {
      title: "Sahyog",
      subtitle: "Community Support",
      description: "Building stronger communities through collaborative support systems and resource sharing.",
      image: sahyogImage,
      icon: IconHandRock,
      impact: "100+ Families Supported",
      status: "Active",
      category: "Community Development",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    }
  };

  const stats = [
    { icon: IconTarget, number: "4+", label: "Active Projects" },
    { icon: IconUsers, number: "500+", label: "Lives Impacted" },
    { icon: IconTrendingUp, number: "25+", label: "Partners" },
    { icon: IconHeart, number: "3", label: "Years Impact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-10"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Back Button */}
      <AnimatePresence>
        {!visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={goBack}
            className="fixed top-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-white shadow-lg rounded-full hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-yellow-300 group"
          >
            <IconArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-yellow-600 transition-colors duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {visible ? (
          <motion.div
            key="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            {/* Header Section */}
            <div className="container mx-auto px-4 py-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <IconTarget className="w-4 h-4 mr-2" />
                  Our Impact Projects
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  Transforming
                  <br />
                  <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    Communities
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Discover our innovative projects that create sustainable solutions for social, 
                  environmental, and economic challenges in our communities.
                </p>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {Object.entries(projectsData).map(([key, project], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    onClick={() => handleClick(key)}
                    className="group cursor-pointer"
                  >
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-20`}></div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                            {project.status}
                          </span>
                        </div>

                        {/* Project Icon */}
                        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                            <project.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Hover Button */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                            <IconExternalLink className="w-5 h-5 text-gray-700" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        {/* Category */}
                        <div className="text-sm font-semibold text-yellow-600 mb-2 uppercase tracking-wide">
                          {project.category}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        {/* Subtitle */}
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">
                          {project.subtitle}
                        </h4>
                        
                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Impact Badge */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 bg-gradient-to-br ${project.gradient} rounded-full`}></div>
                            <span className="text-sm font-semibold text-gray-700">{project.impact}</span>
                          </div>
                          
                          {/* Arrow */}
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-yellow-100 transition-colors duration-300">
                            <IconExternalLink className="w-4 h-4 text-gray-600 group-hover:text-yellow-600 transition-colors duration-300" />
                          </div>
                        </div>

                        {/* Decorative Line */}
                        <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                      </div>

                      {/* Hover Effect Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-center mt-20"
              >
                <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-3xl p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Want to Make an Impact?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                      Join us in creating sustainable solutions for a better tomorrow
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get Involved
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="project-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Webpage Project={activeProject} color="yellow" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
