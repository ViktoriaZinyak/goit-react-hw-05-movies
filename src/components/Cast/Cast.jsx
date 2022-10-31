import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IMG_ORG, IMG_CONTENT, getMovieActors } from 'moviesAPI';
import { List, Item, Img, Discrip } from './Cast.styled';

const Cast = () => {
  const [actorsInfo, setActorInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getActorInfo() {
      try {
        const actorInfo = await getMovieActors(movieId);
        setActorInfo(actorInfo);
      } catch (error) {
        console.log(error);
      }
    }
    getActorInfo();
  }, [movieId]);

  return (
    <>
      {actorsInfo.length > 0 ? (
        <List>
          {actorsInfo.map(({ id, profile_path, name, character }) => {
            return (
              <Item key={id}>
                <Img
                  src={profile_path ? `${IMG_ORG}${profile_path}` : IMG_CONTENT}
                  alt={name}
                  width="200"
                />
                <Discrip>{name}</Discrip>
                <Discrip>Character: {character}</Discrip>
              </Item>
            );
          })}
        </List>
      ) : (
        <p>We dont`t have any information about actors</p>
      )}
    </>
  );
};

export default Cast;
