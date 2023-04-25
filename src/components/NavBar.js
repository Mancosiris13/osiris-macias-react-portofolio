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
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons dark:text-white italic">
          DevelopbyOsiris
        </h1>

        <ul className="flex items-center text-xl font-burtons dark:text-white">
          <li className="px-4">
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
          <li className="px-4">
            <ScrollLink
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" cursor-pointer border-b-2 border-transparent hover:border-teal-600 transition duration-300 ease-in-out"
            >
              Skills
            </ScrollLink>
          </li>
          <li className="px-4">
            <ScrollLink
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" cursor-pointer border-b-2 border-transparent hover:border-teal-600 transition duration-300 ease-in-out"
            >
              Portfolio
            </ScrollLink>
          </li>
        </ul>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              className="cursor-pointer text-xl dark:text-white"
              onClick={() => setDarkMode(!darkMode)}
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="Osiris Macias-Frontend Developer.pdf"
              download="Osiris Macias-Frontend Developer.pdf"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
