import { useLocation } from 'react-router-dom';
import {
  Image,
  ImageWrap,
  List,
  ListItem,
  StyledLink,
  Tittle,
  Votes,
} from './MovieList.styled';

export const MovieList = ({ findedMovie }) => {
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <List>
      {findedMovie.map(item => (
        <ListItem key={item.id}>
          <StyledLink to={`/movies/${item.id}` } state={{ from: location }} >
            <ImageWrap>
              <Image
                src={
                  item.poster_path
                    ? 'https://image.tmdb.org/t/p/w300' + item.poster_path
                    : defaultImg
                }
                alt={item.title}
              ></Image>
            </ImageWrap>
            <Tittle>{item.title}</Tittle>
            <Votes>Average votes: {item.vote_average}</Votes>
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
};
