import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <TopNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
