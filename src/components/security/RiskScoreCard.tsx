
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Shield, AlertTriangle, Lock, User } from 'lucide-react';

interface RiskScoreCardProps {
  overallScore: number;
  phishingRisk: number;
  dataLeakageRisk: number;
  insiderThreatRisk: number;
}

const getRiskColor = (score: number): string => {
  if (score <= 30) return "bg-green-500";
  if (score <= 60) return "bg-yellow-500"; 
  return "bg-red-500";
};

const getRiskText = (score: number): string => {
  if (score <= 30) return "Low";
  if (score <= 60) return "Medium";
  return "High";
};

const RiskScoreCard: React.FC<RiskScoreCardProps> = ({
  overallScore,
  phishingRisk,
  dataLeakageRisk,
  insiderThreatRisk,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <div className="rounded-lg border bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-medium text-gray-700">Organization Risk Score</h3>
          <Shield className="h-5 w-5 text-blue-600" />
        </div>
        <div className="mb-2 flex items-end justify-between">
          <div className="text-3xl font-bold">{overallScore}%</div>
          <div className={`rounded-full px-2 py-1 text-xs font-medium text-white ${getRiskColor(overallScore)}`}>
            {getRiskText(overallScore)}
          </div>
        </div>
        <Progress value={overallScore} className="h-2" />
      </div>

      <div className="rounded-lg border bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-medium text-gray-700">Phishing Risk</h3>
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
        </div>
        <div className="mb-2 flex items-end justify-between">
          <div className="text-3xl font-bold">{phishingRisk}%</div>
          <div className={`rounded-full px-2 py-1 text-xs font-medium text-white ${getRiskColor(phishingRisk)}`}>
            {getRiskText(phishingRisk)}
          </div>
        </div>
        <Progress value={phishingRisk} className="h-2" />
      </div>

      <div className="rounded-lg border bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-medium text-gray-700">Data Leakage Risk</h3>
          <Lock className="h-5 w-5 text-red-500" />
        </div>
        <div className="mb-2 flex items-end justify-between">
          <div className="text-3xl font-bold">{dataLeakageRisk}%</div>
          <div className={`rounded-full px-2 py-1 text-xs font-medium text-white ${getRiskColor(dataLeakageRisk)}`}>
            {getRiskText(dataLeakageRisk)}
          </div>
        </div>
        <Progress value={dataLeakageRisk} className="h-2" />
      </div>

      <div className="rounded-lg border bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-medium text-gray-700">Insider Threat Risk</h3>
          <User className="h-5 w-5 text-purple-500" />
        </div>
        <div className="mb-2 flex items-end justify-between">
          <div className="text-3xl font-bold">{insiderThreatRisk}%</div>
          <div className={`rounded-full px-2 py-1 text-xs font-medium text-white ${getRiskColor(insiderThreatRisk)}`}>
            {getRiskText(insiderThreatRisk)}
          </div>
        </div>
        <Progress value={insiderThreatRisk} className="h-2" />
      </div>
    </div>
  );
};

export default RiskScoreCard;
