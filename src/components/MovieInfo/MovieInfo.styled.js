import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const InfoWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const GenresList = styled.ul`
  display: flex;
  gap: 4px;
  font-weight: 600;
`;

export const GenresItem = styled.li`
  font-weight: 400;
`;
export const PosterWrap = styled.div`
  height: 450px;
  min-width: 300px;
  max-width: 300px;
`;
export const Image = styled.img`
  object-fit: cover;
  display: block;
  height: 100%;
  width: 100%;
`;