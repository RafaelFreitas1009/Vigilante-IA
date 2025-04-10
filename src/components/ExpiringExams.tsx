
import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { examsData } from '@/data/mockData';

const ExpiringExams: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'bg-medical-danger text-white';
      case 'warning':
        return 'bg-medical-warning text-white';
      case 'normal':
        return 'bg-medical-success text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatus = (status: string) => {
    switch (status) {
      case 'critical':
        return 'Crítico';
      case 'warning':
        return 'Atenção';
      case 'normal':
        return 'Normal';
      default:
        return '';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Exames Vencendo em Breve</CardTitle>
        <p className="text-sm text-muted-foreground">
          Colaboradores com exames periódicos a vencer
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {examsData.map((exam) => (
            <div 
              key={exam.id} 
              className="flex flex-col rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="mb-2 sm:mb-0">
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4 text-gray-500" />
                  <h4 className="font-medium">{exam.employee}</h4>
                </div>
                <div className="mt-1 flex items-center">
                  <span className="text-xs text-gray-500">{exam.role}</span>
                  <span className="mx-1 text-gray-300">•</span>
                  <span className="text-xs text-gray-500">{exam.examType}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4 text-gray-500" />
                  <span className="text-sm">{exam.expirationDate}</span>
                </div>

                <div className="mt-1 flex items-center sm:mt-0">
                  <Clock className="mr-1 h-4 w-4 text-gray-500" />
                  <span className="text-sm">
                    {exam.daysLeft} {exam.daysLeft === 1 ? 'dia' : 'dias'}
                  </span>
                </div>

                <Badge className={getStatusColor(exam.status)}>
                  {getStatus(exam.status)}
                </Badge>
              </div>
            </div>
          ))}
          
          <button className="mt-2 w-full rounded-md border border-gray-200 bg-white py-2 text-sm font-medium text-medical-primary hover:bg-gray-50">
            Ver todos os exames
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpiringExams;
