
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Users, Database, Settings, Shield, Search, Folder, FileText, ChevronsRight, Menu } from "lucide-react";
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Import DND libraries
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, useDraggable, useDroppable } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

// Mock classification data
const classifications = [
  {
    id: "ethical-items",
    name: "Ethical Items",
    children: [
      { id: "ethicals", name: "Ethicals" },
      { id: "inhalation-anaesthetics", name: "Inhalation Anaesthetics" },
      { id: "large-volume-parenterals", name: "Large Volume Parenterals" }
    ]
  },
  {
    id: "retail",
    name: "Retail",
    children: [
      { id: "retail-ethical", name: "Retail Ethical" },
      { id: "retail-surgical", name: "Retail Surgical" }
    ]
  },
  {
    id: "surgical-consumable",
    name: "Surgical Consumable Products",
    children: [
      { id: "cardio-vascular", name: "Cardio Vascular" },
      { id: "endoscopic-surgery", name: "Endoscopic Surgery & Internal Stapling Devices" },
      { id: "general-surgical", name: "General Surgical Consumables" },
      { id: "implantable-orthopaedic", name: "Implantable Orthopaedic Products Excluding Prosthesis" },
      { id: "neurosurgical", name: "Neurosurgical Products" },
      { id: "prosthesis", name: "Prosthesis Products" },
      { id: "wound-closure", name: "Wound Closure Products" }
    ]
  }
];

// DraggableItem component
interface DraggableItemProps {
  id: string;
  name: string;
  depth?: number;
}

const DraggableItem = ({ id, name, depth = 0 }: DraggableItemProps) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
    data: { name, depth }
  });
  
  const paddingLeft = depth * 20 + 'px';
  
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`p-2 mb-1 rounded cursor-move ${
        isDragging ? 'opacity-50 bg-gray-100' : 'hover:bg-gray-50'
      }`}
      style={{ paddingLeft }}
    >
      <div className="flex items-center">
        <FileText className="mr-2 h-4 w-4 text-gray-500" />
        <span>{name}</span>
        <Menu className="ml-auto h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
};

// Droppable area component
interface DroppableAreaProps {
  id: string;
  children: React.ReactNode;
}

const DroppableArea = ({ id, children }: DroppableAreaProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id
  });
  
  return (
    <div
      ref={setNodeRef}
      className={`border rounded-md p-3 h-full overflow-auto ${
        isOver ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200'
      }`}
    >
      {children}
    </div>
  );
};

// Classification Group component
interface ClassificationGroupProps {
  data: {
    id: string;
    name: string;
    children: { id: string; name: string }[];
  };
  area: 'source' | 'destination';
}

