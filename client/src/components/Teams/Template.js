import React from "react";
import { motion } from "framer-motion";
import Imagecard from "./Imagecard";

const Template = ({ members, name, yr, url, email }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const membersData = members || name?.map((memberName, index) => ({
    name: memberName,
    year: yr[index],
    linkedin: url[index],
    email: email[index],
    image: null,
    position: 'Member'
  })) || [];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-8"
    >
      <div className="container mx-auto px-4">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membersData.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Imagecard
                member={member}
                name={member.name}
                yr={member.year}
                url={member.linkedin}
                email={member.email}
                image={member.image}
                position={member.position}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Template;
