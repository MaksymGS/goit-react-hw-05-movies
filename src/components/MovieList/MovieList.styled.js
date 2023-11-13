import styled from 'styled-components';
import { Link } from 'react-router-dom/dist';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
`;
export const ListItem = styled.li`
  width: 200px;
  padding-bottom: 6px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fdfdf4;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const Tittle = styled.h3`
  font-size: 14px;
  text-align: center;
  padding-left: 4px;
  padding-right: 4px;
  margin-bottom: 2px;
`;
export const Votes = styled.p`
  text-align: center;
  font-size: 12px;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
export const ImageWrap = styled.div`
  height: 300px;
  min-width: 200px;
`;
export const Image = styled.img`
  object-fit: cover;
  display: block;
  height: 100%;
  width: 100%;
`;
