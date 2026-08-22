import React from 'react';
import Header from "./pages/Header"
import './App.css';
import Banner from './pages/Banner';
// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper styles
import "swiper/css";
import Mains from './pages/Mains';
import Footer from './pages/Footer';

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Mains />
      <Footer />
    </>
  )
}

export default App;

// cd react-app
// npm run dev
// npx json-server public/data/movieData.json --port 3000
// npx json-server public/data/blogData.json --port 5000 