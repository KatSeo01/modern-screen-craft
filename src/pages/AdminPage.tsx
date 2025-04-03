
import React from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Users, Database, Settings, Shield } from "lucide-react";

const AdminPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-healthcare-800">Administration</h1>
        
        <Tabs defaultValue="users">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mb-6">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Users</span>
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span>Products</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
            <TabsTrigger value="permissions" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Permissions</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="users">
            <Card>
              <CardHeader className="bg-healthcare-700 text-white rounded-t-lg">
                <CardTitle>User Management</CardTitle>
                <CardDescription className="text-healthcare-100">Manage system users and their permissions</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Users</h3>
                    <Button className="bg-healthcare-700 hover:bg-healthcare-800">Add User</Button>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">Katlego Seoketsa</td>
                          <td className="px-6 py-4 whitespace-nowrap">katlego@lifehealthcare.com</td>
                          <td className="px-6 py-4 whitespace-nowrap">Administrator</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Deactivate</Button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">John Smith</td>
                          <td className="px-6 py-4 whitespace-nowrap">john@lifehealthcare.com</td>
                          <td className="px-6 py-4 whitespace-nowrap">Manager</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Deactivate</Button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="products">
            <Card>
              <CardHeader className="bg-healthcare-700 text-white rounded-t-lg">
                <CardTitle>Product Administration</CardTitle>
                <CardDescription className="text-healthcare-100">Manage product categories and attributes</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Product Categories</h3>
                      <div className="space-y-3">
                        <Button className="bg-healthcare-700 hover:bg-healthcare-800 w-full">Manage Categories</Button>
                        <Button variant="outline" className="w-full">Import Categories</Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Product Attributes</h3>
                      <div className="space-y-3">
                        <Button className="bg-healthcare-700 hover:bg-healthcare-800 w-full">Manage Attributes</Button>
                        <Button variant="outline" className="w-full">Import Attributes</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader className="bg-healthcare-700 text-white rounded-t-lg">
                <CardTitle>System Settings</CardTitle>
                <CardDescription className="text-healthcare-100">Configure global system settings</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="Life Healthcare" />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="default-currency">Default Currency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="ZAR - South African Rand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zar">ZAR - South African Rand</SelectItem>
                      <SelectItem value="usd">USD - US Dollar</SelectItem>
                      <SelectItem value="eur">EUR - Euro</SelectItem>
                      <SelectItem value="gbp">GBP - British Pound</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button className="bg-healthcare-700 hover:bg-healthcare-800">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="permissions">
            <Card>
              <CardHeader className="bg-healthcare-700 text-white rounded-t-lg">
                <CardTitle>Role Permissions</CardTitle>
                <CardDescription className="text-healthcare-100">Configure access levels and permissions</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Roles</h3>
                    <Button className="bg-healthcare-700 hover:bg-healthcare-800">Add Role</Button>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap font-medium">Administrator</td>
                          <td className="px-6 py-4">Full system access</td>
                          <td className="px-6 py-4 whitespace-nowrap">2</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="outline" size="sm">Permissions</Button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap font-medium">Manager</td>
                          <td className="px-6 py-4">Product management access</td>
                          <td className="px-6 py-4 whitespace-nowrap">5</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="outline" size="sm">Permissions</Button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminPage;
