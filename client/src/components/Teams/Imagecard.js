import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Calendar } from "lucide-react";
import Member1 from "../../assets/Teams/TeamMembers/ContentTeam/ShreyanshSingh.jpg";
import Member2 from "../../assets/Teams/TeamMembers/ContentTeam//RahulKharwar.jpg";
import Member3 from "../../assets/Teams/TeamMembers/ContentTeam//Shresth.jpg";
import Member4 from "../../assets/Teams/TeamMembers/ContentTeam//RoshanKumar.jpg";
import Member5 from "../../assets/Teams/TeamMembers/WebTeam/snehahaldiya.jpeg";
import Member6 from "../../assets/Teams/TeamMembers/WebTeam/MeenakshiGupta.png";
import Member7 from "../../assets/Teams/TeamMembers/WebTeam/ShivangiVerma.jpg";
import Member8 from "../../assets/Teams/TeamMembers/WebTeam/VanshanshPrajav.jpg";
import Member9 from "../../assets/Teams/TeamMembers/WebTeam/Utkarsh.jpg";
import Member10 from "../../assets/Teams/TeamMembers/ResearchDevelopmentTeam/NishanRajRegmi.jpeg";
import Member11 from "../../assets/Teams/TeamMembers/ResearchDevelopmentTeam/AjeetKumar.jpg";
import Member12 from "../../assets/Teams/TeamMembers/ResearchDevelopmentTeam/YashvardhanSingh.jpeg";
import Member13 from "../../assets/Teams/TeamMembers/ResearchDevelopmentTeam/AkshatMahanth.jpg";
import Member14 from "../../assets/Teams/TeamMembers/ResearchDevelopmentTeam/SHREYANDAS.jpeg";
import Member15 from "../../assets/Teams/TeamMembers/FieldOfficer/jatinChaudhary.jpeg";
import Member16 from "../../assets/Teams/TeamMembers/FieldOfficer/iqraabbasi.jpg";
import Member17 from "../../assets/Teams/TeamMembers/FieldOfficer/SattwikJana.jpeg";
import Member18 from "../../assets/Teams/TeamMembers/FieldOfficer/AnantPandey.jpeg";
import Member19 from "../../assets/Teams/TeamMembers/FieldOfficer/DivyaMohanKalhans.jpg";
import Member20 from "../../assets/Teams/TeamMembers/FieldOfficer/MITALISRIVASTAVA.jpeg";
import Member21 from "../../assets/Teams/TeamMembers/DesignTeam/Sanginibaingaha .jpeg";
import Member22 from "../../assets/Teams/TeamMembers/DesignTeam/DivyanshuPurbey.jpg";
import Member23 from "../../assets/Teams/TeamMembers/DesignTeam/SANYAGUPTA.jpg";
import Member24 from "../../assets/Teams/TeamMembers/DesignTeam/AparajitaSingh.jpg";
import Member25 from "../../assets/Teams/TeamMembers/MarketingTeam/HumanshiSingh.jpg";
import Member26 from "../../assets/Teams/TeamMembers/MarketingTeam/ShaghilJawed.jpg";
import Member27 from "../../assets/Teams/TeamMembers/MarketingTeam/Navya.jpg";
import Member28 from "../../assets/Teams/TeamMembers/MarketingTeam/UjjwalGupta.jpg";
import Member29 from "../../assets/Teams/TeamMembers/FieldOfficer/Aditya.jpeg";
import Member30 from "../../assets/Teams/TeamMembers/Shruti Mayank.JPG";
import Member31 from "../../assets/Teams/TeamMembers/AdyaSharma.jpg";
import Member32 from "../../assets/Teams/TeamMembers/Ayush Aman.jpeg";
import Member33 from "../../assets/Teams/TeamMembers/Himanshu Tripathi.jpeg";
import Member34 from "../../assets/Teams/TeamMembers/GawthamVellore.jpg";
import Member35 from "../../assets/Teams/TeamMembers/Shaurya Raj Srivastava.jpg";
import Member36 from "../../assets/Teams/TeamMembers/Aniket Shah.jpg";
import logo from "../../assets/Teams/TeamMembers/question_mark.jpg";
const Imagecard = ({ name, yr, url, email }) => {
  let imageSource;

  switch (name) {
    case "Shreyansh Singh":
      imageSource = Member1;
      break;
    case "Rahul Kharwar":
      imageSource = Member2;
      break;
    case "Shresth Gadhwala":
      imageSource = Member3;
      break;
    case "Roshan Kumar":
      imageSource = Member4;
      break;
    case "Sneha Haldiya":
      imageSource = Member5;
      break;
    case "Meenakshi Gupta":
      imageSource = Member6;
      break;
    case "Shivangi Verma":
      imageSource = Member7;
      break;
    case "Vanshansh Prajav":
      imageSource = Member8;
      break;
    case "Utkarsh Sharma":
      imageSource = Member9;
      break;
    case "Nishan Raj Regmi":
      imageSource = Member10;
      break;
    case "Ajeet Kumar":
      imageSource = Member11;
      break;
    case "Yashvardhan singh":
      imageSource = Member12;
      break;
    case "Akshat Mahanth":
      imageSource = Member13;
      break;
    case "Shreyan Das":
      imageSource = Member14;
      break;
    case "Jatin Chaudhary":
      imageSource = Member15;
      break;
    case "Iqra Abbasi":
      imageSource = Member16;
      break;
    case "Sattwik Jana":
      imageSource = Member17;
      break;
    case "Anant Pandey":
      imageSource = Member18;
      break;
    case "Divya Mohan Kalhans":
      imageSource = Member19;
      break;
    case "Mitali Srivastava":
      imageSource = Member20;
      break;
    case "Sangini baingaha":
      imageSource = Member21;
      break;
    case "Divyanshu Purbey":
      imageSource = Member22;
      break;
    case "Sanya Gupta":
      imageSource = Member23;
      break;
    case "Aparajita Singh":
      imageSource = Member24;
      break;
    case "Humanshi Singh":
      imageSource = Member25;
      break;
    case "Shaghil Jawed":
      imageSource = Member26;
      break;
    case "Navya Srivastava":
      imageSource = Member27;
      break;
    case "Ujjwal Gupta":
      imageSource = Member28;
      break;
    case "Aditya Roysha":
      imageSource = Member29;
      break;
    case "Shruti Mayank":
      imageSource = Member30;
      break;
    case "Adya Sharma":
      imageSource = Member31;
      break;
    case "Ayush Aman":
      imageSource = Member32;
      break;
    case "Himanshu Tripathi":
      imageSource = Member33;
      break;
    case "Gawtham Vellore":
      imageSource = Member34;
      break;
    case "Shaurya Raj Srivastava":
      imageSource = Member35;
      break;
    case "Aniket Shah":
      imageSource = Member36;
      break;

    default:
      imageSource = logo;
  }
  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageSource}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="font-bold text-2xl text-zinc-800 tracking-tight mb-4">
          {name}
        </h3>

        <div className="space-y-4">
          {/* <div className="flex items-center gap-2 text-zinc-600">
            <Calendar className="w-4 h-4 text-yellow-600" />
            <span className="text-sm">Batch of</span>
            <span className="font-semibold text-yellow-600">{yr}</span>
          </div> */}

          <div className="flex gap-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-yellow-600 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
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
      </div>
    </motion.div>
  );
};

export default Imagecard;
