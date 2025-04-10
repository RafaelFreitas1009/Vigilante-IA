
import React from 'react';
import { AlertCircle, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AnomalyCardProps {
  title: string;
  description: string;
  severity: 'alta' | 'média' | 'baixa';
  date: string;
  type: 'icd' | 'dismissal' | 'exams';
  value?: number | string;
  change?: number;
}

const AnomalyCard: React.FC<AnomalyCardProps> = ({
  title,
  description,
  severity,
  date,
  type,
  value,
  change
}) => {
  const getSeverityColor = () => {
    switch (severity) {
      case 'alta':
        return 'bg-medical-danger text-white';
      case 'média':
        return 'bg-medical-warning text-white';
      case 'baixa':
        return 'bg-medical-success text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'icd':
        return <AlertCircle className="h-5 w-5 text-medical-danger" />;
      case 'dismissal':
        return <Users className="h-5 w-5 text-medical-warning" />;
      case 'exams':
        return <TrendingUp className="h-5 w-5 text-medical-primary" />;
      default:
        return <AlertCircle className="h-5 w-5" />;
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className={`h-1 w-full ${getSeverityColor().split(' ')[0]}`} />
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center">
          {getIcon()}
          <CardTitle className="ml-2 text-lg font-medium">{title}</CardTitle>
        </div>
        <Badge className={`${getSeverityColor()}`}>
          Severidade {severity}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
        
        {value && (
          <div className="mt-4 flex items-end">
            <span className="text-2xl font-semibold text-gray-900">{value}</span>
            {change && (
              <span className="ml-2 text-sm text-medical-danger">+{change}%</span>
            )}
          </div>
        )}
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-500">Detectado em: {date}</span>
          <button className="text-xs font-medium text-medical-primary hover:underline">
            Ver detalhes
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnomalyCard;
