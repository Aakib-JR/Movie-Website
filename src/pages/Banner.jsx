import { useState, useEffect } from "react";
import "./banner.css";
import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";
import PlayBtn from "../components/PlayBtn";
import MovieSwiper from "../components/MovieSwiper";

function Banner() {

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/movieData")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        // Find the active movie
        // const activeMovie = data.find((item) => item.active === true);
        // setMovie(activeMovie);
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }

  if (!movie) {
    return <h2>No Active Movie Found</h2>;
  }

  const handleSlideChange = id => {
    const newMovies = movie.map(movie=>{
      movie.active = false
      if(movie._id === id){
        movie.active = true;
      }
      return movie
    });
    setMovie(newMovies);
  };

  return (

    <div className="banner">
      {
        movie && movie.length > 0 && movie.map(movie => (
          <div className="movie">
            <img src={movie.bgImg} alt="bgImage" className={`bgImg ${movie.active ? 'active' : undefined }`} />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6" col-md-12>
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6" col-md-12>
                  <MovieDate movie={movie} />
                  <PlayBtn movie={movie} />
                </div>
              </div>
            </div>
          </div>
        ))
      }

      {
        movie && movie.length > 0 && <MovieSwiper slides={movie} slideChange={handleSlideChange} />
      }

    </div>
  );
}

export default Banner;