import { fetchTrandingMovie } from 'api';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { List, ListItem, Tittle, Votes } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
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
    <List>
      {movie &&
        movie.map(item => (
          <ListItem key={item.id}>
            <img
              src={'https://image.tmdb.org/t/p/w300' + item.poster_path}
              alt={item.title}
            ></img>
            <Tittle>{item.title}</Tittle>
            <Votes>Average votes: {item.vote_average}</Votes>
          </ListItem>
        ))}
      <Loader isLoading={loading} />
    </List>
  );
};
