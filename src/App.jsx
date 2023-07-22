import { useState, useEffect } from "react";
import "./App.css";
import { FcSearch } from "react-icons/fc";
import { MovieCard } from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=";
//

const App = () => {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("X-Men");
  }, []);

  return (
    <div className="app">
      <h1>MovieUniverse</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <FcSearch alt="search" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
