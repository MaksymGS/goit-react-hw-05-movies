import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api';
import Notiflix from 'notiflix';
import { MovieCast } from 'components/MovieInfo/MovieCast/MovieCast';
import { Loader } from 'components/Loader/Loader';

export default function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovieCast(movieId) {
      try {
        setLoading(true);
        const resp = await fetchMovieCast(movieId);
        if (!resp) {
          Notiflix.Notify.failure(`Nothing was found for this query"`);
        }
        const mainCast = resp.cast.filter((element, index) => {
         return index < 8;
        });
        setCast(mainCast);
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
    if (!movieId) return;
    getMovieCast(movieId);
  }, [movieId]);

  return (
    <>
      {cast && <MovieCast cast={cast} />}
      <Loader isLoading={loading} />
    </>
  );
}
