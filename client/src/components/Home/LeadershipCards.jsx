"use client";

import { motion } from "framer-motion";

const LeadershipCards = ({ leaders }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="group relative"
          >
            {/* Card Container */}
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Image Container */}
              <div className="relative p-6 pb-4">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  {/* Image Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 scale-110 group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Profile Image */}
                  <img
                    src={leader.src}
                    alt={leader.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg z-10"
                  />
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white z-20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative px-6 pb-6 text-center z-10">
                {/* Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {leader.name}
                </h3>
                
                {/* Designation */}
                <p className="text-sm font-semibold text-yellow-600 mb-3 uppercase tracking-wide">
                  {leader.designation.split(',')[0]}
                </p>
                
                {/* Organization */}
                <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Enactus MNNIT</span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>

                {/* Decorative Element */}
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipCards;
