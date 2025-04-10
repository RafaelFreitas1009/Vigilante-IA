
import React from 'react';
import SecurityHeader from '@/components/security/SecurityHeader';
import RiskScoreCard from '@/components/security/RiskScoreCard';
import SecurityAlerts from '@/components/security/SecurityAlerts';
import PhishingAttemptChart from '@/components/security/PhishingAttemptChart';
import AccessAnomalyTable from '@/components/security/AccessAnomalyTable';
import UserRiskAnalysis from '@/components/security/UserRiskAnalysis';
import { useSecurityData } from '@/hooks/useSecurityData';

const SecurityDashboard: React.FC = () => {
  const { 
    isLoading, 
    organizationRisk, 
    alerts, 
    phishingData, 
    accessAnomalies, 
    userRiskData 
  } = useSecurityData();

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SecurityHeader />
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Security Intelligence Dashboard</h1>
          <p className="text-gray-600">Predictive analysis of phishing attempts and data leakage risks</p>
        </div>

        {/* Organization Risk Score */}
        <div className="mb-6">
          <RiskScoreCard 
            overallScore={organizationRisk.overallScore}
            phishingRisk={organizationRisk.phishingRisk}
            dataLeakageRisk={organizationRisk.dataLeakageRisk}
            insiderThreatRisk={organizationRisk.insiderThreatRisk}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Security Alerts */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <SecurityAlerts alerts={alerts} />
          </div>

          {/* Phishing Attempts Over Time */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <PhishingAttemptChart data={phishingData} />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Access Anomalies */}
          <div className="lg:col-span-2 rounded-lg border bg-white p-6 shadow-sm">
            <AccessAnomalyTable anomalies={accessAnomalies} />
          </div>

          {/* User Risk Analysis */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <UserRiskAnalysis userData={userRiskData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;
