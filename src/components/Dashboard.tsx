
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatCard from './StatCard';
import AnomalyCard from './AnomalyCard';
import ChartSection from './ChartSection';
import ExpiringExams from './ExpiringExams';
import { statsData } from '@/data/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Painel de Anomalias</h2>
        <p className="text-gray-600">
          Detecção inteligente de padrões atípicos em saúde ocupacional
        </p>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="bg-gray-100">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {statsData.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnomalyCard 
              title="Anomalia CID M54"
              description="Aumento anormal de 113% nos afastamentos por Dorsalgia (M54) no setor de Produção."
              severity="alta"
              date="10/04/2024"
              type="icd"
              value="47"
              change={113}
            />
            
            <AnomalyCard 
              title="Demissões com Laudos"
              description="Pico de demissões associadas a laudos médicos detectado no setor Administrativo."
              severity="média"
              date="03/04/2024"
              type="dismissal"
              value="9"
              change={80}
            />
            
            <AnomalyCard 
              title="Exames Periódicos"
              description="Colaboradores com múltiplos exames vencendo fora do padrão trimestral."
              severity="baixa"
              date="08/04/2024"
              type="exams"
              value="6"
              change={50}
            />
          </div>

          <ChartSection />
          
          <ExpiringExams />
        </TabsContent>
        
        <TabsContent value="reports">
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
            <h3 className="text-lg font-medium">Relatórios e Análises</h3>
            <p className="mt-2 text-gray-600">
              Funcionalidade em desenvolvimento. Em breve, relatórios detalhados estarão disponíveis.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
            <h3 className="text-lg font-medium">Configurações do Sistema</h3>
            <p className="mt-2 text-gray-600">
              Funcionalidade em desenvolvimento. Em breve, opções de configuração estarão disponíveis.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
