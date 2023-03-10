import React from 'react';

const Skill = () => {
  return (
    <section className="leading-8 text-center">
      <div>
        <h3 className="text-3xl py-1  p-10 md:text-4xl pt-10 dark:text-blue-300">
          Skills
        </h3>
        <p className="text-lg py-5 leading-8 text-gray-800  md:text-xl max-w-xl mx-auto dark:text-white">
          Since the beginning of my journey as a Frontend Developer, I have
          worked with several technologies such as:{' '}
        </p>
      </div>
      <div className=" rounded-xl  p-8 text-lg    items-center font-burtons leading-8  md:text-xl dark:text-blue-100">
        <div className=" inline-block">
          <ul>
            <li>
              <span className="px-5 ">JavaScript</span>
            </li>
            <li>
              <span className="px-5">React.Js</span>
            </li>
            <li>
              <span className="px-5">React Hooks</span>
            </li>
            <li>
              <span className="px-5">Web Services</span>
            </li>
            <li>
              <span className="px-5">Next.Js</span>
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
              <span className="px-5">HTTP</span>
            </li>
            <li>
              <span className="px-5">Postman</span>
            </li>
            <li>
              <span className="px-5">MySQL</span>
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
    </section>
  );
};

export default Skill;
