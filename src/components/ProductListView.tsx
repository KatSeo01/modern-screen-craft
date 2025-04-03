
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Grid3X3, Plus, Filter, Download, Upload, Compare, CheckSquare, MoreHorizontal } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from "@/hooks/use-toast";

interface ProductListViewProps {
  filterCategory?: string;
}

const ProductListView: React.FC<ProductListViewProps> = ({ filterCategory }) => {
  const [view, setView] = useState<'list' | 'grid'>('list');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  const handleBatchOperation = (operation: string) => {
    if (selectedItems.length === 0) {
      toast({
        title: "No items selected",
        description: "Please select items to perform this operation",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: `${operation} operation`,
      description: `Processing ${selectedItems.length} items`,
    });
  };
  
  return (
    <Card className="animate-fade-in">
      <CardContent className="p-0">
        <div className="p-4 border-b flex flex-wrap gap-2 justify-between">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="border-gray-300 text-gray-700 flex gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Product</span>
            </Button>
            
            {selectedItems.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-gray-300 text-gray-700 flex gap-2">
                    <CheckSquare className="h-4 w-4" />
                    <span>Batch Operations ({selectedItems.length})</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuLabel>Batch Operations</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleBatchOperation("Update")}>Update Selected</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleBatchOperation("Export")}>Export Selected</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleBatchOperation("Archive")}>Archive Selected</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleBatchOperation("Delete")}>Delete Selected</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            
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
                <div className="p-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <Checkbox id="category" />
                    <Label htmlFor="category">Category</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Checkbox id="status" />
                    <Label htmlFor="status">Status</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Checkbox id="date" />
                    <Label htmlFor="date">Date Added</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price" />
                    <Label htmlFor="price">Price Range</Label>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Apply Filters</DropdownMenuItem>
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
            
            <Button variant="outline" className="border-gray-300 text-gray-700 flex gap-2">
              <Upload className="h-4 w-4" />
              <span>Import</span>
            </Button>
            
            <Button variant="outline" className="border-gray-300 text-gray-700 flex gap-2">
              <Compare className="h-4 w-4" />
              <span>Compare</span>
            </Button>
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
          <ProductList 
            filterCategory={filterCategory} 
            selectable={true} 
            onSelectionChange={setSelectedItems} 
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductListView;
