import styles from './header.css';
import { Avatar, links as avatarLinks } from './avatar';
import { Brand, links as brandLinks } from './brand';
import { Navigation, links as navigationLinks } from './navigation';

export const links = () => [
  ...avatarLinks(),
  ...brandLinks(),
  ...navigationLinks(),
  { rel: 'stylesheet', href: styles },
];

export function Header() {
  return (
    <header className="header">
      <Brand />
      <Avatar />
      {/* <Navigation /> */}
    </header>
  );
}
