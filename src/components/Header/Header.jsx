import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <h2>
        <span role="img" aria-label="icon"></span>My Phonebook
      </h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </>
  );
}
