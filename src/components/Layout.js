import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f4f4fd;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto 0;
  padding: 10px 20px;
`;

const Header = styled.header`
  background: #d4d4e0;

  margin-right: auto;
  margin-left: auto;
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  width: auto;
`;

const Navigation = styled.nav`
  display: flex;
  padding-left: 120px;
`;

const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  padding: 16px 8px;
  display: block;
  text-decoration: none;
  &.active {
    color: orange;
    font-weight: 800;
  }
`;
export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Moovies</Link>
        </Navigation>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
