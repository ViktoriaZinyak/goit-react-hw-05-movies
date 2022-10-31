import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'moviesAPI';
import { SearchBar } from './SearchBar';
import { List, Section } from 'pages/Home/Home.styled';
import { MovieItem } from 'components/MovieItem/MovieItem';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
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
  }, [query]);

  const onChangeFilter = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <Section>
      <SearchBar onSubmit={onChangeFilter} />
      {movies.length > 0 && (
        <List>
          {movies.map(movieItem => {
            return <MovieItem key={movieItem.id} movieItem={movieItem} />;
          })}
        </List>
      )}
    </Section>
  );
};

export default Movies;
