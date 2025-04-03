
import React from 'react';
import LifeHealthLogo from './LifeHealthLogo';

interface TopBarProps {
  username: string;
}

const TopBar: React.FC<TopBarProps> = ({ username }) => {
  return (
    <div className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <LifeHealthLogo />
      <div className="text-gray-700">
        Welcome <span className="font-semibold">{username}</span>
      </div>
    </div>
  );
};

export default TopBar;
