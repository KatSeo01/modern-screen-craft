
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, BarChart, LineChart } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Search, Filter, Star, Calendar, Clock, Plus, Activity } from "lucide-react";
import QuickActionBar from './QuickActionBar';
import SearchBar from './SearchBar';
import RecentItems from './RecentItems';
import FavoriteProducts from './FavoriteProducts';

const DashboardView: React.FC = () => {
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <RecentItems />
        <FavoriteProducts />
      </div>
    </div>
  );
};

export default DashboardView;
