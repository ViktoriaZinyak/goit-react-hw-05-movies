import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <p>This page is not found.</p>
      <Link to="/">Home</Link>
    </div>
  );
};
