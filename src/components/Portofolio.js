import React from 'react';
import port1 from '../media/port1.png';
import port2 from '../media/port2.png';
import port3 from '../media/port3.png';
import port4 from '../media/port4.png';
import port5 from '../media/port5.png';
import port6 from '../media/port6.png';

const Portofolio = () => {
  return (
    <section className="leading-8 text-center pt-10 ">
      <div id="portfolio">
        <h3 className="text-3xl py-1 font-semibold text-teal-500  p-10 md:text-4xl pt-10 dark:text-blue-300">
          {' '}
          PORTFOLIO
        </h3>

        <p className="text-lg py-5 pt-12 leading-8  text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
          In this section, you'll find examples of my work developed using a
          wide range of technologies and techniques. From simple landing pages
          to complex, data-driven web applications, I have experience working
          with a variety of tools and frameworks. Whether you need a fully
          responsive design, advanced CSS animations, or complex data
          manipulation, I have the skills and expertise to help you bring your
          project to life. So take a look around and see for yourself the range
          of projects that I've worked on, and how I can help you take your
          project to the next level.
        </p>
      </div>
      <div className=" flex flex-col gap-10 py-10 lg:flex-row lg: flex-wrap">
        <div className="basis-1/3 flex-1 shadow-xl">
          <img
            src={port3}
            alt=""
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={port4}
            alt=""
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={port1}
            alt=""
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={port2}
            alt=""
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={port5}
            alt=""
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={port6}
            alt=""
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
