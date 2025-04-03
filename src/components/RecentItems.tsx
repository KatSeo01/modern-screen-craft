
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

// Mock data for recent items
const recentItems = [
  { id: 1, name: "Heart Rate Monitor", timestamp: "2 hours ago", category: "Cardiac" },
  { id: 2, name: "Insulin Pump", timestamp: "5 hours ago", category: "Diabetes" },
  { id: 3, name: "Pulse Oximeter", timestamp: "Yesterday", category: "Respiratory" },
  { id: 4, name: "Blood Pressure Monitor", timestamp: "Yesterday", category: "Cardiac" },
  { id: 5, name: "Thermometer", timestamp: "2 days ago", category: "General" },
];

const RecentItems: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-healthcare-700 flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Items
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {recentItems.map((item) => (
            <div 
              key={item.id} 
              className="p-2 rounded-md hover:bg-gray-50 transition-colors border-l-4 border-healthcare-300 pl-3 flex justify-between items-center"
            >
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <span className="text-xs text-gray-500">{item.category}</span>
              </div>
              <span className="text-xs text-gray-400">{item.timestamp}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentItems;
