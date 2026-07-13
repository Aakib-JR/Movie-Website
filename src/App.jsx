import React from 'react';
import Header from "./pages/Header"
import './App.css';
import Banner from './pages/Banner';
// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper styles
import "swiper/css";
import Mains from './pages/Mains';

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Mains />
    </>
  )
}

export default App;

// npx json-server public/data/movieData.json --port 3000
