import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import translations from '../languages/NavBarEN-ES.json';

const NavBar = ({ darkMode, setDarkMode, language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const english = translations[0].en;
  const spanish = translations[1].es;
  // // console.log(translations);
  // console.log(english.en);
  // console.log(spanish.es);
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
              {language === 'en' ? english[0] : spanish[0]}
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
              {language === 'en' ? english[1] : spanish[1]}
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
              {language === 'en' ? english[2] : spanish[2]}
            </ScrollLink>
          </li>
        </ul>
        <div className="flex items-center pt-2 mt-4">
          <button
            class="mr-4 inline-flex items-center bg-white rounded-full border border-gray-500 
          py-2 px-4 text-sm font-medium text-gray-800 hover:text-gray-500 hover:border-gray-500 hover:border-opacity-100 hover:border-width-2 transition-colors duration-300 transform hover:scale-110 "
            onClick={toggleLanguage}
          >
            <span>EN/ES</span>
          </button>
          {darkMode ? (
            <FiSun
              className="cursor-pointer text-xl dark:text-white mr-4"
              onClick={() => setDarkMode(!darkMode)}
            />
          ) : (
            <BsFillMoonStarsFill
              className="cursor-pointer text-xl dark:text-white mr-4"
              onClick={() => setDarkMode(!darkMode)}
            />
          )}

          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
            href="Osiris Macias-Frontend Developer.pdf"
            download="Osiris Macias-Frontend Developer.pdf"
          >
            {language === 'en' ? english[3] : spanish[3]}
            <BsFillCloudArrowDownFill
              className="inline ml-2
            "
            />
          </a>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
