
import React from 'react';
import { Button } from "@/components/ui/button";
import { Grid3X3, Plus } from "lucide-react";
import ProductList from './ProductList';

const ProductListView: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 flex justify-end">
        <Button variant="outline" className="border-gray-300 text-gray-700 flex gap-2">
          <Grid3X3 className="h-4 w-4" />
          <span>Show Grid Actions</span>
        </Button>
      </div>
      
      <div className="px-4 pb-4 flex-1">
        <ProductList />
      </div>
    </div>
  );
};

export default ProductListView;
