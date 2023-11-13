import { useEffect, useRef, useState } from 'react';
import { MdOutlineBackspace } from 'react-icons/md';
import Notiflix from 'notiflix';
import { fetchMovieDetail } from 'api';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Loader } from 'components/Loader/Loader';
import { BackLink } from 'components/BackLink';

export default function MovieDetails() {
  const [loading, setLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getMovieDetail(movieId) {
      try {
        setLoading(true);
        const resp = await fetchMovieDetail(movieId);
        if (!resp) {
          Notiflix.Notify.failure(`Nothing was found for this query"`);
        }
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
  }, [movieId]);

  return (
    <>
      <BackLink to={backLink}>
        <MdOutlineBackspace size={36} />
      </BackLink>
      {movieDetail && <MovieInfo movieDetail={movieDetail} />}
      <Outlet />
      <Loader isLoading={loading} />
    </>
  );
}
