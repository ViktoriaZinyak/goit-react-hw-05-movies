import { NavLink } from 'react-router-dom';

export const MovieItem = ({ movieItem }) => {
  return (
    <li>
      <NavLink to={`/movies/${movieItem.id}`}>{movieItem.title}</NavLink>
    </li>
  );
};
