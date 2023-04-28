import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className="bg-slate-400 text-center dark:bg-gray-800 py-10">
      <p className="text-gray-800 dark:text-white py-15 inline-block text-lg">
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
    </footer>
  );
};

export default Footer;
