
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid3X3, Filter, Settings, Moon, Sun, Info } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const Sidebar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="w-64 h-full bg-sidebar border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-sidebar-foreground">Life Healthcare</h2>
        <p className="text-sm text-sidebar-foreground/70">Product Management</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => 
            `flex items-center px-4 py-2.5 rounded-md transition-colors ${
              isActive 
                ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium' 
                : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            }`
          }
        >
          <Home className="mr-2 h-5 w-5" />
          Dashboard
        </NavLink>
        
        <NavLink
          to="/products"
          className={({ isActive }) => 
            `flex items-center px-4 py-2.5 rounded-md transition-colors ${
              isActive 
                ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium' 
                : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            }`
          }
        >
          <Grid3X3 className="mr-2 h-5 w-5" />
          Products
        </NavLink>
        
        <NavLink
          to="/bulk-update"
          className={({ isActive }) => 
            `flex items-center px-4 py-2.5 rounded-md transition-colors ${
              isActive 
                ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium' 
                : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            }`
          }
        >
          <Filter className="mr-2 h-5 w-5" />
          Bulk Update
        </NavLink>
        
        <NavLink
          to="/admin"
          className={({ isActive }) => 
            `flex items-center px-4 py-2.5 rounded-md transition-colors ${
              isActive 
                ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium' 
                : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            }`
          }
        >
          <Settings className="mr-2 h-5 w-5" />
          Admin
        </NavLink>
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center justify-between">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle theme (Ctrl+D)</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <Info className="h-5 w-5" />
                <span className="sr-only">Help & Support</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Help & Support</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="mt-4 text-xs text-center text-sidebar-foreground/70">
          <p>Life Healthcare Products</p>
          <p>v1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
