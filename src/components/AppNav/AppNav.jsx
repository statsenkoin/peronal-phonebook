// import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import { GiNotebook } from 'react-icons/gi';
import { Nav, HomeLink, LinkStyled } from './AppNav.styled';

export function AppNav() {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      {/* Link to Home */}
      <LinkStyled to="/">
        <HomeLink>
          <GiNotebook size={24} />
          My Phonebook
        </HomeLink>
      </LinkStyled>
      {isLoggedIn && <LinkStyled to="/contacts">Contacts</LinkStyled>}
    </Nav>
  );
}
