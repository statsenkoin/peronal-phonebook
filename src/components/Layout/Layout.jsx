import { Header } from 'components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
