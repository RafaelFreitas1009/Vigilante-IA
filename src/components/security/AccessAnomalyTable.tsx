
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

interface AccessAnomaly {
  id: string;
  user: string;
  department: string;
  timestamp: string;
  ipAddress: string;
  location: string;
  device: string;
  activity: string;
  riskScore: number;
}

interface AccessAnomalyTableProps {
  anomalies: AccessAnomaly[];
}

const getRiskBadgeClass = (score: number) => {
  if (score < 40) return 'bg-green-100 text-green-800';
  if (score < 70) return 'bg-yellow-100 text-yellow-800';
  return 'bg-red-100 text-red-800';
};

const AccessAnomalyTable: React.FC<AccessAnomalyTableProps> = ({ anomalies }) => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Access Anomalies</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>Risk Score</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {anomalies.map((anomaly) => (
              <TableRow key={anomaly.id}>
                <TableCell className="font-medium">{anomaly.user}</TableCell>
                <TableCell>{anomaly.department}</TableCell>
                <TableCell>{new Date(anomaly.timestamp).toLocaleString()}</TableCell>
                <TableCell>
                  <span className="flex items-center">
                    {anomaly.location}
                    <span className="ml-1 text-xs text-gray-500">({anomaly.ipAddress})</span>
                  </span>
                </TableCell>
                <TableCell>{anomaly.activity}</TableCell>
                <TableCell>
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${getRiskBadgeClass(anomaly.riskScore)}`}>
                    {anomaly.riskScore}%
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AccessAnomalyTable;
