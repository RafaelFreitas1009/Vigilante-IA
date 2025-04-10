
import React from 'react';
import { Bell, Search, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-medical-dark">
            <span className="text-medical-primary">Saúde</span>Ocupacional
          </h1>
          <span className="ml-2 rounded-full bg-medical-accent px-2 py-0.5 text-xs font-medium text-white">
            IA
          </span>
        </div>
        
        <div className="flex items-center">
          <div className="relative mr-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Buscar..." 
              className="pl-9 h-9 w-64 rounded-full border-gray-200"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="mr-2 text-gray-500">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="mr-2 text-gray-500">
            <Settings className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center">
            <div className="h-9 w-9 rounded-full bg-medical-primary flex items-center justify-center text-white">
              <User className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
