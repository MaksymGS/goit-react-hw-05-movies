import { searchMovies } from 'api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchBar } from 'components/SearchBar/SearchBar';

import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [findedMovie, setFindedMovie] = useState([]);
  const [loading, setLoading] = useState(false);
 
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
    searchParams.set('query', value)
    setSearchParams(searchParams);
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
