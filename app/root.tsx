import type { LinksFunction } from "remix";
import { Links, LiveReload, Meta, Outlet, Scripts } from 'remix';

import resetStylesUrl from "~/styles/reset.css";
import smallStylesUrl from "~/styles/small.css";

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
    { rel: "stylesheet", href: resetStylesUrl },
    {
      rel: "stylesheet",
      href: smallStylesUrl
    }
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
        {process.env.NODE_ENV === "development" ? (
          <LiveReload />
        ) : null}
      </body>
    </html>
  );
}
