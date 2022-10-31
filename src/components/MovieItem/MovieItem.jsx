import { Link } from './MovieItem.styled';

export const MovieItem = ({ movieItem }) => {
  return (
    <li>
      <Link to={`/movies/${movieItem.id}`}>{movieItem.title}</Link>
    </li>
  );
};
