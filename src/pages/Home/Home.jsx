import { getPopMovies } from 'moviesAPI';
import { useEffect, useState } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Section, List } from './Home.styled';

const Home = () => {
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
        <Section>
          <h1>Trending today</h1>
          <List>
            {moviesList.map(movieItem => {
              return <MovieItem key={movieItem.id} movieItem={movieItem} />;
            })}
          </List>
        </Section>
      )}
    </>
  );
};

export default Home;
