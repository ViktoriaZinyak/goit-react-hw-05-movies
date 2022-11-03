import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { IMG_ORG, IMG_CONTENT, getMovieDetails } from 'moviesAPI';
import {
  Box,
  Link,
  Section,
  AddInfo,
  LinkWrap,
  AddLink,
} from './MovieDetails.Styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const [goBackLink, setGoBackLink] = useState('');

  useEffect(() => {
    setGoBackLink(location.state?.from ?? '/movies');
    async function getMovieInfo() {
      try {
        const movieInfo = await getMovieDetails(movieId);
        setMovieInfo(movieInfo);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Section>
          <Link to={goBackLink}>
            <BsArrowLeft />
            Go Back
          </Link>
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
            <AddInfo>Additional information</AddInfo>
            <LinkWrap>
              <AddLink to="cast">Cast</AddLink>
              <AddLink to="review">Review</AddLink>
            </LinkWrap>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </Section>
      )}
    </>
  );
};

export default MovieDetails;
