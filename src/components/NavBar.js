import React, { useEffect } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import translations from '../languages/NavBarEN-ES.json';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const NavBar = ({ darkMode, setDarkMode, language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const english = translations[0].en;
  const spanish = translations[1].es;
  // // console.log(translations);
  // console.log(english.en);
  // console.log(spanish.es);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  if (menuOpen === true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleMenu = async () => {
    await setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  const handleCloseNavBarOnAboutMe = () => {
    setMenuOpen(false);
  };
  const handleCloseNavBar = () => {
    if (menuOpen === true) {
      setTimeout(() => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
      }, 600);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        id="navBar"
        className=" md:py-6 md:mb-8 md:mb-12  md:flex-col mditems-start md:justify-between  md:items-center md:h-auto  "
      >
        {/* <nav
        id="navBar"
        className={`z-10 bg-white dark:bg-transparent md:py-6 md:mb-8 md:mb-12 md:flex-col md:items-start md:justify-between md:h-auto md:mx-2 ${
          showBackToTop ? 'sticky top-0' : ''
        }`}
      > */}
        <div className="relative font-bold md:font-normal dark:text-white  ">
          <button
            className="block md:hidden focus:outline-none  "
            onClick={toggleMenu}
          >
            <RxHamburgerMenu
              className="h-6 w-6 fill-current  mt-5  dark:text-white "
              viewBox="0 0 24 24"
            />
          </button>
          <div className="text-center    ">
            <ul
              className={`${
                menuOpen ? 'block' : 'hidden'
              } h-screen sm:h-auto sm:max-h-screen flex flex-col sm:flex-row items-center
               justify-center md:flex md:text-xl md:font-burtons  left-0 right-0
                 md:bg-transparent py-4 md:py-0 mt-2 md:mt-0 md:mx-auto md:w-max rounded-lg
                shadow-lg sm:bg-transparent sm:relative
                
                 dark:text-white dark:bg-gradient-to-b from-gray-800 to-gray-600`}
            >
              <li className="py-2 sm:py-0 px-4 sm:px-6 ">
                <ScrollLink
                  // activeClass="active"
                  // to="aboutMe"
                  // spy={true}
                  // smooth={true}
                  // offset={-70}
                  // duration={500}
                  className="cursor-pointer border-b-2 border-transparent hover:border-teal-600 transition duration-300 ease-in-out md:text-xl text-2xl font-burtons"
                  onClick={handleCloseNavBarOnAboutMe}
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
                  className="cursor-pointer border-b-2 border-transparent hover:border-teal-600 transition duration-300 ease-in-out md:text-xl text-2xl font-burtons"
                  onClick={handleCloseNavBar}
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
                  className="cursor-pointer border-b-2 border-transparent hover:border-teal-600 transition duration-300 ease-in-out md:text-xl text-2xl font-burtons"
                  onClick={handleCloseNavBar}
                >
                  {language === 'en' ? english[2] : spanish[2]}
                </ScrollLink>
              </li>
              <li className="py-2 sm:py-0 px-4 sm:px-6">
                <ScrollLink
                  activeClass="active"
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer border-b-2 border-transparent hover:border-teal-600 transition duration-300 ease-in-out  md:text-xl text-2xl font-burtons"
                  onClick={handleCloseNavBar}
                >
                  {language === 'en' ? english[3] : spanish[3]}
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex items-center lg:justify-end  pt-2 mt-4 md:gap-4 sm:justify-center  sm: gap-4 justify-center sm:mt-4">
        <button
          className="inline-flex items-center bg-white rounded-full border border-gray-500 py-2 px-4 text-sm font-medium text-gray-800 hover:text-gray-500 hover:border-gray-500 hover:border-opacity-100 hover:border-width-2 transition-colors duration-300 transform hover:scale-110"
          onClick={toggleLanguage}
        >
          <span>EN/ES</span>
        </button>
        {darkMode ? (
          <FiSun
            className="cursor-pointer text-xl dark:text-white mr-2 md:mr-4"
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <BsFillMoonStarsFill
            className="cursor-pointer text-xl dark:text-white mr-2 md:mr-4"
            onClick={() => setDarkMode(!darkMode)}
          />
        )}

        <a
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
          href="Osiris Macias-Frontend Developer.pdf"
          download="Osiris Macias-Frontend Developer.pdf"
        >
          {language === 'en' ? english[4] : spanish[4]}
          <BsFillCloudArrowDownFill className="inline ml-2" />
        </a>
      </div>
      {showBackToTop && (
        <ScrollLink
          activeClass="active"
          to="navBar"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => handleCloseNavBar()}
          className="items-center cursor-pointer border-b-2 border-transparent hover:border-teal-600 transition duration-300 ease-in-out md:text-lg sm:text-sm font-burtons"
        >
          <button
            className=" flex items-center justify-center fixed bottom-0 right-0 p-1   
           focus:outline-none  rounded-md "
            title="Return top"
          >
            <BsFillArrowUpCircleFill className="text-green-500 text-3xl dark:text-white" />
          </button>
        </ScrollLink>
      )}
    </>
  );
};

export default NavBar;
