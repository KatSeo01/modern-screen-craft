
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, BarChart, LineChart } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Search, Filter, Star, Calendar, Clock, Plus, Activity, Database, Users, Bell, AlertCircle, CheckCircle2 } from "lucide-react";
import QuickActionBar from './QuickActionBar';
import SearchBar from './SearchBar';
import RecentItems from './RecentItems';
import FavoriteProducts from './FavoriteProducts';
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const DashboardView: React.FC = () => {
  const isMobile = useIsMobile();

  // Sample data for charts
  const lineChartData = [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 120 },
    { name: "Mar", value: 170 },
    { name: "Apr", value: 180 },
    { name: "May", value: 160 },
    { name: "Jun", value: 190 },
  ];

  const areaChartData = [
    { name: "Mon", value: 240 },
    { name: "Tue", value: 280 },
    { name: "Wed", value: 300 },
    { name: "Thu", value: 320 },
    { name: "Fri", value: 280 },
    { name: "Sat", value: 230 },
    { name: "Sun", value: 210 },
  ];

  const barChartData = [
    { name: "Category A", value: 40 },
    { name: "Category B", value: 30 },
    { name: "Category C", value: 20 },
    { name: "Category D", value: 27 },
    { name: "Category E", value: 18 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-4">
        <h1 className="text-3xl font-bold text-healthcare-700">Dashboard</h1>
        <SearchBar />
      </div>
      
      <QuickActionBar />
      
      {/* Summary Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <Card className="hover-scale bg-gradient-to-br from-healthcare-50 to-healthcare-100 dark:from-healthcare-900 dark:to-healthcare-800">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-healthcare-600 dark:text-healthcare-300">Total Products</p>
                <h3 className="text-2xl font-bold mt-1">1,256</h3>
                <p className="text-xs text-healthcare-500 mt-1">+12% from last month</p>
              </div>
              <div className="bg-healthcare-100 p-2 rounded-full dark:bg-healthcare-700">
                <Database className="h-6 w-6 text-healthcare-700 dark:text-healthcare-300" />
              </div>
            </div>
            <Progress className="h-1 mt-4" value={75} />
          </CardContent>
        </Card>
        
        <Card className="hover-scale bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-300">Active Users</p>
                <h3 className="text-2xl font-bold mt-1">248</h3>
                <p className="text-xs text-blue-500 mt-1">+5% from last week</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-full dark:bg-blue-700">
                <Users className="h-6 w-6 text-blue-700 dark:text-blue-300" />
              </div>
            </div>
            <Progress className="h-1 mt-4" value={65} />
          </CardContent>
        </Card>
        
        <Card className="hover-scale bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-amber-600 dark:text-amber-300">Pending Updates</p>
                <h3 className="text-2xl font-bold mt-1">42</h3>
                <p className="text-xs text-amber-500 mt-1">-8% from yesterday</p>
              </div>
              <div className="bg-amber-100 p-2 rounded-full dark:bg-amber-700">
                <AlertCircle className="h-6 w-6 text-amber-700 dark:text-amber-300" />
              </div>
            </div>
            <Progress className="h-1 mt-4" value={42} />
          </CardContent>
        </Card>
        
        <Card className="hover-scale bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-300">Completed Tasks</p>
                <h3 className="text-2xl font-bold mt-1">189</h3>
                <p className="text-xs text-green-500 mt-1">+22% from last week</p>
              </div>
              <div className="bg-green-100 p-2 rounded-full dark:bg-green-700">
                <CheckCircle2 className="h-6 w-6 text-green-700 dark:text-green-300" />
              </div>
            </div>
            <Progress className="h-1 mt-4" value={85} />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Card className="hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="text-healthcare-700 flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Product Activity
            </CardTitle>
            <CardDescription>Monthly product updates</CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart data={lineChartData} />
          </CardContent>
          <CardFooter>
            <Button variant="link" className="text-healthcare-700">View details</Button>
          </CardFooter>
        </Card>
        
        <Card className="hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="text-healthcare-700 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Usage Trends
            </CardTitle>
            <CardDescription>Weekly product usage</CardDescription>
          </CardHeader>
          <CardContent>
            <AreaChart data={areaChartData} />
          </CardContent>
          <CardFooter>
            <Button variant="link" className="text-healthcare-700">View details</Button>
          </CardFooter>
        </Card>
        
        <Card className="hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="text-healthcare-700 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Category Distribution
            </CardTitle>
            <CardDescription>Products by category</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart data={barChartData} />
          </CardContent>
          <CardFooter>
            <Button variant="link" className="text-healthcare-700">View details</Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Activity Timeline */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-healthcare-700 flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Recent Activity
          </CardTitle>
          <CardDescription>Latest system activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { user: "Katlego", action: "added new product", time: "10 minutes ago", avatar: "K" },
              { user: "Michael", action: "updated inventory", time: "2 hours ago", avatar: "M" },
              { user: "Sarah", action: "approved order", time: "yesterday", avatar: "S" },
              { user: "David", action: "exported report", time: "2 days ago", avatar: "D" },
              { user: "Jessica", action: "created new category", time: "3 days ago", avatar: "J" }
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
                <Avatar>
                  <AvatarFallback className="bg-healthcare-100 text-healthcare-700">{activity.avatar}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    <span className="font-bold">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="ml-auto">View All Activity</Button>
        </CardFooter>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <RecentItems />
        <FavoriteProducts />
      </div>
    </div>
  );
};

export default DashboardView;
