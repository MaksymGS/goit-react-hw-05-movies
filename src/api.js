import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrandingMovie = async () => {
  const params = new URLSearchParams({
    api_key: 'eb0eb7c0094eafcd73993969787d7a4b',
  });
  const resp = await axios.get(`/trending/movie/week?${params}`);
  return resp.data;
};

export const searchMovies = async searchQuery => {
  const params = new URLSearchParams({
    api_key: 'eb0eb7c0094eafcd73993969787d7a4b',
    query: `${searchQuery}`,
  });
  const resp = await axios.get(`/search/movie?${params}`);
  return resp.data;
};
export const fetchMovieDetail = async movieId => {
  const params = new URLSearchParams({
    api_key: 'eb0eb7c0094eafcd73993969787d7a4b',
  });
  const resp = await axios.get(`movie/${movieId}?${params}`);
  return resp.data;
};
