import { searchMovies } from 'api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchBar } from 'components/SearchBar/SearchBar';

import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

//ще заам'ятати пошук фільмів при поверненні на цю сторінку
export default function Movies() {
  const [query, setQuery] = useState('');
  //   const [page, setPage] = useState(1);
  const [findedMovie, setFindedMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(query);

  useEffect(() => {
    async function getSearchMovies(searchQuery) {
      try {
        setLoading(true);
        const resp = await searchMovies(searchQuery);
        if (resp.results.length === 0) {
          Notiflix.Notify.failure(`Nothing was found for this query"`);
        }
        setFindedMovie(resp.results);
      } catch (error) {
        Notiflix.Report.failure(
          `${error.message}`,
          'Something went wrong, please try reloading this page',
          'Ok',
          {
            titleMaxLength: 50,
          }
        );
      } finally {
        setLoading(false);
      }
    }
    if (query === '') {
      return;
    }
    getSearchMovies(query);
  }, [query]);

  const changeQuery = value => {
    setQuery(value);
  };

  return (
    <div>
      <SearchBar onChangeQuery={changeQuery} />
      <Loader isLoading={loading} />
      <MovieList findedMovie={findedMovie} />
      <Outlet />
    </div>
  );
}