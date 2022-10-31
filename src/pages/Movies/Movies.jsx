import { SearchBar } from './SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'moviesAPI';
import { List } from 'pages/Home/Home.styled';
import { MovieItem } from 'components/MovieItem/MovieItem';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  console.log(query);

  // useEffect(() => {
  //   setSearchParams('');
  // }, []);

  useEffect(() => {
    // const controller = new AbortController();

    if (query === '') {
      return;
    }
    async function getMovies() {
      try {
        const movies = await searchMovies(query);
        setMovies(movies);
        console.log(movies);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
    // return () => {
    //   controller.abort();
    // };
  }, [query]);

  const onChangeFilter = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <section>
      <SearchBar onSubmit={onChangeFilter} />
      {movies.length > 0 && (
        <List>
          {movies.map(movieItem => {
            return <MovieItem key={movieItem.id} movieItem={movieItem} />;
          })}
        </List>
      )}
    </section>
  );
};

export default Movies;
