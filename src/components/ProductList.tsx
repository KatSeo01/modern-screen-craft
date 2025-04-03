
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search, X, ExternalLink } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

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

const ProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredProducts = mockProducts.filter(product => 
    product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.classification.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
              <TableHead className="text-white">Product Code</TableHead>
              <TableHead className="text-white">Package Code</TableHead>
              <TableHead className="text-white">Package Catalogue</TableHead>
              <TableHead className="text-white">Package Schedule</TableHead>
              <TableHead className="text-white">NAPPI Code</TableHead>
              <TableHead className="text-white">Material Description</TableHead>
              <TableHead className="text-white">Description</TableHead>
              <TableHead className="text-white">Classification Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id} className="hover:bg-gray-50 border-b border-gray-200">
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.packageCode}</TableCell>
                <TableCell>{product.packageCatalogue}</TableCell>
                <TableCell>{product.packageSchedule}</TableCell>
                <TableCell>{product.nappiCode}</TableCell>
                <TableCell>{product.materialDescription}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.classification}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="p-3 border-t border-gray-200 text-sm text-gray-600 flex justify-between items-center">
        <div>
          <button className="p-1 rounded hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div>Displaying items 1 - {filteredProducts.length} of {mockProducts.length}</div>
      </div>
    </div>
  );
};

export default ProductList;
