import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Link to="/register">
        <Typography variant="h6">Register</Typography>
      </Link>

      <Link to="/login">
        <Typography variant="h6">Log In</Typography>
      </Link>
    </>
  );
};
