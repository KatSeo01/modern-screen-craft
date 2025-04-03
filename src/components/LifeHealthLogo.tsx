
import React from 'react';

const LifeHealthLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="text-healthcare-700 font-bold text-2xl">
        <span>L</span>
        <span className="text-red-500">i</span>
        <span>fe</span>
      </div>
      <div className="text-healthcare-700 text-xs flex flex-col ml-1 leading-tight">
        <span>HEALTH</span>
        <span>CARE</span>
      </div>
    </div>
  );
};

export default LifeHealthLogo;
