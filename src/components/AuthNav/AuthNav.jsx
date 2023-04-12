// import { Link } from 'react-router-dom';
import { Nav, LinkStyled } from 'components/AppNav/AppNav.styled';

export const AuthNav = () => {
  return (
    <Nav>
      <LinkStyled to="/register">Register</LinkStyled>
      <LinkStyled to="/login">Log In</LinkStyled>
    </Nav>
  );
};
