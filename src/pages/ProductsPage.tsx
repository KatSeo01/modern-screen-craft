
import React from 'react';
import Layout from '../components/Layout';
import ProductListView from '../components/ProductListView';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, Grid3X3, Download, Upload, Compare } from "lucide-react";
import SearchBar from '../components/SearchBar';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from "@/hooks/use-toast";

const ProductsPage: React.FC = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  const handleImportExport = (action: 'import' | 'export') => {
    toast({
      title: action === 'import' ? 'Import Products' : 'Export Products',
      description: action === 'import' ? 'Product import started' : 'Product export started',
    });
  };
  
  const handleCompare = () => {
    toast({
      title: 'Product Comparison',
      description: 'Select products to compare',
    });
  };

  return (
    <Layout>
      <div className={`${isMobile ? 'p-2' : 'p-4'} fade-in`}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard" className="flex items-center gap-2">
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
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            <Button 
              size={isMobile ? "sm" : "default"}
              variant="outline" 
              className="flex items-center gap-1"
              onClick={() => handleImportExport('import')}
            >
              <Upload className="h-4 w-4" />
              {!isMobile && <span>Import</span>}
            </Button>
            <Button 
              size={isMobile ? "sm" : "default"}
              variant="outline" 
              className="flex items-center gap-1"
              onClick={() => handleImportExport('export')}
            >
              <Download className="h-4 w-4" />
              {!isMobile && <span>Export</span>}
            </Button>
            <Button 
              size={isMobile ? "sm" : "default"}
              variant="outline" 
              className="flex items-center gap-1"
              onClick={handleCompare}
            >
              <Compare className="h-4 w-4" />
              {!isMobile && <span>Compare</span>}
            </Button>
          </div>
          <SearchBar />
        </div>
        
        <Tabs defaultValue="all" className="mb-4">
          <TabsList>
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="screws">Screws</TabsTrigger>
            <TabsTrigger value="implants">Implants</TabsTrigger>
            <TabsTrigger value="syringes">Syringes</TabsTrigger>
            <TabsTrigger value="catheters">Catheters</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <ProductListView />
          </TabsContent>
          <TabsContent value="screws">
            <Card>
              <CardContent className="p-4">
                <ProductListView filterCategory="Screw Bone - Cannulated" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="implants">
            <Card>
              <CardContent className="p-4">
                <ProductListView filterCategory="Orthopaedic Implants" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="syringes">
            <Card>
              <CardContent className="p-4">
                <ProductListView filterCategory="Syringes : Luer Slip - 20Ml" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="catheters">
            <Card>
              <CardContent className="p-4">
                <ProductListView filterCategory="Straight Silicone Chest Catheter" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProductsPage;
