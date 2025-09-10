import React from 'react';
import { motion } from 'framer-motion';
import { 
  IconTarget, 
  IconUsers, 
  IconBolt, 
  IconWorld, 
  IconHeart,
  IconTrendingUp,
  IconStar,
  IconRocket,
  IconLeaf,
  IconShield
} from '@tabler/icons-react';

const AboutUs = () => {
  const values = [
    {
      icon: IconTarget,
      title: "Mission Driven",
      description: "Creating sustainable impact through entrepreneurial action",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: IconUsers,
      title: "Community First",
      description: "Building stronger communities through collaborative solutions",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: IconBolt,
      title: "Innovation",
      description: "Pioneering creative solutions for complex social challenges",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: IconWorld,
      title: "Global Impact",
      description: "Connecting local action with worldwide positive change",
      color: "from-pink-400 to-red-500"
    }
  ];

  const stats = [
    { number: "4+", label: "Active Projects", icon: IconRocket },
    { number: "500+", label: "Lives Impacted", icon: IconHeart },
    { number: "25+", label: "Team Members", icon: IconUsers },
    { number: "3", label: "Years Experience", icon: IconStar }
  ];

  const journey = [
    {
      year: "2021",
      title: "Foundation",
      description: "Enactus MNNIT was established with a vision to create positive social impact",
      icon: IconStar
    },
    {
      year: "2022",
      title: "First Projects",
      description: "Launched our initial community development and sustainability projects",
      icon: IconLeaf
    },
    {
      year: "2023",
      title: "Expansion",
      description: "Expanded our reach and developed partnerships with local organizations",
      icon: IconTrendingUp
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Pioneered technology-driven solutions for social challenges",
      icon: IconShield
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-400 rounded-full blur-2xl opacity-15"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                <IconHeart className="w-4 h-4 mr-2" />
                About Enactus MNNIT
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Empowering
                <br />
                <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Change
                </span>
                <br />
                Makers
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                We are a passionate community of students, innovators, and change-makers at MNNIT Allahabad, 
                dedicated to creating sustainable solutions for social, environmental, and economic challenges 
                through entrepreneurial action.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Our Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300"
                >
                  Join Our Team
                </motion.button>
              </div>
            </motion.div>

            {/* Video/Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Video Container with Enhanced Styling */}
                <div className="relative bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-3xl">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <iframe 
                      className="w-full h-80 md:h-96" 
                      src="https://www.youtube.com/embed/1U3zF6ll27E?controls=1&rel=0&modestbranding=1"
                      title="Enactus Impact" 
                      frameBorder="0" 
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <IconRocket className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
=======
    <div className="relative min-h-screen bg-background overflow-hidden pt-6 md:pt-16 lg:pt-20" >
    
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight mb-3">
          Know About Us !!
        </h1>
        <p className="text-xl md:text-base text-zinc-700 italic">
          A little more about Enactus Allahabad
        </p>
>>>>>>> 600a2fcca2a64463a78a27213611abc10a14c107
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our mission and drive our commitment to creating positive change
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to making a significant impact in our community
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>

            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                    index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'
                  }`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join us in creating sustainable solutions and empowering communities through entrepreneurial action
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Our Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
