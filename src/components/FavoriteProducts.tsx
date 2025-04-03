
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

// Mock data for favorite products
const favoriteProducts = [
  { id: 1, name: "Cardiac Monitor Pro", rating: 4.8, category: "Cardiac" },
  { id: 2, name: "Glucose Monitoring System", rating: 4.7, category: "Diabetes" },
  { id: 3, name: "Respiratory Analyzer", rating: 4.5, category: "Respiratory" },
  { id: 4, name: "Patient Monitoring System", rating: 4.9, category: "Monitoring" },
  { id: 5, name: "Digital Stethoscope", rating: 4.6, category: "Diagnostic" },
];

const FavoriteProducts: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-healthcare-700 flex items-center gap-2">
          <Star className="h-5 w-5" />
          Favorite Products
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {favoriteProducts.map((product) => (
            <div 
              key={product.id} 
              className="p-2 rounded-md hover:bg-gray-50 transition-colors flex justify-between items-center"
            >
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <span className="text-xs text-gray-500">{product.category}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-xs font-medium">{product.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FavoriteProducts;
