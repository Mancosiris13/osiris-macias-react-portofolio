import React from 'react';
import mern from '../media/mern.png';
import translations from '../languages/SkillsEn-ES.json';
const Skill = ({ language }) => {
  const english = translations[0].en;
  const spanish = translations[1].es;
  return (
    <section className=" leading-8 text-center pt-20">
      <div>
        <h3 className="text-3xl py-1 font-semibold text-teal-500  p-10 md:text-4xl pt-10 dark:text-blue-300 tracking-wider ">
          {language === 'en' ? english[0] : spanish[0]}
        </h3>
        <p className="text-lg text-justify py-5 pt-12 leading-8 text-gray-800  md:text-xl max-w-xl mx-auto dark:text-white">
          {language === 'en' ? english[1] : spanish[1]}
        </p>
      </div>
      <div className=" mb-32 rounded-xl p-8 text-lg font-burtons leading-8 md:text-xl dark:text-blue-100 grid grid-cols-2 gap-8 max-md:block ">
        <div className="border-blue-400 dark:border-gray-50 p-4 border-4 rounded-lg dark:text-white max-md:mb-8">
          {/* <h3 className="text-2xl font-bold mb-4">FRONTEND</h3> */}
          <div className="space-y-2">
            <span className="px-5 py-2  rounded-lg block border border-gray-400">
              JavaScript
            </span>
            <span className="px-5 py-2  rounded-lg block border border-gray-400">
              React.Js
            </span>
            <span className="px-5 py-2  rounded-lg block border border-gray-400">
              Tailwind
            </span>
            <span className="px-5 py-2  rounded-lg block border border-gray-400">
              REST API's
            </span>
            <span className="px-5 py-2  rounded-lg block border border-gray-400">
              Mongoose.Js
            </span>
            <span className="px-5 py-2  rounded-lg block border border-gray-400">
              Responsive CSS
            </span>
            <span className="px-5 py-2  rounded-lg block border border-gray-400">
              Sass
            </span>
          </div>
        </div>
        <div className=" border-blue-400 dark:border-gray-50 p-4 border-4 rounded-lg">
          {/* <h3 className="text-2xl font-bold mb-4">BACKEND</h3> */}
          <div className="space-y-2">
            <span className="px-5 py-2  rounded-lg block border border-gray-400">
              Node.Js
            </span>
            <span className="px-5 py-2  rounded-lg block border border-gray-400">
              Express.Js
            </span>
            <span className="px-5 py-2  rounded-lg block border border-gray-400">
              Postman
            </span>
            <span className="px-5 py-2  rounded-lg block border border-gray-400">
              MongoDB
            </span>
            <span className="px-5 py-2  rounded-lg block border border-gray-400">
              HTTP
            </span>
            <span className="px-5 py-2  rounded-lg block border border-gray-400">
              Node.Js
            </span>
            <span
              id="portfolio"
              className="px-5 py-2  rounded-lg block border border-gray-400"
            >
              Git/Github
            </span>
          </div>
        </div>
      </div>

      <div className="text-center my-20 ">
        <img
          src={mern}
          alt="mern picture"
          className="rounded-lg object-cover mx-auto mt-6 transition-transform duration-400 transform hover:scale-150"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default Skill;
