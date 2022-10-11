import styles from './brand.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];

export function Brand() {
  return (
    <div className="root">
      <div>
        <div className="title">Longville</div>
        <div className="subtitle">Software</div>
      </div>
    </div>
  );
}
