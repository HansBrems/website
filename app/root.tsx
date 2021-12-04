import type { LinksFunction } from "remix";
import { Links, LiveReload, Meta, Outlet, Scripts } from 'remix';

import resetStylesUrl from "~/styles/reset.css";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: resetStylesUrl },
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
        <Outlet />
        <Scripts />
        {process.env.NODE_ENV === "development" ? (
          <LiveReload />
        ) : null}
      </body>
    </html>
  );
}
