import { ActorCard, Image, ImageWrap, InfoWrap, WrapperCast } from './MovieCast.styled';

export const MovieCast = ({ cast }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      {cast.length > 0 && (
        <WrapperCast>
          {cast.map(({ id, name, profile_path, character }) => (
            <ActorCard key={id}>
              <ImageWrap>
                <Image
                  src={
                    profile_path
                      ? 'https://image.tmdb.org/t/p/w300' + profile_path
                      : defaultImg
                  }
                  alt={name}
                  height='100%'
                />
              </ImageWrap>
              <InfoWrap>
                <h4>{name}</h4>
                <p>{character}</p>
              </InfoWrap>
            </ActorCard>
          ))}
        </WrapperCast>
      )}
    </>
  );
};
