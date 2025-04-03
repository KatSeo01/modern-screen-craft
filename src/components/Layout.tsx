
import React from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  username?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, username = "Katlego Seoketsa" }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar username={username} />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
