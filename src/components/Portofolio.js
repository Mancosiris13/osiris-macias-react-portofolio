import React, { useState } from 'react';
import port1 from '../media/port1.png';
import port2 from '../media/port2.png';
import port3 from '../media/port3.png';
import port4 from '../media/port4.png';
import port5 from '../media/port5.png';
import port6 from '../media/port6.png';
import taskApp from '../media/TaskApp.png';
import translations from '../languages/PortfolioEN-ES.json';
import ProjectsTranslations from '../languages/ProjectsDescription.json';
import WebsitePreview from './WebsitePreview';
import { AiFillStar } from 'react-icons/ai';

const Portofolio = ({ language }) => {
  const english = translations[0].en;
  const spanish = translations[0].es;

  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <>
      <section className="leading-8 text-center pt-10 ">
        <div id="portfolio">
          <h3 className="text-3xl py-1 font-semibold text-teal-500  p-10 md:text-4xl pt-10 dark:text-blue-300 tracking-wider">
            {language === 'en'
              ? translations[0]['en'].header
              : translations[1]['es'].encabezado}
          </h3>

          <p
            className="text-lg text-justify py-5 pt-12 leading-8  text-gray-800 md:text-xl  max-w-xl mx-auto dark:text-white 
        "
          >
            {language === 'en'
              ? translations[0]['en'].summary
              : translations[1]['es'].resumen}
          </p>
        </div>
        <div className=" flex flex-col gap-10 py-10 lg:flex-row lg: flex-wrap"></div>
        <div className="my-20 relative">
          <div className="md:absolute md:top-0 md:left-0 md:z-10 sm:static sm:top-auto sm:left-auto sm:z-auto">
            <AiFillStar className="inline-block text-yellow-400 font-bold text-xl m-3" />
            <span className="inline-block font-semibold ">
              {language === 'en'
                ? 'Most Recent Project'
                : 'Proyecto Mas Reciente'}
            </span>
            <AiFillStar className="inline-block text-yellow-400 font-bold text-xl m-3" />
          </div>
          <WebsitePreview
            url={'https://osiris-task-app.herokuapp.com/dashboard'}
            thumbnail={taskApp}
            language={language}
            traductions={
              language === 'en'
                ? ProjectsTranslations[4]['task-app'].en
                : ProjectsTranslations[4]['task-app'].es
            }
          />
        </div>

        <div className="my-20">
          <WebsitePreview
            url={
              'https://6454ab6045dcf56cdb1aaa76--strong-cranachan-12452c.netlify.app/'
            }
            thumbnail={port3}
            language={language}
            traductions={
              language === 'en'
                ? ProjectsTranslations[3]['delta-webpage'].en
                : ProjectsTranslations[3]['delta-webpage'].es
            }
          />
        </div>
        <div className="my-20">
          <WebsitePreview
            url={'https://pet-store-appointments.vercel.app/'}
            thumbnail={port2}
            language={language}
            traductions={
              language === 'en'
                ? ProjectsTranslations[2]['pet-store-appointments'].en
                : ProjectsTranslations[2]['pet-store-appointments'].es
            }
          />
        </div>
        <div className="my-20  ">
          <WebsitePreview
            url={'https://react-weather-app-theta-eight.vercel.app'}
            thumbnail={port5}
            language={language}
            traductions={
              language === 'en'
                ? ProjectsTranslations[0]['weather-app'].en
                : ProjectsTranslations[0]['weather-app'].es
            }
          />
        </div>
        <div className="my-20">
          <WebsitePreview
            url={'https://redux-toolkit-shopping-cart-psi.vercel.app'}
            thumbnail={port1}
            language={language}
            traductions={
              language === 'en'
                ? ProjectsTranslations[1]['shopping-cart'].en
                : ProjectsTranslations[1]['shopping-cart'].es
            }
          />
        </div>
      </section>
    </>
  );
};

export default Portofolio;
