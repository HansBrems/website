import { Outlet } from '@remix-run/react';
import { Header, links as headerLinks } from '../header/header';
import styles from './layout.css';

export const links = () => [
  ...headerLinks(),
  { rel: 'stylesheet', href: styles },
];

export function Layout() {
  return (
    <>
      <Header />

      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
