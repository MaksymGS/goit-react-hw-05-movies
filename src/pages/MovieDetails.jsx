import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { fetchMovieDetail } from 'api';
import { useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Loader } from 'components/Loader/Loader';

export default function MovieDetails() {
  const [loading, setLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState(null);
  const { movieId } = useParams();
  
  useEffect(() => {
    async function getMovieDetail(movieId) {
      try {
        setLoading(true);
        const resp = await fetchMovieDetail(movieId);
        if (!resp) {
          Notiflix.Notify.failure(`Nothing was found for this query"`);
        }
        console.log(resp);
        setMovieDetail(resp);
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
    getMovieDetail(movieId);
  }, []);

  return (
    <>
      <Loader isLoading={loading} />
      {movieDetail && <MovieInfo movieDetail={movieDetail} />}
    </>
  );
}
