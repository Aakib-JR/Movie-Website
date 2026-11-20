import { useState, useEffect } from 'react';
import './schedule.css';
import Card from '../components/Card';
import { MOVIE_DATA_URL } from '../data/api';

function Schedule() {

    const filterList = [
        { _id: 1, name: 'All', active: true },
        { _id: 2, name: 'Sci-Fi', active: false },
        { _id: 3, name: 'Action', active: false },
        { _id: 4, name: 'Comedy', active: false },
        { _id: 5, name: 'Horror', active: false },
        { _id: 6, name: 'Adventure', active: false }
    ];

    const [movies, setMovies] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        fetch(MOVIE_DATA_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => {
                setMovies(data.scheduleMovies);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const handleFilterMovies = category=>{
        setActiveCategory(category);
    }

    const visibleMovies = activeCategory === 'All'
        ? movies
        : movies.filter(movie => movie.category === activeCategory);

    return (
        <section id="schedule" className='schedule'>
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">
                        Opening this week
                    </h4>
                </div>
                <div className="row">
                    {
                        <ul className="filters">
                            {filterList.map(filter => (
                                <li key={filter._id} className={`${activeCategory === filter.name ? 'active' : undefined}`} onClick={()=>handleFilterMovies(filter.name)}>{filter.name}</li>
                            ))
                            }
                        </ul>
                    }
                </div>
                <div className="row mt-5">
                    {visibleMovies &&
                        visibleMovies.length > 0 &&
                        visibleMovies.map(movie => (
                            <Card key={movie._id} movie={movie} />
                        ))}
                </div>
            </div>
            
        
        </section>
    );
}
export default Schedule;