import React, { useState, useEffect } from "react";
import "./App.css";
import { FcSearch } from "react-icons/fc";
import MovieCard from "./MovieCard";
import Modal from "./Modal"; // Make sure you import the Modal component
import ShowMovie from "./ShowMovie";
import "./Modal.css";

const API_URL = "http://www.omdbapi.com?apikey=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = async (movie) => {
    try {
      const response = await fetch(`${API_URL}&i=${movie.imdbID}`);
      const data = await response.json();
      console.log(data);
      setSelectedMovie(data); // Update the state with the fetched movie details
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  useEffect(() => {
    searchMovies("X-men");
  }, []);

  return (
    <div className="app">
      <h1>MovieUniverse</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <FcSearch
          alt="search"
          size={40}
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <div key={movie.imdbID} onClick={() => handleMovieClick(movie)}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

      {/* Render the Modal with the ShowMovie component inside */}
      <Modal isOpen={selectedMovie !== null} onClose={closeModal}>
        {selectedMovie && <ShowMovie movie={selectedMovie} />}
      </Modal>
    </div>
  );
};

export default App;
