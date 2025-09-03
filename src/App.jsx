import { useState, useEffect } from 'react';
import { dataEn, dataTr } from './data';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';
import "./index.css";
import { ToastContainer } from 'react-toastify';

function App() {
  // --- Dil durumu ---
  const [isEnglish, setIsEnglish] = useState(() => {
    const saved = localStorage.getItem("isEnglish");
    return saved !== null ? saved === "true" : true;
  });

  // --- Dark mode durumu ---
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? saved === "true" : false;
  });

  const [portfolioData, setPortfolioData] = useState(null);

  const dataToSend = isEnglish ? dataEn : dataTr;

  // --- Dil değişince localStorage'a yaz ---
  useEffect(() => {
    localStorage.setItem("isEnglish", isEnglish);
  }, [isEnglish]);

  // --- Dark mode değişince localStorage'a yaz ve class toggle ---
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // --- API isteği ---
  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", dataToSend, {
        headers: { "x-api-key": "reqres-free-v1" }
      })
      .then((res) => setPortfolioData(res.data))
      .catch((err) => console.error("HATA", err));
  }, [dataToSend]); // isEnglish değişince dataToSend de değişiyor

  return (
    <>
      <div className="font-[Inter] px-60 bg-base text-base transition-colors duration-300 min-h-screen">
        {portfolioData ? (
          <>
            <Header 
              isEnglish={isEnglish} 
              setIsEnglish={setIsEnglish} 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
            />
            <Hero data={portfolioData.heroSection} />
            <Skills data={portfolioData.skillsSection} />
            <Profile data={portfolioData.profileSection} isEnglish={isEnglish}/>
            <Projects data={portfolioData.projectsSection} />
          </>
        ) : (
          <p>Loading...</p>
        )}
        <ToastContainer 
          position="bottom-right" 
          autoClose={1500} 
          theme={darkMode ? "dark" : "light"}
        />
      </div>

      {portfolioData && <Footer data={portfolioData.footerSection} />}
    </>
  );
}

export default App;
