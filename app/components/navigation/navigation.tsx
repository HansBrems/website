import styles from './navigation.css';
import { useState } from 'react';

export const links = () => [{ rel: 'stylesheet', href: styles }];

const menuItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className="navigation-toggle" onClick={handleToggle}>
        {isOpen ? 'X' : '[ ]'}
      </button>
      <nav>
        <ul className="primary-navigation flex" data-visible={isOpen}>
          {menuItems.map(item => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
