import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Nav, UserName, LogoutBtn } from './UserMenu.styled';

export function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Nav>
      <UserName>Welcome, {user.name}</UserName>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutBtn>
    </Nav>
  );
}
