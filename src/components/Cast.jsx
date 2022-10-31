import { getMovieActors } from 'moviesAPI';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IMG_ORG, IMG_CONTENT } from 'moviesAPI';

const Cast = () => {
  const [actorsInfo, setActorInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    // const controller = new AbortController();
    async function getActorInfo() {
      try {
        const actorInfo = await getMovieActors(movieId);
        setActorInfo(actorInfo);
      } catch (error) {
        console.log(error);
      }
    }
    getActorInfo();
    // return () => {
    //   controller.abort();
    // };
  }, [movieId]);

  // const img = `${IMG_ORG}${profile_path}`;
  //   const actor = movieId.map(actor => actor.name);
  console.log(actorsInfo);
  return (
    <>
      {actorsInfo.length > 0 ? (
        <ul>
          {actorsInfo.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={profile_path ? `${IMG_ORG}${profile_path}` : IMG_CONTENT}
                  alt={name}
                  width="200"
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We dont`t have any information about actors</p>
      )}
    </>
  );
};

export default Cast;
