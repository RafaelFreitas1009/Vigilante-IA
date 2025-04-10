
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

interface PhishingDataPoint {
  date: string;
  detected: number;
  clicked: number;
}

interface PhishingAttemptChartProps {
  data: PhishingDataPoint[];
}

const PhishingAttemptChart: React.FC<PhishingAttemptChartProps> = ({ data }) => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Phishing Attempts Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="detected" 
            stroke="#4338ca" 
            activeDot={{ r: 8 }}
            name="Detected Attempts" 
          />
          <Line 
            type="monotone" 
            dataKey="clicked" 
            stroke="#ef4444" 
            name="Clicked Links" 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PhishingAttemptChart;
