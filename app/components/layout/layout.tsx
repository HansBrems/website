import { Outlet } from 'remix';
import { Header, links as headerLinks } from '../header/header';
import { Navigation, links as navigationLinks } from '../navigation/navigation';
import styles from './layout.css';

export const links = () => [
  ...headerLinks(),
  ...navigationLinks(),
  { rel: 'stylesheet', href: styles }
];

export function Layout() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="container">
          <Outlet />
      </main>
    </>
  );
}
