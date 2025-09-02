import axios from 'axios';
import { useEffect, useState } from 'react'
import data from './data';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  const [portfolioData,setPortfolioData] = useState(null);
  

  useEffect(() => {
  axios.post(
    "https://reqres.in/api/workintech",
    data,
    {
      headers: {
        "x-api-key": "reqres-free-v1"
      }
    }
  )
  .then((res) => {
    setPortfolioData(res.data);
  })
  .catch((err) => {
    console.error("HATA", err);
  });
}, []);


 return (
    <div className='px-60 font-[Inter]'>
      {portfolioData ? (
        <>
          <Header/>
          <Hero data={portfolioData.heroSection} />
          <Skills data={portfolioData.skillsSection} />
          <Profile data={portfolioData.profileSection} />
          <Projects data={portfolioData.projectsSection} />
          <Footer data={portfolioData.footerSection} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App
