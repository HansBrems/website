import { Outlet } from '@remix-run/react';
import { Header, links as headerLinks } from '../header/header';
import { Footer, links as footerLinks } from '../footer/footer';
import styles from './layout.css';

export const links = () => [
  ...headerLinks(),
  ...footerLinks(),
  { rel: 'stylesheet', href: styles },
];

export function Layout() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
