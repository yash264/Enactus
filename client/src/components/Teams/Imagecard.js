import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Calendar, User } from "lucide-react";
import defaultImage from "../../assets/Teams/TeamMembers/question_mark.jpg";

const Imagecard = ({ member, name, yr, url, email, image, position }) => {
  // Use member object if provided (new structure), otherwise use individual props (legacy)
  const memberData = member || { name, year: yr, linkedin: url, email, image, position };
  
  // Use the image directly from member data or fallback to default
  const imageSource = memberData.image || defaultImage;

  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageSource}
          alt={memberData.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="font-bold text-2xl text-zinc-800 tracking-tight mb-2">
          {memberData.name}
        </h3>

        <div className="space-y-4">
          {/* Position Badge */}
          {memberData.position && (
            <div className="flex items-center gap-2 text-zinc-600">
              <User className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-600">{memberData.position}</span>
            </div>
          )}

          {/* Year */}
          <div className="flex items-center gap-2 text-zinc-600">
            <Calendar className="w-4 h-4 text-yellow-600" />
            <span className="text-sm">Batch of</span>
            <span className="font-semibold text-yellow-600">{memberData.year}</span>
          </div>

          <div className="flex gap-3">
            <a
              href={memberData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-yellow-600 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a
              href={`mailto:${memberData.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-yellow-600 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Imagecard;