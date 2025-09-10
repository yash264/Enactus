"use client";

import { motion } from "framer-motion";
import { 
  IconTarget, 
  IconUsers, 
  IconBolt, 
  IconWorld 
} from '@tabler/icons-react';

const AboutEnactus = () => {
  const features = [
    {
      icon: IconTarget,
      title: "Our Mission",
      description: "Empowering communities through entrepreneurial action and innovative solutions"
    },
    {
      icon: IconUsers,
      title: "Global Network",
      description: "Part of a worldwide community of students creating positive impact"
    },
    {
      icon: IconBolt,
      title: "Innovation",
      description: "Developing sustainable solutions for real-world challenges"
    },
    {
      icon: IconWorld,
      title: "Social Impact",
      description: "Transforming lives and communities through meaningful projects"
    }
  ];

  return (
    <div className="py-20 md:py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <IconBolt className="w-4 h-4 mr-2" />
            About Enactus
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Where <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">Ideas</span> Meet
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Enactus is a global organization that connects students, academics, and business leaders who are committed to using entrepreneurial action to improve the quality of life and standard of living for people in need.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Entrepreneurial Action for a Better World
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Enactus MNNIT, we believe in the power of young minds to create sustainable change. Through innovative projects and community partnerships, we tackle pressing social, environmental, and economic challenges.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our approach combines business principles with social consciousness, ensuring that our solutions are not just impactful, but also sustainable and scalable.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-yellow-600 mb-2">37+</div>
                <div className="text-sm text-gray-600 font-medium">Countries</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">1800+</div>
                <div className="text-sm text-gray-600 font-medium">Universities</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
              <div className="relative text-white text-center space-y-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconWorld className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold">Global Impact</h4>
                <p className="text-lg opacity-90">
                  "Enactus is about seeing an opportunity for positive change and having the courage to act on it."
                </p>
                <div className="text-sm opacity-75">
                  - Enactus Vision
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 h-full">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutEnactus;
