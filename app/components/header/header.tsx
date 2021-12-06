import styles from "./header.css";

export const links = () => [
  { rel: 'stylesheet', href: styles }
];

export function Header() {
  return (
    <header>
      <div className="background">
        <img alt="avatar" className="avatar" src="/images/me.jpg" />
      </div>

      <div>
        <h1>World of Entropy</h1>
        <h2>By Hans Brems</h2>
      </div>
    </header>
  );
}
