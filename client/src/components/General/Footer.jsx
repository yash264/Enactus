import React from "react";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp
} from 'react-icons/fa';
import enactusLogo from '../../assets/logo/Enactus.png';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/enactusmnnit/",
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/enactus_mnnit/",
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: FaTwitter,
      href: "https://www.instagram.com/enactus_mnnit/",
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      icon: FaEnvelope,
      href: "mailto:enactusmnnitallahabad@gmail.com",
      label: "Email",
      color: "hover:text-yellow-500"
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/project" },
    { name: "Team", href: "/team" },
    { name: "E-Cart", href: "/ecart" }
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "MIT License", href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-r from-zinc-800 to-zinc-900 text-white mt-20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src={enactusLogo}
                alt="Enactus Logo"
                className="w-40 h-auto"
              />
            </div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Don't limit your challenges, challenge your limit.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-yellow-500 hover:scale-110 ${social.color} group`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:text-zinc-900 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Contact Us
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Motilal Nehru National Institute of Technology</p>
                  <p>Teliarganj, Allahabad</p>
                  <p>Uttar Pradesh (211004), India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-300">+91 836 812 8141</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-300">enactusmnnitallahabad@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-500 transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-yellow-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enactus Values */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Our Values
            </h3>
            
            <div className="space-y-4">
              <div className="bg-zinc-700/50 rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="text-gray-300">
                  <span className="text-yellow-400 font-bold">En</span>trepreneurial - igniting business innovation with integrity and passion.
                </p>
              </div>
              
              <div className="bg-zinc-700/50 rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="text-gray-300">
                  <span className="text-yellow-400 font-bold">Act</span>ion - the experience of social impact that sparks social enterprise.
                </p>
              </div>
              
              <div className="bg-zinc-700/50 rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="text-gray-300">
                  <span className="text-yellow-400 font-bold">Us</span> - student, academic and business leaders collaborating to create a better world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2025 Enactus MNNIT-Allahabad. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">Made with ❤️ by Enactus MNNIT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 text-zinc-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 group z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5 mx-auto group-hover:animate-bounce" />
      </button>
    </footer>
  );
}

export default Footer;
