import { useEffect, useState } from 'react';
import { API_BASE } from '../data/api';
import './movieDetails.css';

function MovieDetails({ movieId }) {
    const [movie, setMovie] = useState(null);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        let isCurrent = true;

        Promise.all([
            fetch(`${API_BASE}/movieData`),
            fetch(`${API_BASE}/scheduleMovies`)
        ])
            .then(async ([featuredResponse, scheduleResponse]) => {
                if (!featuredResponse.ok || !scheduleResponse.ok) {
                    throw new Error('Unable to load movie details.');
                }

                const [featuredMovies, scheduleMovies] = await Promise.all([
                    featuredResponse.json(),
                    scheduleResponse.json()
                ]);
                const allMovies = [...featuredMovies, ...scheduleMovies];
                const selectedMovie = allMovies.find(
                    (item) => String(item._id ?? item.id) === movieId
                );

                if (isCurrent) {
                    setMovie(selectedMovie || null);
                    setStatus(selectedMovie ? 'ready' : 'not-found');
                }
            })
            .catch((error) => {
                console.error('Movie details request failed:', error);
                if (isCurrent) {
                    setStatus('error');
                }
            });

        return () => {
            isCurrent = false;
        };
    }, [movieId]);

    if (status !== 'ready') {
        return (
            <main className="movie-details-state">
                <a href="/" className="movie-details-logo">NET<span>FILM</span></a>
                <p>{status === 'loading' ? 'Loading movie...' : status === 'not-found' ? 'Movie not found.' : 'Could not load movie details. Make sure the movie database is running.'}</p>
                <a className="movie-details-back" href="/#schedule">Back to movies</a>
            </main>
        );
    }

    return (
        <main className="movie-details-page" style={{ '--movie-backdrop': `url("${movie.bgImg || movie.previewImg}")` }}>
            <header className="movie-details-header">
                <a className="movie-details-logo" href="/">NET<span>FILM</span></a>
                <a className="movie-details-back" href="/#schedule">Back to movies</a>
            </header>
            <section className="movie-details-content">
                <img className="movie-details-poster" src={movie.previewImg || movie.bgImg} alt={`${movie.title} poster`} />
                <div className="movie-details-copy">
                    <p className="movie-details-eyebrow">{movie.type || 'FEATURED MOVIE'}</p>
                    <h1>{movie.title}</h1>
                    <div className="movie-details-meta">
                        {[movie.year, movie.ageLimit, movie.length, movie.category].filter(Boolean).map((value) => (
                            <span key={value}>{value}</span>
                        ))}
                    </div>
                    <p className="movie-details-description">{movie.description}</p>
                    <div className="movie-details-actions">
                        <a className="movie-details-book" href={`/?movie=${encodeURIComponent(movie.title)}#booking`}>Book now</a>
                        {movie.video && <a className="movie-details-trailer" href={movie.video} target="_blank" rel="noreferrer">Watch trailer</a>}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MovieDetails;
