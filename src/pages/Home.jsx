import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import { fetchTrandingMovie } from 'api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';

export default function Home() {
  const [loading, setLoading] = useState(false);
  // const [loadMore, setLoadMore] = useState(false);
  // const [page, setPage] = useState(1);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function trendingMovies() {
      try {
        setLoading(true);
        const resp = await fetchTrandingMovie();
        if (resp.results.length === 0) {
          Notiflix.Notify.failure(`Nothing was found for this query"`);
        }
        console.log(resp.results);
        setMovie(resp.results);
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
    trendingMovies();
  }, []);

  //   console.log(movie);
  return (
    <>
      <MovieList findedMovie={movie} />
      <Loader isLoading={loading} />
    </>
  );
}
