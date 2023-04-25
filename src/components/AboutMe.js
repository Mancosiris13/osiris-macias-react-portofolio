import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import osidevsito from '../media/ProfilePictureOsiris.jfif';
import linkedInLight from '../media/LinkedInLight.jpg';
import linkedInDark from '../media/LinkedInDark.jpg';

const AboutMe = ({ darkMode, setDarkMode }) => {
  return (
    <section id="aboutMe">
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Osiris Macias
        </h2>
        <h3 className="text-2xl font-semibold py-2 md-text-3xl dark:text-blue-300">
          Frontend Developer
        </h3>
        <p className="text-lg py-5 leading-8  text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
          Likable, dedicated and quick learner Frontend Developer with over 1
          year of experience in learning, creating and maintaining code.
          Transitioning to Backend Development. Feel free to reach me out and
          lets get cracking!
        </p>
      </div>
      <div className=" mb-20   pb-20     text-5xl flex justify-center gap-20 py-3 text-gray-600 pb-3 dark:text-white">
        <a
          target={'blank'}
          href={
            'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZdBHZPsgNDNGbTTzhllldmWWhgbHZHkSGcdmsNWbGnPHbHJVmMhhchcGsGlnpktMnGtDB'
          }
        >
          <SiGmail />
        </a>
        <a target={'blank'} href={'https://github.com/Mancosiris13'}>
          <AiFillGithub />
        </a>
        <a
          target={'blank'}
          href={
            'https://wa.me/5646764711?text=Hello Osiris, I am glad to reach you out via your website!'
          }
        >
          <BsWhatsapp className="cursor-pointer" />
        </a>
      </div>
      <div className="rounded-lg relative mx-auto w-80 h-50 border p-4 shadow-lg dark:text-white">
        <img
          src={darkMode ? linkedInDark : linkedInLight}
          alt=""
          className="mx-auto w-22 h-auto md:w-95 md:h-95"
        />
        <img src={osidevsito} alt="" className="rounded-full w-20 my-2 ml-3" />
        <div className="flex flex-col ">
          <a
            target={'_blank'}
            href="https://www.linkedin.com/in/osiris-macias/"
            className="hover:underline text-lg md:text-xl"
          >
            Osiris Macias
          </a>
          <button className="mt-2 rounded-xl font-bold text-blue-500 border-blue-500 border hover:border-blue-500 hover:border-2 dark:text-white dark:border-white">
            <a
              href="https://www.linkedin.com/in/osiris-macias/"
              target="_blank"
            >
              Ver Perfil
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
