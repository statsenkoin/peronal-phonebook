import { AppNav, AuthNav, UserMenu } from 'components';
import { useAuth } from 'hooks';

import { AppBar, Container, Grid } from '@mui/material';

export function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="static">
      <Container maxWidth="sm">
        <Grid
          container
          minHeight={96}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid
            display="flex"
            // justifyContent="flex-start"
            alignItems="center"
            gap={2}
          >
            <AppNav />
          </Grid>
          <Grid
            display="flex"
            // justifyContent="flex-end"
            alignItems="center"
            gap={2}
          >
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
