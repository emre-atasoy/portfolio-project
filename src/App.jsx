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

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  const [portfolioData, setPortfolioData] = useState(null);


  const dataToSend = isEnglish ? dataEn : dataTr;

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", dataToSend, {
        headers: { "x-api-key": "reqres-free-v1" }
      })
      .then((res) => setPortfolioData(res.data))
      .catch((err) => console.error("HATA", err));
  }, [isEnglish]); 


  
  return (
   <div className="font-[Inter] px-60">
      {portfolioData ? (
        <>
          <Header
            
            
            isEnglish={isEnglish}
            setIsEnglish={setIsEnglish}
          />
          <Hero data={portfolioData.heroSection} />
          <Skills data={portfolioData.skillsSection} />
          <Profile data={portfolioData.profileSection}  isEnglish={isEnglish}/>
          <Projects data={portfolioData.projectsSection}  />
          <Footer data={portfolioData.footerSection}  />
        </>
      ) : (
        <p>Loading...</p>
      )}

      
    </div>
  );
}

export default App;
