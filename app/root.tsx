import type { MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import styles from './styles/app.css';

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'Remix Frontend Test Task',
    viewport: 'width=device-width,initial-scale=1'
});

export function links() {
    return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
    return (
        <html lang="en" className="h-full">
            <head>
                <Meta />
                <Links />
            </head>
            <body className="flex h-full flex-col">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
