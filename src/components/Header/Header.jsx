import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div>
        <span role="img" aria-label="icon"></span>My Phonebook
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </>
  );
}
