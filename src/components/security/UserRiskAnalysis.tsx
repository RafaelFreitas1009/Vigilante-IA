
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface UserRisk {
  id: string;
  name: string;
  department: string;
  riskScore: number;
  lastIncident: string | null;
}

interface UserRiskAnalysisProps {
  userData: UserRisk[];
}

const getRiskColor = (score: number) => {
  if (score <= 30) return 'bg-green-500';
  if (score <= 60) return 'bg-yellow-500';
  return 'bg-red-500';
};

const UserRiskAnalysis: React.FC<UserRiskAnalysisProps> = ({ userData }) => {
  // Sort users by risk score (highest first)
  const sortedUsers = [...userData].sort((a, b) => b.riskScore - a.riskScore);
  
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-gray-800">High-Risk Users</h2>
      <div className="space-y-4">
        {sortedUsers.slice(0, 5).map((user) => (
          <div key={user.id} className="rounded-lg border bg-white p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.department}</p>
              </div>
              <div className={`rounded-full px-2 py-1 text-xs font-medium text-white ${getRiskColor(user.riskScore)}`}>
                {user.riskScore}%
              </div>
            </div>
            <Progress value={user.riskScore} className="mt-2 h-1.5" />
            {user.lastIncident && (
              <p className="mt-2 text-xs text-gray-500">
                Last incident: {new Date(user.lastIncident).toLocaleDateString()}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRiskAnalysis;
