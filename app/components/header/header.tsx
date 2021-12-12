import styles from './header.css';
import { Avatar, links as avatarLinks } from './avatar';
import { Navigation, links as navigationLinks } from './navigation';

export const links = () => [
  ...avatarLinks(),
  ...navigationLinks(),
  { rel: 'stylesheet', href: styles },
];

export function Header() {
  return (
    <header className="header">
      <Avatar />
      <Navigation />
    </header>
  );
}
