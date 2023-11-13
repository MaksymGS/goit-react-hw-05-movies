import { Link, NavDetails} from 'components/Layout';
import {
  GenresItem,
  GenresList,
  Image,
  InfoWrapper,
  PosterWrap,
  Wrapper,
} from './MovieInfo.styled';
import { useLocation } from 'react-router-dom';

export const MovieInfo = ({ movieDetail }) => {
  const location = useLocation();
    const { title, vote_average, overview, poster_path, genres } = movieDetail;
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      <Wrapper>
        <PosterWrap>
          <Image
            src={
              poster_path
                ? 'https://image.tmdb.org/t/p/w300' + poster_path
                : defaultImg
            }
            alt={title}
            width="300px"
          />
        </PosterWrap>
        <InfoWrapper>
          <h2>{title}</h2>
          <h4>Rating: {vote_average}</h4>
          <h4>Overview:</h4>
          <p>{overview}</p>
          <GenresList>
            Genres:
            {genres.map(genre => (
              <GenresItem key={genre.id}> -{genre.name} </GenresItem>
            ))}
          </GenresList>
        </InfoWrapper>
      </Wrapper>
      <NavDetails>
        <Link to={'reviews'} state={{ from: location }}>Reviews</Link>
        <Link to={'cast'} state={{ from: location }}>Cast</Link>
      </NavDetails>
    </>
  );
};
