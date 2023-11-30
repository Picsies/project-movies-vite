import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MovieImage } from "./MovieImage";
import "./MovieDetails.css";

export const MovieDetails = () => {

  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const apiEnv = import.meta.env.VITE_OPENDB_KEY;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiEnv}&language=en-US`; 

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  const fetchMovieDetails = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error when fetching movie details: ", error);
      });
  }

  return (
    <div 
      className="movie-details-container" 
      style={{ 
        backgroundImage: `url(${`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`})`,
      }}
    >
      <div className="back-to-container">
        <Link to="/">
          Back to Movies
        </Link>
      </div>
      <div className="info-container">   
        <div className="image-details-container">
          <MovieImage imageUrl={movie.poster_path} imageSize="w780" />
        </div>
        <div className="movie-info">
          <div className="title-rating-container">
            <div className="title">{movie.original_title}</div>
            <div className="rating">⭐{Number(movie.vote_average).toFixed(1)}</div>
          </div>
          <div className="overview">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
};
