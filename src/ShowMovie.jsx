import React from "react";

const ShowMovie = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
        <p>IMDB Rating: {movie.imdbRating}</p>
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
};

export default ShowMovie;
