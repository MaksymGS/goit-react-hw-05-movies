import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
      </Route>
    </Routes>
  );
};
