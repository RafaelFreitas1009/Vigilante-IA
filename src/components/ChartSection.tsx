
// Fix fill property issue in ChartSection.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  {
    name: 'Jan',
    licencaMedica: 12,
    faltasJustificadas: 8,
  },
  {
    name: 'Feb',
    licencaMedica: 15,
    faltasJustificadas: 10,
  },
  {
    name: 'Mar',
    licencaMedica: 8,
    faltasJustificadas: 5,
  },
  {
    name: 'Apr',
    licencaMedica: 10,
    faltasJustificadas: 7,
  },
  {
    name: 'May',
    licencaMedica: 9,
    faltasJustificadas: 6,
  },
  {
    name: 'Jun',
    licencaMedica: 11,
    faltasJustificadas: 9,
  },
];

const ChartSection: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Tendências de Afastamentos</CardTitle>
        <CardDescription>
          Monitoramento de tendências de afastamentos por mês
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="licencaMedica" name="Licença Médica" fill="#FF6B6B" />
            <Bar dataKey="faltasJustificadas" name="Faltas Justificadas" fill="#0093E9" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ChartSection;
