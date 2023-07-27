import React from "react";

const ShowMovie = ({ movie, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>
          <img src={movie.Poster} alt={movie.Title} />
        </h2>
        <h3>{movie.Title}</h3>
        console.log(movie.plot)
        <p>{movie.Plot}</p>
        <p>IMDb Rating: {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default ShowMovie;
