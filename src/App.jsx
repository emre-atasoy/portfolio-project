import axios from 'axios';
import { useEffect, useState } from 'react'
import data from './data';
import Hero from './components/Hero';


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
  <div>
    {portfolioData ? (
      <Hero data={portfolioData.heroSection} />
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
}

export default App
