
import React from 'react';
import { Bell, Shield, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SecurityHeader: React.FC = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Shield className="mr-2 h-6 w-6 text-red-600" />
          <h1 className="text-2xl font-bold text-gray-800">
            Security<span className="text-red-600">Shield</span>
          </h1>
          <span className="ml-2 rounded-full bg-blue-600 px-2 py-0.5 text-xs font-medium text-white">
            AI
          </span>
        </div>
        
        <div className="flex items-center">
          <div className="relative mr-4">
            <Input 
              type="search" 
              placeholder="Search alerts..." 
              className="pl-9 h-9 w-64 rounded-full border-gray-200"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="mr-2 text-gray-500">
            <Bell className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center">
            <div className="h-9 w-9 rounded-full bg-red-600 flex items-center justify-center text-white">
              <User className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SecurityHeader;
