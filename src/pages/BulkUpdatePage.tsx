
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Search, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BulkUpdatePage: React.FC = () => {
  const [date, setDate] = React.useState<Date>();
  const { toast } = useToast();
  
  const handleSearch = () => {
    toast({
      title: "Search initiated",
      description: "Searching for products based on filters",
    });
  };
  
  return (
    <Layout>
      <div className="p-6 fade-in">
        <h1 className="text-2xl font-bold text-healthcare-800 mb-6">Bulk Update</h1>
        
        <Card className="shadow-md">
          <CardHeader className="bg-healthcare-700 text-white rounded-t-lg flex flex-row items-center gap-3">
            <div className="bg-white p-1.5 rounded">
              <div className="text-healthcare-700 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="m10 14 11-11" />
                </svg>
              </div>
            </div>
            <div>
              <CardTitle className="text-xl">Bulk Update Search</CardTitle>
              <CardDescription className="text-healthcare-100">
                Update multiple products at once
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Tabs defaultValue="product-details" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="product-details" className="flex-1">Product Details</TabsTrigger>
                    <TabsTrigger value="state" className="flex-1">State</TabsTrigger>
                    <TabsTrigger value="last-modified" className="flex-1">Last Modified</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="product-details" className="space-y-4 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="product-code">Product Code</Label>
                        <Input id="product-code" placeholder="Enter product code..." />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="package-code">Package Code</Label>
                        <Input id="package-code" placeholder="Enter package code..." />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="material-description">Material Description</Label>
                        <Input id="material-description" placeholder="Enter material description..." />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="supplier-code">Supplier Code</Label>
                        <Input id="supplier-code" placeholder="Enter supplier code..." />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="supplier-name">Supplier Name</Label>
                        <Input id="supplier-name" placeholder="Enter supplier name..." />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="nappi-code">NAPPI Code</Label>
                        <Input id="nappi-code" placeholder="Enter NAPPI code..." />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="catalogue-number">Catalogue Number</Label>
                        <Input id="catalogue-number" placeholder="Enter catalogue number..." />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="classification-name">Classification Name</Label>
                        <Input id="classification-name" placeholder="Enter classification name..." />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="classification-code">Classification Code</Label>
                        <Input id="classification-code" placeholder="Enter classification code..." />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="state" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label>Activity Status</Label>
                          <RadioGroup defaultValue="all" className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="active" id="active" />
                              <Label htmlFor="active">Active</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="inactive" id="inactive" />
                              <Label htmlFor="inactive">Inactive</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="all" id="both-activity" />
                              <Label htmlFor="both-activity">Both</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Classification Status</Label>
                          <RadioGroup defaultValue="all" className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="classified" id="classified" />
                              <Label htmlFor="classified">Classified</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="unclassified" id="unclassified" />
                              <Label htmlFor="unclassified">Unclassified</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="all" id="both-classification" />
                              <Label htmlFor="both-classification">Both</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label>Product Type</Label>
                          <RadioGroup defaultValue="all" className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="consumables" id="consumables" />
                              <Label htmlFor="consumables">Consumables</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="ethicals" id="ethicals" />
                              <Label htmlFor="ethicals">Ethicals</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="frontshop" id="frontshop" />
                              <Label htmlFor="frontshop">Frontshop</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="surgicals" id="surgicals" />
                              <Label htmlFor="surgicals">Surgicals</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="unpriced" id="unpriced" />
                              <Label htmlFor="unpriced">Unpriced</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="all" id="all-types" />
                              <Label htmlFor="all-types">All</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Formulary Status</Label>
                          <RadioGroup defaultValue="all" className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="non-formulary" id="non-formulary" />
                              <Label htmlFor="non-formulary">Non-Formulary</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="unformularized" id="unformularized" />
                              <Label htmlFor="unformularized">Unformularized</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="formulary" id="formulary" />
                              <Label htmlFor="formulary">Formulary</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="all" id="all-formulary" />
                              <Label htmlFor="all-formulary">All</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="last-modified" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="last-modified-by">Last Modified By</Label>
                        <Input id="last-modified-by" placeholder="Enter username..." />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Date Range</Label>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-1 space-y-2">
                            <Label htmlFor="date-from">From</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          
                          <div className="flex-1 space-y-2">
                            <Label htmlFor="date-to">To</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="flex justify-end gap-3 mt-6">
                  <Button variant="outline">Clear Filter</Button>
                  <Button variant="outline" onClick={handleSearch}>
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="outline">
                    Search & Remember
                  </Button>
                </div>
              </div>
              
              <div>
                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-healthcare-700">Process Objectives</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center p-3 bg-white rounded-md shadow-sm border border-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                      <span>Bulk Update Search</span>
                    </div>
                    
                    <div className="flex items-center p-3 bg-white rounded-md shadow-sm border border-gray-200">
                      <div className="rounded-full bg-gray-200 text-gray-500 w-5 h-5 flex items-center justify-center mr-3">2</div>
                      <span className="text-gray-500">Select Changes</span>
                    </div>
                    
                    <div className="flex items-center p-3 bg-white rounded-md shadow-sm border border-gray-200">
                      <div className="rounded-full bg-gray-200 text-gray-500 w-5 h-5 flex items-center justify-center mr-3">3</div>
                      <span className="text-gray-500">Confirm Result Set</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default BulkUpdatePage;
