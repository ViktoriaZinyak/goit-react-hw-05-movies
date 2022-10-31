import { getMovieReviews } from 'moviesAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    // const controller = new AbortController();
    async function getMovieInfo() {
      try {
        const movieReview = await getMovieReviews(movieId);
        setMovieReviews(movieReview);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieInfo();
    // return () => {
    //   controller.abort();
    // };
  }, [movieId]);
  console.log(movieReviews);
  return (
    <>
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie </p>
      )}
    </>
  );
};
