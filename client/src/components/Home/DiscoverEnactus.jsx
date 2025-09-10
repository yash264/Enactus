import React from "react";
import { motion } from "framer-motion";
import { 
  IconTarget, 
  IconUsers, 
  IconBulb, 
  IconHeart, 
  IconAward,
  IconWorld,
  IconRocket
} from "@tabler/icons-react";

const DiscoverEnactus = () => {
  const features = [
    {
      icon: IconTarget,
      title: "Our Mission",
      description: "Empowering entrepreneurial leaders to create economic opportunity and drive social innovation.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: IconUsers,
      title: "Community Impact",
      description: "Building sustainable communities through collaborative entrepreneurial action and innovation.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: IconBulb,
      title: "Innovation Hub",
      description: "Fostering creative solutions that address real-world challenges with sustainable impact.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: IconHeart,
      title: "Social Responsibility",
      description: "Committed to creating positive change through responsible business practices and community engagement.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    {
      icon: IconRocket,
      number: "4+",
      label: "Active Projects",
      description: "Innovative solutions creating lasting impact"
    },
    {
      icon: IconUsers,
      number: "500+",
      label: "Lives Impacted",
      description: "Communities transformed through our initiatives"
    },
    {
      icon: IconAward,
      number: "3+",
      label: "Years of Impact",
      description: "Continuous dedication to social entrepreneurship"
    },
    {
      icon: IconWorld,
      number: "10+",
      label: "Partnerships",
      description: "Collaborative networks for greater impact"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full text-orange-600 text-sm md:text-base font-semibold border border-yellow-400/20 backdrop-blur-sm">
              About Our Organization
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Enactus MNNIT
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Where innovation meets impact, and ideas transform into sustainable solutions for a better tomorrow
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-white to-orange-50/50"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Impact in{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Numbers
                </span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Measuring success through meaningful metrics that reflect our commitment to positive change
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center group cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {stat.number}
                  </div>
                  
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-gray-600 leading-relaxed">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
          >
            <IconRocket className="w-5 h-5" />
            <span>Join Our Mission</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default DiscoverEnactus;
