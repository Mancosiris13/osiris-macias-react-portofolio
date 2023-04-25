import React from 'react';
import mern from '../media/mern.png';
import translations from '../languages/SkillsEn-ES.json';
const Skill = ({ language }) => {
  const english = translations[0].en;
  const spanish = translations[1].es;
  return (
    <section className=" leading-8 text-center pt-20" id="skills">
      <div>
        <h3 className="text-3xl py-1 font-semibold text-teal-500  p-10 md:text-4xl pt-10 dark:text-blue-300 tracking-wider ">
          {language === 'en' ? english[0] : spanish[0]}
        </h3>
        <p className="text-lg text-justify py-5 pt-12 leading-8 text-gray-800  md:text-xl max-w-xl mx-auto dark:text-white">
          {language === 'en' ? english[1] : spanish[1]}
        </p>
      </div>
      <div
        className=" rounded-xl  p-8 text-lg    items-center font-burtons leading-8  md:text-xl dark:text-blue-100"
        style={{ lineHeight: '2' }}
      >
        <div className=" inline-block">
          <ul>
            <li>
              <span className="px-5 ">JavaScript</span>
            </li>
            <li>
              <span className="px-5">React.Js</span>
            </li>
            <li>
              <span className="px-5">Node.Js</span>
            </li>
            <li>
              <span className="px-5">Express.Js</span>
            </li>
            <li>
              <span className="px-5">Web Services</span>
            </li>
            <li>
              <span className="px-5">Responsive CSS</span>
            </li>
            <li>
              <span className="px-5">Sass</span>
            </li>
          </ul>
        </div>
        <div className=" inline-block">
          <ul>
            <li>
              <span className="px-5">CSS Frameworks</span>
            </li>
            <li>
              <span className="px-5">REST API's</span>
            </li>
            <li>
              <span className="px-5">Postman</span>
            </li>
            <li>
              <span className="px-5">MongoDB</span>
            </li>
            <li>
              <span className="px-5">AWS</span>
            </li>
            <li>
              <span className="px-5">Node.Js</span>
            </li>
            <li>
              <span className="px-5">Git/Github</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <img
          src={mern}
          alt="mern picture"
          className="rounded-lg object-cover mx-auto mt-6"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default Skill;