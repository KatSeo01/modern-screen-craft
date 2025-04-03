
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search, X, ExternalLink, Edit, Star, Copy } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { useIsMobile } from '@/hooks/use-mobile';
import ProductDetailDialog from './ProductDetailDialog';

// Mock data based on the image
const mockProducts = [
  { id: '209-910', packageCode: '209-910-00001', packageCatalogue: '209.91', packageSchedule: 'NR', nappiCode: '487220', materialDescription: '209.910 Cann 32/Thrd Scrw', description: '209.910 Cann 32/Thrd Scrw', classification: 'Screw Bone - Cannulated' },
  { id: '102106W', packageCode: '102106W-00001', packageCatalogue: 'Oct-06', packageSchedule: 'NR', nappiCode: '618082', materialDescription: '10-2106 Ilizarov Wire Bayonet', description: '10-2106 Ilizarov Wire Bayonet', classification: 'Orthopaedic - External Fixation' },
  { id: '20ML820', packageCode: '20ML820-00100', packageCatalogue: '4616200V', packageSchedule: 'NR', nappiCode: '499773', materialDescription: '20Ml Syringe 4616200V', description: '20Ml Syringe 4616200V', classification: 'Syringes : Luer Slip - 20Ml' },
  { id: '2100173', packageCode: '2100173-00001', packageCatalogue: '21004', packageSchedule: 'NR', nappiCode: '515614', materialDescription: '21004 Thermablate Disposable', description: '21004 Thermablate Disposable', classification: 'Gynaecology: Endometrial' },
  { id: '121836S', packageCode: '121836S-00001', packageCatalogue: '121836', packageSchedule: 'NR', nappiCode: '500781', materialDescription: '121836 Cannulated Screw', description: '121836 Cannulated Screw', classification: 'Screw Bone - Cannulated' },
  { id: '12-1842', packageCode: '12-1842-00001', packageCatalogue: '121842', packageSchedule: 'NR', nappiCode: '500787', materialDescription: '121842 Cannulated Screw', description: '121842 Cannulated Screw', classification: 'Screw Bone - Cannulated' },
  { id: '206-018', packageCode: '206-018-00001', packageCatalogue: '206.018', packageSchedule: 'NR', nappiCode: '538549', materialDescription: '206.018 Canc Screw 18mm', description: '206.018 Canc Screw 18mm', classification: 'Orthopaedic Implants' },
  { id: '210-070', packageCode: '210-070-00001', packageCatalogue: '100/210/070', packageSchedule: 'NR', nappiCode: '616938', materialDescription: 'Airway Nasopharyn 100/210/070', description: 'Airway Nasopharyn 100/210/070', classification: 'Airways Nasopharyngeal' },
  { id: '100028A', packageCode: '100028A-00001', packageCatalogue: '100028AT', packageSchedule: 'NR', nappiCode: '498408', materialDescription: 'Chest Cath Sil Fr28 100028AT', description: 'Chest Cath Sil Fr28 100028AT', classification: 'Straight Silicone Chest Catheter' },
  { id: '100032A', packageCode: '100032A-00001', packageCatalogue: '100032AT', packageSchedule: 'NR', nappiCode: '498416', materialDescription: 'Chest Cath Sil Fr32 100032AT', description: 'Chest Cath Sil Fr32 100032AT', classification: 'Straight Silicone Chest Catheter' },
];

interface ProductListProps {
  filterCategory?: string;
  selectable?: boolean;
  onSelectionChange?: (selectedIds: string[]) => void;
}

