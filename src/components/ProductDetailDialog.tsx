
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface ProductDetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  productId: string | null;
}

const ProductDetailDialog: React.FC<ProductDetailDialogProps> = ({ 
  isOpen, 
  onClose, 
  productId 
}) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("primary");
  
  // Mock product data - in a real app, you would fetch this based on productId
  const product = productId ? {
    id: productId,
    nappiCode: '487220',
    materialDescription: '209.910 Cann 32/Thrd Screw 110',
    productCode: '209-910',
    materialType: 'PHARMA - Surgicals',
    materialGroup: 'PROSTHESIS PRODUCTS',
    supplier: '[5445045] Stryker Howmedica Osteoni',
    deliveryMechanism: 'Prosthesis',
    catalogueNumber: '209.91',
    status: 'Active',
    effectiveDate: '2013/04/04 16:32:13',
    unitOfMeasure: 'Each',
    registrationNumber: '',
    description: '209.910 Cann 32/Thrd Screw 110',
    // MediKredit details
    mediKreditDescription: 'Screw cannulated self drilling ss 7.3mm',
    mediKreditEffectiveDate: '2002/02/01 00:00:00',
    discontinueDate: '',
    numberOfUses: '1',
    manCode: 'ORT',
    manufacturer: 'Johnson & Johnson Medical (Pty) Ltd',
    dosage: 'IMP',
    strength: '',
    mediKreditCatalogueNumber: '209910',
    // Price details
    productPriceId: '1',
    nappiEx: '003',
    wholesalePrice: 'R 2771.8',
    retailPrice: 'R 4157.7',
    priceEffectiveDate: '2024/09/01',
    priceUpdateDate: '2025/01/06',
    priceTerminationDate: ''
  } : null;
  
  if (!product) return null;
  
  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: "Product information has been updated successfully",
    });
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <span className="bg-healthcare-700 text-white p-1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM20 5v4H4V5h16z"/>
              </svg>
            </span>
            Product Details - {product.productCode}
          </DialogTitle>
          <DialogDescription>
            View and edit product information. Required fields are read-only.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="primary" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="primary">Primary Information</TabsTrigger>
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="pricing">MediKredit & Pricing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="primary" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nappiCode">NAPPI Code <Badge variant="outline" className="ml-2 text-xs">Required</Badge></Label>
                <Input id="nappiCode" value={product.nappiCode} readOnly className="bg-gray-100" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="supplier">Supplier <Badge variant="outline" className="ml-2 text-xs">Required</Badge></Label>
                <Input id="supplier" value={product.supplier} readOnly className="bg-gray-100" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="materialDescription">Material Description <Badge variant="outline" className="ml-2 text-xs">Required</Badge></Label>
                <Input id="materialDescription" value={product.materialDescription} readOnly className="bg-gray-100" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="productCode">Product Code <Badge variant="outline" className="ml-2 text-xs">Required</Badge></Label>
                <Input id="productCode" value={product.productCode} readOnly className="bg-gray-100" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="materialType">Material Type</Label>
                <Input id="materialType" value={product.materialType} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="materialGroup">Material Group</Label>
                <Input id="materialGroup" value={product.materialGroup} />
              </div>
            </div>
            
            <div className="space-y-2 mt-4">
              <Label htmlFor="description">Description <Badge variant="outline" className="ml-2 text-xs">Required</Badge></Label>
              <Textarea id="description" value={product.description} className="min-h-[100px]" readOnly />
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryMechanism">Delivery Mechanism Type</Label>
                <Input id="deliveryMechanism" value={product.deliveryMechanism} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="catalogueNumber">Catalogue Number</Label>
                <Input id="catalogueNumber" value={product.catalogueNumber} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="unitOfMeasure">Unit of Measure</Label>
                <Input id="unitOfMeasure" value={product.unitOfMeasure} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="effectiveDate">Effective Date</Label>
                <Input id="effectiveDate" value={product.effectiveDate} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Input id="status" value={product.status} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="registrationNumber">Registration Number</Label>
                <Input id="registrationNumber" value={product.registrationNumber} />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="pricing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>MediKredit Detail</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mediKreditDescription">Description</Label>
                    <Input id="mediKreditDescription" value={product.mediKreditDescription} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="manCode">Man Code</Label>
                    <Input id="manCode" value={product.manCode} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mediKreditEffectiveDate">Effective Date</Label>
                    <Input id="mediKreditEffectiveDate" value={product.mediKreditEffectiveDate} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="manufacturer">Manufacturer</Label>
                    <Input id="manufacturer" value={product.manufacturer} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="discontinueDate">Discontinue Date</Label>
                    <Input id="discontinueDate" value={product.discontinueDate} placeholder="Not set" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dosage">Dosage</Label>
                    <Input id="dosage" value={product.dosage} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="numberOfUses">Number of Uses</Label>
                    <Input id="numberOfUses" value={product.numberOfUses} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="strength">Strength</Label>
                    <Input id="strength" value={product.strength} placeholder="Not specified" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Product Price Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-healthcare-700 text-white">
                      <tr>
                        <th className="p-2 text-left">ID</th>
                        <th className="p-2 text-left">Nappi Ex</th>
                        <th className="p-2 text-left">Wholesale Price</th>
                        <th className="p-2 text-left">Retail Price</th>
                        <th className="p-2 text-left">Effective Date</th>
                        <th className="p-2 text-left">Update Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2">{product.productPriceId}</td>
                        <td className="p-2">{product.nappiEx}</td>
                        <td className="p-2">{product.wholesalePrice}</td>
                        <td className="p-2">{product.retailPrice}</td>
                        <td className="p-2">{product.priceEffectiveDate}</td>
                        <td className="p-2">{product.priceUpdateDate}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <DialogFooter className="flex justify-between gap-2 sm:justify-end">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} className="bg-healthcare-700 hover:bg-healthcare-800">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailDialog;
