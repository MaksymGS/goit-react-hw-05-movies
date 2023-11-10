import { GenresItem, GenresList, InfoWrapper, Wrapper } from "./MovieInfo.styled";

export const MovieInfo = ({ movieDetail }) => {
  const { title, vote_average, overview, poster_path, genres } = movieDetail;
  return (
    <Wrapper>
      <img src={'https://image.tmdb.org/t/p/w300' + poster_path} alt={title} />
      <InfoWrapper>
        <h2>{title}</h2>
        <h4>Rating: {vote_average}</h4>
        <h4>Overview:</h4>
        <p>{overview}</p>
        <GenresList>
          Genres:
          {genres.map(genre => (
            <GenresItem> -{genre.name} </GenresItem>
          ))}
        </GenresList>
      </InfoWrapper>
    </Wrapper>
  );
};
