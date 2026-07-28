import React, { useState, useEffect, Component } from 'react';
import './schedule.css';
import Card from '../components/Card';

function Schedule() {

    const filterList = [
        { _id: 1, name: 'All', active: true },
        { _id: 2, name: 'Sci-Fi', active: false },
        { _id: 3, name: 'Action', active: false },
        { _id: 4, name: 'Comedy', active: false },
        { _id: 5, name: 'Horror', active: false },
        { _id: 6, name: 'Adventure', active: false }
    ];

    const [data, setData] = useState([]); //Original Data
    const [movies, setMovies] = useState([]); //copy Data
    const [filters, setFilters] = useState(filterList);

    useEffect(() => {
        fetch("http://localhost:3000/scheduleMovies")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    useEffect(() => {
        setMovies(data);
    },[data]);

    const handleFilterMovies = category=>{

        const ActiveFilterMovies = filters.map(filter=>{
            filter.active = false;
            if(filter.name===category){
                filter.active = true;
            }
            return filter;
        });

        setFilters(ActiveFilterMovies);

        if(category==='All'){
            setMovies(data);
            return;
        }
        const filteredMovies = data.filter(movie=> movie.category === category);
        setMovies(filteredMovies);
    }

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
                            {filters.map(filter => (
                                <li key={filter._id} className={`${filter.active ? 'active' : undefined}`} onClick={()=>handleFilterMovies(filter.name)}>{filter.name}</li>
                            ))
                            }
                        </ul>
                    }
                </div>
                <div className="row mt-5">
                    {movies &&
                        movies.length > 0 &&
                        movies.map(movie => (
                            // Card Component
                            <Card key={movie._id} movie={movie} />
                        ))}
                </div>
            </div>
            
        
        </section>
    );
}
export default Schedule;