
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Grid3X3, Plus, Filter, Download, Upload } from "lucide-react";
import ProductList from './ProductList';
import { Card, CardContent } from "@/components/ui/card";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';

const ProductListView: React.FC = () => {
  const [view, setView] = useState<'list' | 'grid'>('list');
  
  return (
    <Card className="animate-fade-in">
      <CardContent className="p-0">
        <div className="p-4 border-b flex flex-wrap gap-2 justify-between">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="border-gray-300 text-gray-700 flex gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Product</span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-gray-300 text-gray-700 flex gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Category</DropdownMenuItem>
                <DropdownMenuItem>Status</DropdownMenuItem>
                <DropdownMenuItem>Date Added</DropdownMenuItem>
                <DropdownMenuItem>Price Range</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-gray-300 text-gray-700 flex gap-2">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Export as CSV</DropdownMenuItem>
                <DropdownMenuItem>Export as Excel</DropdownMenuItem>
                <DropdownMenuItem>Export as PDF</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant={view === 'list' ? "default" : "outline"} 
              className={view === 'list' ? "bg-healthcare-700" : "border-gray-300 text-gray-700"}
              onClick={() => setView('list')}
            >
              List View
            </Button>
            <Button 
              variant={view === 'grid' ? "default" : "outline"} 
              className={view === 'grid' ? "bg-healthcare-700" : "border-gray-300 text-gray-700"}
              onClick={() => setView('grid')}
            >
              <Grid3X3 className="h-4 w-4 mr-2" />
              Grid View
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <ProductList />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductListView;
