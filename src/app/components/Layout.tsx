import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import TopNav from './TopNav';

export default function Layout() {
  return (
    <div className="app-layout">
      <TopNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
