import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
const Imagecard = ({ name, yr, url, email, imageSrc, role }) => {
  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Role overlay */}
        {role && (
          <div className="absolute bottom-0 w-full bg-black/40 text-white text-center py-2 text-sm font-semibold">
            {role}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-bold text-2xl text-zinc-800 tracking-tight mb-4">
          {name}
        </h3>

        <div className="flex gap-3 justify-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-yellow-600 hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-4 h-4 " />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>

          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-yellow-600 hover:text-white transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Email</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Imagecard;
