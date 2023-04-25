import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import osidevsito from '../media/ProfilePictureOsiris.jfif';
import linkedInLight from '../media/LinkedInLight.jpg';
import linkedInDark from '../media/LinkedInDark.jpg';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <section className="min-h-min" id="aboutMe">
      <nav className="py-10 mb-12 flex flex-col items-center justify-between md:flex-row md:items-center">
        <ul className="flex flex-col sm:flex-row items-center text-xl font-burtons dark:text-white">
          <li className="py-2 sm:py-0 px-4 sm:px-6">
            <ScrollLink
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer border-b-2 border-transparent hover:border-teal-600 transition duration-300 ease-in-out"
            >
              About Me
            </ScrollLink>
          </li>
          <li className="py-2 sm:py-0 px-4 sm:px-6">
            <ScrollLink
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer border-b-2 border-transparent hover:border-teal-600 transition duration-300 ease-in-out"
            >
              Skills
            </ScrollLink>
          </li>
          <li className="py-2 sm:py-0 px-4 sm:px-6">
            <ScrollLink
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer border-b-2 border-transparent hover:border-teal-600 transition duration-300 ease-in-out"
            >
              Portfolio
            </ScrollLink>
          </li>
        </ul>
        <div className="flex items-center pt-2 mt-4">
          <BsFillMoonStarsFill
            className="cursor-pointer text-xl dark:text-white mr-4"
            onClick={() => setDarkMode(!darkMode)}
          />
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
            href="Osiris Macias-Frontend Developer.pdf"
            download="Osiris Macias-Frontend Developer.pdf"
          >
            Resume
          </a>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
