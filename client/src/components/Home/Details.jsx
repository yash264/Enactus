import React from "react";
import { BentoGrid, BentoGridItem } from "./UI/BentoGrid.jsx";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconUsers,
  IconTarget,
  IconBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils.js";
import { asset } from "../../images/asset.js";
import { Link } from "react-router-dom";

export function Details() {
  return (
    <div className="w-full">
      <BentoGrid className="max-w-7xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("group cursor-pointer", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 2,
      transition: { duration: 0.3 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[8rem] bg-gradient-to-br from-blue-50 to-indigo-100 flex-col space-y-3 p-4 rounded-lg"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-blue-200 p-3 items-center space-x-3 bg-white shadow-sm"
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex-shrink-0 flex items-center justify-center">
          <IconBolt className="h-4 w-4 text-white" />
        </div>
        <div className="w-full bg-gradient-to-r from-gray-200 to-gray-300 h-4 rounded-full"></div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-2xl border border-blue-200 p-3 items-center space-x-3 w-4/5 ml-auto bg-white shadow-sm"
      >
        <div className="w-full bg-gradient-to-r from-gray-200 to-gray-300 h-4 rounded-full"></div>
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex-shrink-0 flex items-center justify-center">
          <IconTarget className="h-4 w-4 text-white" />
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-blue-200 p-3 items-center space-x-3 bg-white shadow-sm"
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center">
          <IconUsers className="h-4 w-4 text-white" />
        </div>
        <div className="w-full bg-gradient-to-r from-gray-200 to-gray-300 h-4 rounded-full"></div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[8rem] bg-gradient-to-br from-yellow-50 to-orange-100 flex-col items-center justify-center p-4 rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 to-orange-200/50"></div>
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-lg"
      >
        <img 
          className="object-cover w-full h-full rounded-xl border-2 border-white shadow-md" 
          src={asset.en6}
          alt="Enactus Products"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
            <span className="text-sm font-semibold">Shop Now</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[8rem] bg-gradient-to-br from-red-50 to-pink-100 flex-col items-center justify-center p-4 rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-pink-200/50"></div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full h-full"
      >
        <iframe
          className="w-full h-full rounded-xl shadow-lg border-2 border-white"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Enactus Impact"
          src="https://www.youtube.com/embed/1U3zF6ll27E?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fenactus.org"
        ></iframe>
        <div className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-full shadow-lg">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

const SkeletonFour = () => {
  const variants = {
    initial: { x: 15, rotate: -3 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -15, rotate: 3 },
    hover: { x: 0, rotate: 0 },
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[8rem] bg-gradient-to-br from-green-50 to-emerald-100 flex-row space-x-3 p-4 rounded-lg"
    >
      <motion.div
        variants={variants}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border-2 border-green-200 flex flex-col items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
      >
        <div className="relative">
          <img
            src={asset.utkarsh}
            alt="Utkarsh Sharma"
            height="100"
            width="100"
            className="rounded-full h-12 w-12 border-2 border-yellow-500 shadow-md"
          />
          <div className="absolute -top-1 -right-1 bg-green-500 rounded-full w-4 h-4 border-2 border-white"></div>
        </div>
        <p className="text-sm text-center font-bold text-gray-800 mt-3">
          Utkarsh Sharma
        </p>
        <Link to="/team" className="mt-2">
          <span className="inline-block border border-emerald-500 bg-emerald-100 text-emerald-700 text-xs rounded-full px-3 py-1 font-medium hover:bg-emerald-200 transition-colors">
            Meet Team
          </span>
        </Link>
      </motion.div>
      
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 border-2 border-green-200 flex flex-col items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
        <div className="relative">
          <img
            src={asset.roysha}
            alt="Aditya Roysha"
            height="100"
            width="100"
            className="rounded-full h-12 w-12 border-2 border-blue-500 shadow-md"
          />
          <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full w-4 h-4 border-2 border-white"></div>
        </div>
        <p className="text-sm text-center font-bold text-gray-800 mt-3">
          Aditya Roysha
        </p>
        <Link to="/team" className="mt-2">
          <span className="inline-block border border-blue-500 bg-blue-100 text-blue-700 text-xs rounded-full px-3 py-1 font-medium hover:bg-blue-200 transition-colors">
            Meet Team
          </span>
        </Link>
      </motion.div>
      
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border-2 border-green-200 flex flex-col items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
      >
        <div className="relative">
          <img
            src={asset.shreyansh}
            alt="Shreyansh Singh"
            height="100"
            width="100"
            className="rounded-full h-12 w-12 border-2 border-purple-500 shadow-md"
          />
          <div className="absolute -top-1 -right-1 bg-purple-500 rounded-full w-4 h-4 border-2 border-white"></div>
        </div>
        <p className="text-sm text-center font-bold text-gray-800 mt-3">
          Shreyansh Singh
        </p>
        <Link to="/team" className="mt-2">
          <span className="inline-block border border-purple-500 bg-purple-100 text-purple-700 text-xs rounded-full px-3 py-1 font-medium hover:bg-purple-200 transition-colors">
            Meet Team
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 8,
      rotate: 1,
      transition: { duration: 0.3 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -8,
      rotate: -1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[8rem] bg-gradient-to-br from-purple-50 to-indigo-100 flex-col space-y-3 p-4 rounded-lg"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-purple-200 p-3 items-start space-x-3 bg-white shadow-sm"
      >
        <img
          src={asset.roysha}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 border-2 border-purple-500"
        />
        <div className="flex-1">
          <p className="text-xs text-gray-800 font-medium mb-1">
            "Enactus projects create sustainable change."
          </p>
          <div className="w-full bg-gradient-to-r from-purple-200 to-indigo-200 h-2 rounded-full"></div>
        </div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-2xl border border-purple-200 p-3 items-center justify-end space-x-3 w-4/5 ml-auto bg-white shadow-sm"
      >
        <p className="text-xs text-gray-800 font-medium">Join our mission!</p>
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex-shrink-0 flex items-center justify-center">
          <IconBolt className="h-4 w-4 text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Discover Enactus",
    description: (
      <span className="text-sm text-gray-600">
        Explore our mission to create positive change through entrepreneurial action and community impact.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1 hover:shadow-xl transition-all duration-300",
    icon: <IconClipboardCopy className="h-5 w-5 text-blue-600" />,
  },
  {
    title: "Support Our Cause",
    description: (
      <span className="text-sm text-gray-600">
        Purchase Enactus products and directly contribute to our sustainable development projects.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1 hover:shadow-xl transition-all duration-300",
    icon: <IconFileBroken className="h-5 w-5 text-orange-600" />,
  },
  {
    title: "Our Impact Story",
    description: (
      <span className="text-sm text-gray-600">
        Watch how we're transforming lives and communities through innovative solutions and partnerships.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1 hover:shadow-xl transition-all duration-300",
    icon: <IconSignature className="h-5 w-5 text-red-600" />,
  },
  {
    title: "Meet Our Leaders",
    description: (
      <span className="text-sm text-gray-600">
        Connect with the passionate individuals driving innovation and positive change at Enactus MNNIT.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2 hover:shadow-xl transition-all duration-300",
    icon: <IconTableColumn className="h-5 w-5 text-green-600" />,
  },
  {
    title: "Join the Movement",
    description: (
      <span className="text-sm text-gray-600">
        Be part of a global community creating lasting impact through entrepreneurship and innovation.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1 hover:shadow-xl transition-all duration-300",
    icon: <IconBoxAlignRightFilled className="h-5 w-5 text-purple-600" />,
  },
];
