import React, { useState, useEffect, useRef } from 'react';
import enactusNavbarLogo from '../../assets/logo/Enactus.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const Links = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Projects', link: '/project' },
    { name: 'Team', link: '/team' },
    { name: 'ContactUs', link: '#contactUs' },
    { name: 'E Cart', link: '/ecart' },
    { name: 'Enactus Worldwide', link: 'https://enactus.org/' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !burgerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img src={enactusNavbarLogo} alt="Enactus Logo" className="h-10 md:h-14 xl:h-16" />
        </div>

        <div className="md:hidden flex items-center" ref={burgerRef}>
          <button
            onClick={toggleMenu}
            className="focus:outline-none flex flex-col space-y-1 relative z-50"
          >
            <span
              className={`h-[2px] w-6 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
                }`}
            ></span>
            <span
              className={`h-[2px] w-6 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''
                }`}
            ></span>
            <span
              className={`h-[2px] w-6 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                }`}
            ></span>
          </button>
        </div>

        <ul className="hidden md:flex gap-4 lg:gap-9 font-semibold md:text-sm lg:text-md xl:text-lg">
          {Links.map((link) => (
            <li
              key={link.name}
              className="relative group hover:scale-105 transition-transform"
            >
              {

                <a
                  href={link.link}
                  target={link.name === 'Enactus Worldwide' ? '_blank' : '_self'}
                  rel={link.name === 'Enactus Worldwide' ? 'noopener noreferrer' : undefined}
                  className="hover:text-enactusYellow relative z-10"
                >
                  {link.name}
                </a>
              }
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"></div>
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full transform transition-transform duration-700 ease-in-out bg-zinc-800 rounded-bl-[70px] rounded-br-[70px] ${isMenuOpen ? 'translate-y-[0px]' : '-translate-y-full'
          }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-medium py-16">
          {Links.map((link) => (
            <li key={link.name}>
              {
                <a
                  href={link.link}
                  target={link.name === 'Enactus Worldwide' ? '_blank' : '_self'}
                  rel={link.name === 'Enactus Worldwide' ? 'noopener noreferrer' : undefined}
                  className="hover:text-yellow-500 hover:scale-105 transition-transform"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              }
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
