
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  
  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className="relative w-full md:w-80">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          id="search-input"
          type="search"
          placeholder="Search products, categories..."
          className="pl-9 pr-10 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button 
            className="absolute right-2.5 top-2.5 text-gray-500 hover:text-gray-700"
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
