import React, { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
// import osidevsito from '../media/ProfilePictureOsiris.jfif';
import saludarAazul from '../media/saludar-azul.png';
import saludarBlanco from '../media/saludar-blanco.png';

import linkedInLight from '../media/LinkedInLight.jpg';
import linkedInDark from '../media/LinkedInDark.jpg';
import translations from '../languages/AboutMeEn-ES.json';

const AboutMe = ({ darkMode, language }) => {
  const english = translations[0].en;
  const spanish = translations[1].es;
  return (
    <section id="aboutMe">
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Osiris Macias
        </h2>
        <h3 className="text-2xl font-semibold py-2 md-text-3xl dark:text-blue-300">
          {language === 'en' ? english[0] : spanish[0]}
        </h3>
        <p className="text-lg text-justify py-5 leading-8  text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
          {language === 'en' ? english[1] : spanish[1]}
        </p>
      </div>
      <div className=" mb-20   pb-20     text-5xl flex justify-center gap-20 py-3 text-gray-600 pb-3 dark:text-white">
        <a
          target={'blank'}
          href={
            'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZdBHZPsgNDNGbTTzhllldmWWhgbHZHkSGcdmsNWbGnPHbHJVmMhhchcGsGlnpktMnGtDB'
          }
        >
          <SiGmail className="hover:animate-bounce duration-500" />
        </a>
        <a target={'blank'} href={'https://github.com/Mancosiris13'}>
          <AiFillGithub className="hover:animate-bounce duration-500" />
        </a>
        <a
          target={'blank'}
          href={
            'https://wa.me/5646764711?text=Hello Osiris, I am glad to reach you out via your website!'
          }
        >
          <BsWhatsapp className="cursor-pointer hover:animate-bounce  duration-500" />
        </a>
      </div>
      <div className="rounded-lg relative mx-auto w-80 h-50 border p-4 shadow-lg dark:text-white">
        <img
          src={linkedInLight}
          alt=""
          className="mx-auto w-22 h-auto md:w-95 md:h-95"
        />
        <img
          src={darkMode ? saludarBlanco : saludarAazul}
          alt=""
          className="rounded-full w-20 my-2 ml-3"
        />
        <div className="flex flex-col ">
          <a
            target={'_blank'}
            href="https://www.linkedin.com/in/osiris-macias/"
            className="hover:underline text-lg md:text-xl"
          >
            Osiris Macias
          </a>
          <button
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/osiris-macias/',
                '_blank'
              )
            }
            className="mt-2 rounded-xl font-bold text-blue-500 border-blue-500 border hover:border-blue-500 hover:border-2 dark:text-white dark:border-white"
          >
            {language === 'en' ? english[2] : spanish[2]}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
