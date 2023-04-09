import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';

export function AppNav() {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">
        <span>
          <span role="img" aria-label="icon"></span>My Phonebook
        </span>
      </Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
}
