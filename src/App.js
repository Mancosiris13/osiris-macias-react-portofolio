import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';
import AboutMe from './components/AboutMe';
import Skill from './components/Skills';
import Portofolio from './components/Portofolio';
import Footer from './components/Footer';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  console.log(language);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main
        className=" bg-white px-10 md:px-20 lg:px-40 
      dark:bg-gradient-to-b from-gray-800 to-gray-600"
      >
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          language={language}
          setLanguage={setLanguage}
        />
        <AboutMe language={language} setLanguage={setLanguage} />
        <Skill language={language} setLanguage={setLanguage} />
        <Portofolio language={language} setLanguage={setLanguage} />
        <Footer language={language} setLanguage={setLanguage} />
      </main>
    </div>
  );
}

export default App;
