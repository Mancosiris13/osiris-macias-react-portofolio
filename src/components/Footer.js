import React from 'react';
import AboutMe from './AboutMe';
import { AiFillPhone } from 'react-icons/ai';
import { GrMail, GrLinkedin } from 'react-icons/gr';
import { IoLogoWhatsapp } from 'react-icons/io';
const Footer = ({ darkMode, language }) => {
  return (
    <footer
      className="bg-slate-300 text-center dark:bg-gray-800 py-10 mt-10"
      id="footer"
    >
      <div className="mb-8 dark:text-white  text-lg md:text-xl lg:text-2xl">
        <h1 className="text-2xl font-bold mb-4 dark:text-blue-300">
          {language === 'en' ? 'CONTACT' : 'CONTACTO'}
        </h1>

        <ul className=" max-w-xl mx-auto ">
          <li className="inline-block ">
            <IoLogoWhatsapp className="inline-block text-green-700 dark:text-white" />
            <AiFillPhone className="inline-block text-purple-600 dark:text-white" />
            <p className="inline-block m-1">+52 341-118-79-31</p>
            <AiFillPhone className="inline-block text-purple-600 dark:text-white" />
            <IoLogoWhatsapp className="inline-block text-green-700 dark:text-white" />
          </li>
          <li>
            <IoLogoWhatsapp className="inline-block text-green-700 dark:text-white" />
            <AiFillPhone className="inline-block text-purple-600 dark:text-white" />
            <p className="inline-block  m-1">+52 56-4676-4711</p>
            <AiFillPhone className="inline-block text-purple-600 dark:text-white" />
            <IoLogoWhatsapp className="inline-block text-green-700 dark:text-white" />
          </li>
          <li>
            <GrMail className="inline-block text-teal-600 dark:text-white" />
            <p className="inline-block  m-1">osifirsmafias99@gmail.com</p>
            <GrMail className="inline-block  text-teal-600 dark:text-white" />
          </li>
          <li>
            <GrLinkedin className="inline-block  text-blue-700 dark:text-white" />
            <a
              href="https://www.linkedin.com/in/osiris-macias/"
              className=" m-1 hover:underline"
            >
              LinkedIn
            </a>
            <GrLinkedin className="inline-block text-blue-700 dark:text-white" />
          </li>
        </ul>
      </div>
      <div>
        <p className="text-gray-800 text-2xl dark:text-white py-15 inline-block ">
          {`© Osiris Macias 2023`.split('').map((char, index) => {
            if (char === ' ') {
              return <span key={index}>&nbsp;</span>;
            } else {
              return (
                <span key={index} className="hover:animate-bounce inline-block">
                  {char}
                </span>
              );
            }
          })}
        </p>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
