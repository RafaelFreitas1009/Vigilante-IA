
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { StatData } from '@/data/mockData';

interface StatCardProps {
  stat: StatData;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-sm text-gray-500">{stat.title}</p>
        <div className="mt-2 flex items-baseline">
          <h3 className="text-3xl font-semibold text-gray-900">{stat.value}</h3>
          <div 
            className={`ml-2 flex items-center text-sm ${
              stat.changeType === 'increase' 
              ? 'text-red-600' 
              : 'text-green-600'
            }`}
          >
            {stat.changeType === 'increase' ? (
              <ArrowUp className="mr-1 h-4 w-4" />
            ) : (
              <ArrowDown className="mr-1 h-4 w-4" />
            )}
            {stat.change}%
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
