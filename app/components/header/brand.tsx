import styles from './brand.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];

export function Brand() {
  return (
    <div className="root">
      <div>
        <div className="title">
          Longville <span className="subtitle">Software</span>
        </div>
      </div>
    </div>
  );
}
