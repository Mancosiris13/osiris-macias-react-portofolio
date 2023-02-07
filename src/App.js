import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Skill from './components/Skills';
import Portofolio from './components/Portofolio';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Skill />
        <Portofolio />
      </main>
      ;
    </div>
  );
}

export default App;
