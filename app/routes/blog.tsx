import styles from 'highlight.js/styles/github-dark-dimmed.css';

import { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export default function Blog() {
  return <Outlet />;
}
