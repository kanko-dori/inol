import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import tailwind from '~/styles/generated.css';
import { googleFontLinks } from '~/utils/googleFontLinks';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwind },
  ...googleFontLinks(),
];

export const meta: MetaFunction = () => {
  return { title: 'Inol' };
};

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="bg-gradient-to-b from-[#fae5b9] to-[#f7db8e] min-h-screen max-h-screen overflow-hidden">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
