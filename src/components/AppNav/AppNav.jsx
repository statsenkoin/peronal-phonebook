import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Typography } from '@mui/material';

export function AppNav() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {/* Link to Home */}
      <Link to="/">
        <Typography variant="button">My Phonebook</Typography>
      </Link>
      {isLoggedIn && (
        <Link to="/contacts">
          <Typography variant="h6">Contacts</Typography>
        </Link>
      )}
    </>
  );
}
