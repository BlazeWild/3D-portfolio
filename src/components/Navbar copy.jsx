import { useState } from 'react';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for URL updates

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavClick = (id, title) => {
    setActive(title);
    navigate(`/${id}`); // Update the URL
    window.scrollTo(0, 0); // Scroll to top
    if (toggle) {
      setToggle(false); // Close mobile menu if open
    }
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <ScrollLink
          to="home" // Update to the correct ID if needed
          smooth={true}
          duration={300}
          className='flex items-center gap-2'
          onClick={() => handleNavClick("", "")} // Pass empty values for home
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Ashok &nbsp;<span className="sm:block hidden">| BlazeWild</span>
          </p>
        </ScrollLink>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavClick(link.id, link.title)}
            >
              <ScrollLink
                to={link.id}
                smooth={true}
                duration={300}
                onClick={() => handleNavClick(link.id, link.title)} // Handle navigation
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* For mobile navbar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-md cursor-pointer text-[16px]`}
                  onClick={() => handleNavClick(link.id, link.title)}
                >
                  <ScrollLink
                    to={link.id}
                    smooth={true}
                    duration={300}
                    onClick={() => handleNavClick(link.id, link.title)} // Handle navigation
                  >
                    {link.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
