import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { MovieImage } from "./MovieImage";
import "./MovieList.css";

export const MovieList = () => {

  const API_KEY = "c3d680f46066ea72d5b9f4ec633a2b57";
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results)
        console.log(data);
      })
      .catch((error) => {
        console.error("Error when fetching movies: ", error);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movie-list-container">
      {movies.map((movie) => {
        return (
        <NavLink
          to={`/movies/${movie.id}`}
          key={movie.id}
          className="movie-item"
        > 
          <div className="image-container">
            <MovieImage imageSize="w780" imageUrl={movie.poster_path}
            />
          </div>
          <div className="movie-details">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-release-date">Released {movie.release_date}</div>
          </div>
        </NavLink>
        )
      })}
    </div>
  )
}
