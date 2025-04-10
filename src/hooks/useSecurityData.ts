
import { useState, useEffect } from 'react';

// Define types for security data
interface OrganizationRisk {
  overallScore: number;
  phishingRisk: number;
  dataLeakageRisk: number;
  insiderThreatRisk: number;
}

interface Alert {
  id: string;
  type: 'phishing' | 'data-leakage' | 'unusual-access';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  timestamp: string;
  user?: string;
}

interface PhishingDataPoint {
  date: string;
  detected: number;
  clicked: number;
}

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

interface UserRisk {
  id: string;
  name: string;
  department: string;
  riskScore: number;
  lastIncident: string | null;
}

// Mock data for the security dashboard
const mockSecurityData = {
  organizationRisk: {
    overallScore: 45,
    phishingRisk: 52,
    dataLeakageRisk: 38,
    insiderThreatRisk: 26
  },
  alerts: [
    {
      id: 'alert-1',
      type: 'phishing' as const,
      severity: 'critical' as const,
      title: 'Targeted Phishing Campaign Detected',
      description: 'Multiple executives received sophisticated phishing emails mimicking internal IT communications.',
      timestamp: '2023-09-15T13:42:00Z',
    },
    {
      id: 'alert-2',
      type: 'unusual-access' as const,
      severity: 'high' as const,
      title: 'Unusual Login Activity',
      description: 'User João Silva logged in from an unrecognized location (Russia) outside of business hours.',
      timestamp: '2023-09-15T02:15:00Z',
      user: 'João Silva'
    },
    {
      id: 'alert-3',
      type: 'data-leakage' as const,
      severity: 'medium' as const,
      title: 'Suspicious File Sharing Activity',
      description: 'Large volume of sensitive documents accessed and downloaded by a user in Engineering department.',
      timestamp: '2023-09-14T16:33:00Z',
      user: 'Roberto Fernandes'
    }
  ],
  phishingData: [
    { date: '2023-08-15', detected: 24, clicked: 3 },
    { date: '2023-08-22', detected: 18, clicked: 2 },
    { date: '2023-08-29', detected: 32, clicked: 4 },
    { date: '2023-09-05', detected: 27, clicked: 1 },
    { date: '2023-09-12', detected: 42, clicked: 6 },
  ],
  accessAnomalies: [
    {
      id: 'anomaly-1',
      user: 'João Silva',
      department: 'Finance',
      timestamp: '2023-09-15T02:15:00Z',
      ipAddress: '185.25.203.171',
      location: 'Moscow, Russia',
      device: 'Unknown Windows Device',
      activity: 'Database Access - Financial Records',
      riskScore: 92
    },
    {
      id: 'anomaly-2',
      user: 'Fernanda Costa',
      department: 'HR',
      timestamp: '2023-09-14T22:47:00Z',
      ipAddress: '103.86.50.33',
      location: 'Beijing, China',
      device: 'MacOS Desktop',
      activity: 'Employee Data Access',
      riskScore: 85
    },
    {
      id: 'anomaly-3',
      user: 'Roberto Fernandes',
      department: 'Engineering',
      timestamp: '2023-09-14T16:33:00Z',
      ipAddress: '45.86.201.14',
      location: 'São Paulo, Brazil',
      device: 'Windows 11 Laptop',
      activity: 'Downloaded 150+ Documents',
      riskScore: 72
    },
    {
      id: 'anomaly-4',
      user: 'Ana Rodrigues',
      department: 'Sales',
      timestamp: '2023-09-13T12:05:00Z',
      ipAddress: '201.45.193.80',
      location: 'Rio de Janeiro, Brazil',
      device: 'Android Mobile',
      activity: 'CRM Access Outside Business Hours',
      riskScore: 45
    },
    {
      id: 'anomaly-5',
      user: 'Lucas Oliveira',
      department: 'Marketing',
      timestamp: '2023-09-12T19:22:00Z',
      ipAddress: '168.121.52.17',
      location: 'Florianópolis, Brazil',
      device: 'iPhone 14',
      activity: 'Multiple Failed Authentication Attempts',
      riskScore: 65
    }
  ],
  userRiskData: [
    {
      id: 'user-1',
      name: 'João Silva',
      department: 'Finance',
      riskScore: 92,
      lastIncident: '2023-09-15T02:15:00Z'
    },
    {
      id: 'user-2',
      name: 'Fernanda Costa',
      department: 'HR',
      riskScore: 85,
      lastIncident: '2023-09-14T22:47:00Z'
    },
    {
      id: 'user-3',
      name: 'Roberto Fernandes',
      department: 'Engineering',
      riskScore: 72,
      lastIncident: '2023-09-14T16:33:00Z'
    },
    {
      id: 'user-4',
      name: 'Lucas Oliveira',
      department: 'Marketing',
      riskScore: 65,
      lastIncident: '2023-09-12T19:22:00Z'
    },
    {
      id: 'user-5',
      name: 'Ana Rodrigues',
      department: 'Sales',
      riskScore: 45,
      lastIncident: '2023-09-13T12:05:00Z'
    },
    {
      id: 'user-6',
      name: 'Pedro Santos',
      department: 'IT',
      riskScore: 32,
      lastIncident: null
    },
    {
      id: 'user-7',
      name: 'Marta Lima',
      department: 'Customer Support',
      riskScore: 28,
      lastIncident: null
    }
  ]
};

export function useSecurityData() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [organizationRisk, setOrganizationRisk] = useState<OrganizationRisk | null>(null);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [phishingData, setPhishingData] = useState<PhishingDataPoint[]>([]);
  const [accessAnomalies, setAccessAnomalies] = useState<AccessAnomaly[]>([]);
  const [userRiskData, setUserRiskData] = useState<UserRisk[]>([]);

  useEffect(() => {
    // Simulate API call with a timeout
    const fetchData = () => {
      setTimeout(() => {
        setOrganizationRisk(mockSecurityData.organizationRisk);
        setAlerts(mockSecurityData.alerts);
        setPhishingData(mockSecurityData.phishingData);
        setAccessAnomalies(mockSecurityData.accessAnomalies);
        setUserRiskData(mockSecurityData.userRiskData);
        setIsLoading(false);
      }, 1500); // 1.5 seconds delay to simulate API call
    };

    fetchData();
  }, []);

  return {
    isLoading,
    organizationRisk,
    alerts,
    phishingData,
    accessAnomalies,
    userRiskData
  };
}
