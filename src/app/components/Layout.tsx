import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import TopNav from './TopNav';

export default function Layout() {
  return (
    <div className="app-layout flex flex-col min-h-screen">
      <TopNav />
      <main className="flex-1 flex">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
