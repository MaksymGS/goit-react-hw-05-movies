import { List, ListItem, StyledLink, Tittle, Votes } from './MovieList.styled';

export const MovieList = ({ findedMovie }) => {
  return (
    <List>
      {findedMovie.map(item => (
        <ListItem key={item.id}>
          <StyledLink to={`/movies/${item.id}`}>
            <img
              src={'https://image.tmdb.org/t/p/w300' + item.poster_path}
              alt={item.title}
            ></img>
            <Tittle>{item.title}</Tittle>
            <Votes>Average votes: {item.vote_average}</Votes>
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
};
