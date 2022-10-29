import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={'Home'} />
        <Route path="/movies" element={'Movies'} />
        <Route path="/movies/:movieId" element={'MovieDetails'} />
      </Routes>
    </div>
  );
};
