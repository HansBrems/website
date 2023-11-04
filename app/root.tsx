import globalStylesUrl from '~/styles/global.css';
import tailwindStylesUrl from '~/styles/tailwind.css';
import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Scripts } from '@remix-run/react';
import { Layout } from '~/components/layout';

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
    {
      rel: 'stylesheet',
      href: tailwindStylesUrl,
    },
    {
      rel: 'stylesheet',
      href: globalStylesUrl,
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
      <body className="text-base">
        <Layout />
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
