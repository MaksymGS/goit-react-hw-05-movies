import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api';
import Notiflix from 'notiflix';
import { MovieReview } from 'components/MovieInfo/MovieReview/MovieReview';
import { Loader } from 'components/Loader/Loader';

export default function Reviews() {
  const { movieId } = useParams();

  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovieReview(movieId) {
      try {
        setLoading(true);
        const resp = await fetchMovieReviews(movieId);
        if (!resp) {
          Notiflix.Notify.failure(`Nothing was found for this query"`);
        }
        setReview(resp);
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
    getMovieReview(movieId);
  }, [movieId]);

  return (
    <>
      {review && <MovieReview review={review} />}
      <Loader isLoading={loading} />
    </>
  );
}
