
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Filter, Search, Star, Grid3X3 } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const QuickActionBar: React.FC = () => {
  const navigate = useNavigate();
  
  // Keyboard shortcut handlers
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if Control or Command key is pressed
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case 'p':
            event.preventDefault();
            navigate('/products');
            break;
          case 'b':
            event.preventDefault();
            navigate('/bulk-update');
            break;
          case 'a':
            event.preventDefault();
            navigate('/admin');
            break;
          case 'f':
            event.preventDefault();
            document.getElementById('search-input')?.focus();
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div className="p-4 bg-gradient-to-r from-healthcare-700 to-healthcare-800 rounded-lg shadow-md text-white animate-fade-in">
      <h2 className="text-xl font-semibold mb-3">Quick Actions</h2>
      <div className="flex flex-wrap gap-2">
        <Button 
          variant="secondary" 
          className="bg-white/10 hover:bg-white/20 text-white" 
          onClick={() => navigate('/products')}
        >
          <Grid3X3 className="mr-2 h-4 w-4" />
          View Products
          <span className="ml-2 opacity-70 text-xs">Ctrl+P</span>
        </Button>
        
        <Button 
          variant="secondary" 
          className="bg-white/10 hover:bg-white/20 text-white"
          onClick={() => navigate('/bulk-update')}
        >
          <Filter className="mr-2 h-4 w-4" />
          Bulk Update
          <span className="ml-2 opacity-70 text-xs">Ctrl+B</span>
        </Button>
        
        <Button 
          variant="secondary" 
          className="bg-white/10 hover:bg-white/20 text-white"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
        
        <Button 
          variant="secondary" 
          className="bg-white/10 hover:bg-white/20 text-white"
        >
          <Star className="mr-2 h-4 w-4" />
          Favorites
        </Button>
        
        <Button 
          variant="secondary" 
          className="bg-white/10 hover:bg-white/20 text-white"
          onClick={() => navigate('/admin')}
        >
          <Search className="mr-2 h-4 w-4" />
          Advanced Search
          <span className="ml-2 opacity-70 text-xs">Ctrl+F</span>
        </Button>
      </div>
    </div>
  );
};

export default QuickActionBar;