const ProductList: React.FC<ProductListProps> = ({ 
  filterCategory, 
  selectable = false,
  onSelectionChange
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  
  const itemsPerPage = 5;
  
  // Filter products based on search term and category filter
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = !searchTerm || 
      product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.classification.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = !filterCategory || 
      product.classification.toLowerCase() === filterCategory.toLowerCase();
      
    return matchesSearch && matchesCategory;
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );
  
  // Handle selection changes
  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selectedItems);
    }
  }, [selectedItems, onSelectionChange]);
  
  const toggleItemSelection = (id: string) => {
    setSelectedItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  
  const toggleSelectAll = () => {
    if (selectedItems.length === paginatedProducts.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(paginatedProducts.map(product => product.id));
    }
  };
  
  // Handle pagination
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  // Handle product click to open detail dialog
  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setIsProductDetailOpen(true);
  };

  return (
    <>
      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200 bg-healthcare-700 text-white p-4 flex items-center rounded-t-lg gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded">
              <div className="text-healthcare-700 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM20 5v4H4V5h16z"/>
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold">Product List</h2>
          </div>
        </div>
        
        <div className="p-4 border-b border-gray-200 flex flex-wrap gap-3 items-center justify-between">
          <div className="flex gap-3">
            <Button variant="outline" className="bg-healthcare-700 text-white hover:bg-healthcare-800 border-healthcare-700">
              Export
            </Button>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search..."
                className="pl-9 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              {searchTerm && (
                <button 
                  className="absolute right-3 top-2.5"
                  onClick={() => setSearchTerm('')}
                >
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              )}
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700"
              onClick={() => setSearchTerm('')}
            >
              Clear Filter
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 bg-healthcare-100"
            >
              Advanced Search
            </Button>
          </div>
        </div>
        
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-healthcare-700 text-white">
                {selectable && (
                  <TableHead className="text-white w-10">
                    <Checkbox 
                      checked={selectedItems.length === paginatedProducts.length && paginatedProducts.length > 0}
                      onCheckedChange={toggleSelectAll}
                      className="border-white data-[state=checked]:bg-white data-[state=checked]:text-healthcare-700"
                    />
                  </TableHead>
                )}
                <TableHead className="text-white">Product Code</TableHead>
                {!isMobile && <TableHead className="text-white">Package Code</TableHead>}
                {!isMobile && <TableHead className="text-white">Package Catalogue</TableHead>}
                {!isMobile && <TableHead className="text-white">Package Schedule</TableHead>}
                <TableHead className="text-white">NAPPI Code</TableHead>
                <TableHead className="text-white">Material Description</TableHead>
                {!isMobile && <TableHead className="text-white">Description</TableHead>}
                <TableHead className="text-white">Classification Description</TableHead>
                {selectable && <TableHead className="text-white w-[100px]">Actions</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedProducts.map((product) => (
                <TableRow 
                  key={product.id} 
                  className="hover:bg-gray-50 border-b border-gray-200 cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  {selectable && (
                    <TableCell onClick={(e) => { e.stopPropagation(); toggleItemSelection(product.id); }}>
                      <Checkbox 
                        checked={selectedItems.includes(product.id)}
                        onCheckedChange={() => {}}
                      />
                    </TableCell>
                  )}
                  <TableCell className="font-medium">{product.id}</TableCell>
                  {!isMobile && <TableCell>{product.packageCode}</TableCell>}
                  {!isMobile && <TableCell>{product.packageCatalogue}</TableCell>}
                  {!isMobile && <TableCell>{product.packageSchedule}</TableCell>}
                  <TableCell>{product.nappiCode}</TableCell>
                  <TableCell>{product.materialDescription}</TableCell>
                  {!isMobile && <TableCell>{product.description}</TableCell>}
                  <TableCell>{product.classification}</TableCell>
                  {selectable && (
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Star className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              ))}
              {paginatedProducts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={selectable ? (isMobile ? 6 : 10) : (isMobile ? 5 : 9)} className="text-center py-6">
                    No products found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        
        <div className="p-3 border-t border-gray-200 text-sm text-gray-600 flex justify-between items-center">
          <div>
            Displaying items {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length}
          </div>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} />
              </PaginationItem>
              
              {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink isActive={currentPage === pageNumber} onClick={() => goToPage(pageNumber)}>
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <>
                  <PaginationItem>
                    <PaginationLink disabled>...</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink onClick={() => goToPage(totalPages)}>{totalPages}</PaginationLink>
                  </PaginationItem>
                </>
              )}
              
              <PaginationItem>
                <PaginationNext onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      
      <ProductDetailDialog 
        isOpen={isProductDetailOpen} 
        onClose={() => setIsProductDetailOpen(false)} 
        productId={selectedProductId} 
      />
    </>
  );
};

export default ProductList;
