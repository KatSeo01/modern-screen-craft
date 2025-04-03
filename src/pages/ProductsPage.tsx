
import React from 'react';
import Layout from '../components/Layout';
import ProductListView from '../components/ProductListView';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, Grid3X3 } from "lucide-react";
import SearchBar from '../components/SearchBar';

const ProductsPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-4 fade-in">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="flex items-center gap-2">
                <Grid3X3 className="h-4 w-4" />
                <span>Products</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 mt-4">
          <h1 className="text-2xl font-bold text-healthcare-700">Products</h1>
          <SearchBar />
        </div>
        
        <ProductListView />
      </div>
    </Layout>
  );
};

export default ProductsPage;
