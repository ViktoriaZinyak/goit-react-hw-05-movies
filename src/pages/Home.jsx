import { getPopMovies } from 'moviesAPI';
import { useEffect, useState } from 'react';
import { MovieItem } from 'components/MovieItem';

export const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    async function getMoviesList() {
      try {
        const movies = await getPopMovies();
        setMoviesList(movies.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMoviesList();
  }, []);

  return (
    <>
      {moviesList.length > 0 && (
        <section>
          <h1>Trending today</h1>
          <ul>
            {moviesList.map(movieItem => {
              return (
                // <MovieItem key={movieItem.id}>{movieItem.title}</MovieItem>
                <MovieItem key={movieItem.id} movieItem={movieItem} />
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
};
