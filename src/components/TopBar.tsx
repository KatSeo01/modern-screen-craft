
import React from 'react';
import LifeHealthLogo from './LifeHealthLogo';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Globe } from 'lucide-react';

interface TopBarProps {
  username: string;
}

const TopBar: React.FC<TopBarProps> = ({ username }) => {
  const [country, setCountry] = React.useState("South Africa");

  return (
    <div className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 dark:bg-background dark:border-gray-800">
      <div className="flex items-center space-x-4">
        <LifeHealthLogo />
        <div className="border-l border-gray-200 dark:border-gray-700 h-8 mx-2"></div>
        <Select defaultValue={country} onValueChange={setCountry}>
          <SelectTrigger className="h-9 w-[180px] border-healthcare-700 focus:ring-healthcare-700">
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-2 text-healthcare-700" />
              <SelectValue placeholder="Select country" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="South Africa">South Africa</SelectItem>
            <SelectItem value="Botswana">Botswana</SelectItem>
            <SelectItem value="Namibia">Namibia</SelectItem>
            <SelectItem value="Zimbabwe">Zimbabwe</SelectItem>
            <SelectItem value="Mozambique">Mozambique</SelectItem>
            <SelectItem value="Nigeria">Nigeria</SelectItem>
            <SelectItem value="Kenya">Kenya</SelectItem>
            <SelectItem value="Ghana">Ghana</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="text-gray-700 dark:text-gray-300">
        Welcome <span className="font-semibold">{username}</span>
      </div>
    </div>
  );
};

export default TopBar;
