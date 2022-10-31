import { useLocation } from 'react-router-dom';
import { Link } from './MovieItem.styled';

export const MovieItem = ({ movieItem }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${movieItem.id}`} state={{ from: location }}>
        {movieItem.title}
      </Link>
    </li>
  );
};
