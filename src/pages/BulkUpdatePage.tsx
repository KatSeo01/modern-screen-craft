
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BulkUpdatePage: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-healthcare-800">Bulk Update</h1>
        
        <Card>
          <CardHeader className="bg-healthcare-700 text-white rounded-t-lg">
            <CardTitle>Product Bulk Update</CardTitle>
            <CardDescription className="text-healthcare-100">Update multiple products at once</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="update-type">Update Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select update type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">Price Update</SelectItem>
                    <SelectItem value="status">Status Update</SelectItem>
                    <SelectItem value="category">Category Update</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="product-category">Product Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="screws">Screws</SelectItem>
                    <SelectItem value="implants">Implants</SelectItem>
                    <SelectItem value="syringes">Syringes</SelectItem>
                    <SelectItem value="catheters">Catheters</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="csv-upload">Upload CSV File</Label>
              <Input id="csv-upload" type="file" />
              <p className="text-sm text-gray-500">Upload a CSV file with the products to update. Maximum file size: 5MB.</p>
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-healthcare-700 hover:bg-healthcare-800">Upload and Process</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default BulkUpdatePage;
