import { useEffect } from "react";
import "./App.css";
import { FcSearch } from "react-icons/fc";

const API_URL = "http://www.omdbapi.com?apikey=";
//

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
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
      <div className="container"></div>
      <div className="movie"></div>
    </div>
  );
};

export default App;
