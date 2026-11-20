import Header from "./pages/Header"
import './App.css';
import Banner from './pages/Banner';
// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper styles
import "swiper/css";
import Mains from './pages/Mains';
import Footer from './pages/Footer';
import SignIn from './pages/SignIn';
import MovieDetails from './pages/MovieDetails';
import Booking from './pages/Booking';

function App() {
  const movieRoute = window.location.pathname.match(/^\/movie\/([^/]+)\/?$/);

  if (/^\/booking\/?$/.test(window.location.pathname)) {
    return <Booking />;
  }

  if (/^\/signin\/?$/.test(window.location.pathname)) {
    return <SignIn />;
  }

  if (movieRoute) {
    return <MovieDetails movieId={decodeURIComponent(movieRoute[1])} />;
  }

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