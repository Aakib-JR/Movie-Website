import './card.css';


function Card({ movie }) {

    return (

        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
            <div className="card-movie-card">
                
                <img
                    src={movie.previewImg}
                    alt={movie.title}
                    className="card-movie-img"
                />

                {/* Normal Title */}
                <div className="card-movie-title">
                    {movie.title}
                </div>

                {/* Hover Content */}
                <div className="card-hover-content">

                    <div className="card-movie-details">
                        <span>{movie.length}</span>
                        <span>{movie.category}</span>
                    </div>

                    <div className="card-icons">
                        <ion-icon name="add-outline" title="Buy Tickets"></ion-icon>
                        <ion-icon name="play-outline" title="Trailer"></ion-icon>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default Card;