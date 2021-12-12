import styles from './avatar.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];

export function Avatar() {
  return <img alt="avatar" className="avatar" src="/images/me.jpg" />;
}
