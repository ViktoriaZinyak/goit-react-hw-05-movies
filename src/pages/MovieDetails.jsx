import { useParams, Outlet, NavLink } from 'react-router-dom';
import { getMovieDetails } from 'moviesAPI';
import { useState, useEffect } from 'react';

const IMG_ORG = 'https://image.tmdb.org/t/p/original';

export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    const controller = new AbortController();
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
    return () => {
      controller.abort();
    };
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

  if (!poster_path) {
    return;
  }

  const img = `${IMG_ORG}${poster_path}`;
  return (
    <>
      {movieInfo && (
        <section>
          <img src={img} alt={title} width="400" />
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
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="review">Review</NavLink>
          <Outlet />
        </section>
      )}
    </>
  );
};
