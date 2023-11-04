import { Outlet } from '@remix-run/react';
import { Header } from './header';
import { Footer } from './footer';

export function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="mx-auto max-w-[700px] flex-1 flex-col flex">
        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
