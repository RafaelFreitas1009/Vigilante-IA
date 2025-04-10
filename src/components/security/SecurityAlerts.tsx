
import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Alert {
  id: string;
  type: 'phishing' | 'data-leakage' | 'unusual-access';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  timestamp: string;
  user?: string;
}

interface SecurityAlertsProps {
  alerts: Alert[];
}

const getSeverityColor = (severity: string): string => {
  switch (severity) {
    case 'low':
      return 'bg-blue-100 text-blue-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'high':
      return 'bg-orange-100 text-orange-800';
    case 'critical':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const SecurityAlerts: React.FC<SecurityAlertsProps> = ({ alerts }) => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Security Alerts</h2>
        <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
          {alerts.length} Active
        </span>
      </div>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div 
            key={alert.id}
            className="border-l-4 border-red-500 rounded-md bg-white p-4 shadow-sm"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
                <h3 className="font-medium text-gray-800">{alert.title}</h3>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
              </span>
            </div>
            <p className="text-sm text-gray-600">{alert.description}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs text-gray-500">
                {alert.user ? `User: ${alert.user} • ` : ''}
                {new Date(alert.timestamp).toLocaleString()}
              </span>
              <Button variant="outline" size="sm" className="text-xs">
                Investigate <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityAlerts;
