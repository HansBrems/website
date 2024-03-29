import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Scripts } from '@remix-run/react';

import resetStylesUrl from '~/styles/reset.css';
import variablesUrl from '~/styles/variables.css';
import smallStylesUrl from '~/styles/small.css';
import mediumStylesUrl from '~/styles/medium.css';
import largeStylesUrl from '~/styles/large.css';

import { Layout, links as layoutLinks } from '~/components/layout/layout';

export let links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/IBMPlexSerif-Regular.ttf',
      type: 'font/truetype',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/IBMPlexSerif-Thin.ttf',
      type: 'font/truetype',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/OpenSans-Light.ttf',
      type: 'font/truetype',
      crossOrigin: 'anonymous',
    },
    ...layoutLinks(),
    { rel: 'stylesheet', href: resetStylesUrl },
    { rel: 'stylesheet', href: variablesUrl },
    {
      rel: 'stylesheet',
      href: smallStylesUrl,
    },
    {
      rel: 'stylesheet',
      href: mediumStylesUrl,
    },
    {
      rel: 'stylesheet',
      href: largeStylesUrl,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
