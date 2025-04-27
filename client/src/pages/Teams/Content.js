import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Template from '../../components/Teams/Template';
import Department from '../../components/Teams/Department';
import { Users, UserCheck } from 'lucide-react';

const Content = () => {
  const [showPresent, setShowPresent] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen bg-background overflow-hidden pt-6 md:pt-16 lg:pt-20"
    >
      <Department tag="CONTENT TEAM" des="The storytellers behind every impactful narrative"/>
      
      <div className="container mx-auto px-4 py-12">
        {/* Toggle Section */}
        <motion.div 
          className="flex justify-center mb-16"
          variants={containerVariants}
        >
          <div className="bg-white p-2 rounded-2xl shadow-lg inline-flex gap-2">
            <button
              onClick={() => setShowPresent(true)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm
                transition-all duration-300 
                ${showPresent 
                  ? 'bg-yellow-500 text-black shadow-lg scale-105' 
                  : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100'
                }
              `}
            >
              <Users className="w-4 h-4" />
              Present Team
            </button>
            <button
              onClick={() => setShowPresent(false)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm
                transition-all duration-300
                ${!showPresent 
                  ? 'bg-yellow-500 text-black shadow-lg scale-105' 
                  : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100'
                }
              `}
            >
              <UserCheck className="w-4 h-4" />
              Alumni
            </button>
          </div>
        </motion.div>

        {/* Team Members Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={showPresent ? 'present' : 'alumni'}
            initial={{ opacity: 0, x: showPresent ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: showPresent ? -100 : 100 }}
            transition={{ duration: 0.5 }}
          >
            {showPresent ? (
              <Template
                name={["Shreyansh Singh", "Rahul Kharwar", "Shresth Gadhwala", "Roshan Kumar"]}
                yr={["2025", "2026", "2026", "2026"]}
                url={["https://www.linkedin.com/in/shreyansh-singh-59338b230", "https://www.linkedin.com/in/rahul-kharwar-87775526a/", "https://www.linkedin.com/in/shresth2301/", "https://www.linkedin.com/in/roshan-kumar-35579a1b7/"]}
                email={["singhshreyansh718@gmail.com","rahulkharwar250704@gmail.com","shresthgadhwala2301@gmail.com","krroshan002@gmail.com"]}
              />
            ) : (
              <Template
                name={["Gawtham Vellore", "Adya Sharma", "Himanshu Tripathi", "Shruti Mayank"]}
                yr={["2019", "2021", "2009", "2022"]}
                url={["/", "/", "/", "/"]}
                email={["singhshreyansh718@gmail.com","/","/","/"]}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Content;