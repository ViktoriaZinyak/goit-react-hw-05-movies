import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'moviesAPI';
import { useState, useEffect } from 'react';
import { IMG_ORG, IMG_CONTENT } from 'moviesAPI';
import { Box } from './MovieDetails.Styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    // const controller = new AbortController();
    async function getMovieInfo() {
      try {
        const movieInfo = await getMovieDetails(movieId);
        setMovieInfo(movieInfo);
        console.log(movieInfo);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieInfo();
    // return () => {
    //   controller.abort();
    // };
  }, [movieId]);

  const {
    title,
    poster_path,
    original_title,
    popularity,
    release_date,
    overview,
    genres,
  } = movieInfo;

  const img = `${IMG_ORG}${poster_path}`;
  return (
    <>
      {movieInfo && (
        <section>
          <NavLink to={location.state?.from ?? '/movies'}>Go Back</NavLink>
          <Box>
            <img
              src={poster_path ? img : IMG_CONTENT}
              alt={title}
              width="300"
            />
            <div>
              <h1>
                {original_title} ({release_date})
              </h1>
              <p>User score: {Math.round(popularity)}</p>
              <h2>Overview</h2>
              <p>Overview: {overview}</p>
              <h3>Genres</h3>
              {<p>{genres && genres.map(genre => `${genre.name + ' '}`)} </p>}
            </div>
          </Box>
          <div>
            <p>Additional information</p>
            <NavLink to="cast">Cast</NavLink>
            <NavLink to="review">Review</NavLink>
            <Outlet />
          </div>
        </section>
      )}
    </>
  );
};

export default MovieDetails;
