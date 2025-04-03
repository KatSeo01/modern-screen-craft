
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Clock, Settings, Shield, Edit, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserProfileProps {
  username?: string;
  email?: string;
  role?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ 
  username = "Katlego Seoketsa",
  email = "katlego.seoketsa@lifehealthcare.co.za",
  role = "Product Manager"
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    app: true,
    updates: false,
    marketing: false
  });
  const { toast } = useToast();
  
  const saveChanges = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved successfully.",
    });
  };
  
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="bg-healthcare-700 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <User className="h-6 w-6" />
          User Profile
        </CardTitle>
        <CardDescription className="text-healthcare-100">
          Manage your account preferences and settings
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Activity
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-32 w-32">
                  <AvatarFallback className="text-4xl bg-healthcare-100 text-healthcare-700">
                    {username.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                )}
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input id="full-name" defaultValue={username} disabled={!isEditing} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue={email} disabled={!isEditing} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" defaultValue={role} disabled={!isEditing} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" defaultValue="Product Management" disabled={!isEditing} />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end gap-2">
                  {isEditing ? (
                    <>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                      <Button className="bg-healthcare-700" onClick={saveChanges}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </>
                  ) : (
                    <Button className="bg-healthcare-700" onClick={() => setIsEditing(true)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <h3 className="text-lg font-medium">Notification Preferences</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-gray-500">Receive email updates about your account activity</p>
                </div>
                <Switch 
                  checked={notifications.email} 
                  onCheckedChange={checked => 
                    setNotifications(prev => ({ ...prev, email: checked }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <h4 className="font-medium">App Notifications</h4>
                  <p className="text-sm text-gray-500">Receive notifications within the application</p>
                </div>
                <Switch 
                  checked={notifications.app} 
                  onCheckedChange={checked => 
                    setNotifications(prev => ({ ...prev, app: checked }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <h4 className="font-medium">Product Updates</h4>
                  <p className="text-sm text-gray-500">Get notified about new product features and updates</p>
                </div>
                <Switch 
                  checked={notifications.updates} 
                  onCheckedChange={checked => 
                    setNotifications(prev => ({ ...prev, updates: checked }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between pb-2">
                <div>
                  <h4 className="font-medium">Marketing Communications</h4>
                  <p className="text-sm text-gray-500">Receive marketing emails and promotions</p>
                </div>
                <Switch 
                  checked={notifications.marketing} 
                  onCheckedChange={checked => 
                    setNotifications(prev => ({ ...prev, marketing: checked }))
                  }
                />
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button className="bg-healthcare-700">
                Save Preferences
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="space-y-6">
            <h3 className="text-lg font-medium">Recent Activity</h3>
            
            <div className="space-y-4">
              {[
                { action: "Updated product catalog", time: "2 hours ago" },
                { action: "Added new product category", time: "Yesterday at 10:34 AM" },
                { action: "Exported product report", time: "Yesterday at 09:15 AM" },
                { action: "Changed notification settings", time: "2 days ago" },
                { action: "Updated profile information", time: "1 week ago" },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-4 border-b border-gray-100 pb-4 last:border-0">
                  <div className="bg-healthcare-100 rounded-full p-2 text-healthcare-700">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button variant="outline">
                View All Activity
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6">
            <h3 className="text-lg font-medium">Interface Settings</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <h4 className="font-medium">Dark Mode</h4>
                  <p className="text-sm text-gray-500">Use dark theme for the interface</p>
                </div>
                <Switch id="dark-mode" />
              </div>
              
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <h4 className="font-medium">Compact View</h4>
                  <p className="text-sm text-gray-500">Show more content with less spacing</p>
                </div>
                <Switch id="compact-view" />
              </div>
              
              <div className="flex items-center justify-between pb-2">
                <div>
                  <h4 className="font-medium">Enable Keyboard Shortcuts</h4>
                  <p className="text-sm text-gray-500">Use keyboard shortcuts for quick navigation</p>
                </div>
                <Switch id="shortcuts" defaultChecked />
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Security Settings</h3>
              
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="h-5 w-5 mr-2" />
                  Change Password
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="h-5 w-5 mr-2" />
                  Two-Factor Authentication
                </Button>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button className="bg-healthcare-700">
                Save Settings
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
