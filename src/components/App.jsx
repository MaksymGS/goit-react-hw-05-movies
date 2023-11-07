import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './Movies/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" />
          <Route path="reviews" />
        </Route>
      </Route>
    </Routes>
  );
};
