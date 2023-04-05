import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import osidevsito from '../media/osidevsito.jpg';
const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons dark:text-white">
          DevelopbyOsiris
        </h1>
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
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Osiris Macias
        </h2>
        <h3 className="text-2xl py-2 md-text-3xl dark:text-blue-300">
          Frontend Developer
        </h3>
        <p className="text-lg py-5 leading-8  text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
          Likable, dedicated and quick learner Frontend Developer with over 1
          year of experience in learning, creating and maintaining code. Feel
          free to reach me out and lets get cracking!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-20 py-3 text-gray-600 pb-3 dark:text-white">
        <a target={'blank'} href={'https://www.linkedin.com/in/osiris-macias/'}>
          <AiFillLinkedin />
        </a>
        <a target={'blank'} href={'https://github.com/Mancosiris13'}>
          <AiFillGithub />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full  w-80 h-80 mt-20 max-w-xl mx-auto ">
        <img
          src={osidevsito}
          alt=""
          className=" ml-auto mr-auto pt-20 md:h-95 md:w-95"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default NavBar;
