
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-60 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <select 
            className="appearance-none w-full bg-white border border-gray-300 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-healthcare-700 focus:border-healthcare-700"
            defaultValue="South Africa"
          >
            <option>South Africa</option>
            <option>Namibia</option>
            <option>Botswana</option>
            <option>Zimbabwe</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-2">
        <Button 
          variant="default" 
          className="w-full justify-start bg-healthcare-700 hover:bg-healthcare-800"
        >
          Products
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Bulk Update
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Administration
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