const ClassificationGroup = ({ data, area }: ClassificationGroupProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div className="mb-3">
      <div 
        className="flex items-center mb-1 cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Folder className="mr-2 h-4 w-4 text-blue-600" />
        <span className="font-medium">{data.name}</span>
        <div className={`ml-2 transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
          <ChevronsRight className="h-4 w-4" />
        </div>
      </div>
      
      {isExpanded && (
        <div className="ml-2">
          {data.children.map(item => (
            <DraggableItem 
              key={`${area}-${item.id}`} 
              id={`${area}-${item.id}`} 
              name={item.name} 
              depth={1} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Confirmation Dialog Component
interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  source: string;
  destination: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  source, 
  destination 
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Classification Move</DialogTitle>
          <DialogDescription>
            Are you sure you want to move the following classification?
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="font-medium w-24">Source:</div>
              <div className="bg-gray-100 p-2 rounded flex-1">{source}</div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="font-medium w-24">Destination:</div>
              <div className="bg-gray-100 p-2 rounded flex-1">{destination}</div>
            </div>
          </div>
        </div>
        
        <Alert className="bg-yellow-50 border-yellow-200 text-yellow-800">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            This action will move the classification and all its associated products.
          </AlertDescription>
        </Alert>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm}>Confirm Move</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const AdminPage: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("classifications");
  const [draggedItem, setDraggedItem] = useState<{ id: string; name: string } | null>(null);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [moveDetails, setMoveDetails] = useState({ source: "", destination: "" });
  
  // Handle drag start
  const handleDragStart = (event: DragStartEvent) => {
    const { id } = event.active;
    const itemName = event.active.data.current?.name || '';
    setDraggedItem({ id: id as string, name: itemName });
  };
  
  // Handle drag end
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    setDraggedItem(null);
    
    if (over && active.id !== over.id) {
      // Extract the actual item names without the area prefix
      const sourceId = (active.id as string).split('-')[1];
      const destinationId = (over.id as string).split('-')[0];
      
      // Find the actual names
      let sourceName = '';
      let destinationName = '';
      
      classifications.forEach(group => {
        group.children.forEach(item => {
          if (item.id === sourceId) {
            sourceName = item.name;
          }
        });
      });
      
      if (destinationId === 'source') {
        destinationName = 'Source Area';
      } else if (destinationId === 'destination') {
        destinationName = 'Destination Area';
      }
      
      // Set the move details and open confirmation dialog
      setMoveDetails({
        source: sourceName,
        destination: destinationName
      });
      
      setConfirmationOpen(true);
    }
  };
  
  // Handle confirmation
  const handleConfirmMove = () => {
    setConfirmationOpen(false);
    
    toast({
      title: "Classification moved",
      description: `Successfully moved "${moveDetails.source}" to "${moveDetails.destination}"`,
    });
  };
  
  return (
    <Layout>
      <div className="p-6 fade-in">
        <h1 className="text-2xl font-bold mb-6 text-healthcare-800">Administration</h1>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mb-6">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Users</span>
            </TabsTrigger>
            <TabsTrigger value="classifications" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span>Classifications</span>
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
          
          <TabsContent value="classifications">
            <Card>
              <CardHeader className="bg-healthcare-700 text-white rounded-t-lg flex flex-row items-center gap-3">
                <div className="bg-white p-1.5 rounded">
                  <div className="text-healthcare-700 w-5 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z" />
                      <path d="M2 10h20" />
                    </svg>
                  </div>
                </div>
                <div>
                  <CardTitle>Configure Classification Hierarchy</CardTitle>
                  <CardDescription className="text-healthcare-100">Manage and organize product classifications</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div>
                  <div className="flex items-center mb-4">
                    <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 border-gray-300">
                      Move Classification
                    </Button>
                    <span className="text-sm text-gray-500 ml-4">
                      Drag items from the source to the destination to move them
                    </span>
                  </div>
                  
                  <DndContext 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    modifiers={[restrictToVerticalAxis]}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-medium text-healthcare-700">Source</h3>
                          <div className="relative w-full max-w-sm ml-4">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              placeholder="Enter Classification Description or Code..."
                              className="pl-9"
                            />
                          </div>
                        </div>
                        
                        <DroppableArea id="source">
                          {classifications.map(group => (
                            <ClassificationGroup 
                              key={`source-${group.id}`} 
                              data={group} 
                              area="source" 
                            />
                          ))}
                        </DroppableArea>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-medium text-healthcare-700">Destination</h3>
                          <div className="relative w-full max-w-sm ml-4">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              placeholder="Enter Classification Description or Code..."
                              className="pl-9"
                            />
                          </div>
                        </div>
                        
                        <DroppableArea id="destination">
                          {classifications.map(group => (
                            <ClassificationGroup 
                              key={`destination-${group.id}`} 
                              data={group} 
                              area="destination" 
                            />
                          ))}
                        </DroppableArea>
                      </div>
                    </div>
                    
                    <DragOverlay>
                      {draggedItem ? (
                        <div className="p-2 bg-white border rounded shadow-md">
                          <div className="flex items-center">
                            <FileText className="mr-2 h-4 w-4 text-gray-500" />
                            <span>{draggedItem.name}</span>
                          </div>
                        </div>
                      ) : null}
                    </DragOverlay>
                  </DndContext>
                  
                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline">Add</Button>
                    <Button variant="outline">Edit</Button>
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
      
      <ConfirmationDialog 
        isOpen={confirmationOpen}
        onClose={() => setConfirmationOpen(false)}
        onConfirm={handleConfirmMove}
        source={moveDetails.source}
        destination={moveDetails.destination}
      />
    </Layout>
  );
};

export default AdminPage;
