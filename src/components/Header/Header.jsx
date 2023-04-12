import { AppNav, AuthNav, UserMenu } from 'components';
import { useAuth } from 'hooks';
import { HeaderBar, NavBar } from './Header.styled';

export function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderBar>
      <NavBar>
        <AppNav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavBar>
    </HeaderBar>
  );
}
