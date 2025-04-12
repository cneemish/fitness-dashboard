
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

interface TrendData {
  date: string;
  value: number;
}

interface TrendChartProps {
  data: TrendData[];
  title: string;
  dataKey?: string;
  color?: string;
  unit?: string;
  height?: number;
}

const TrendChart: React.FC<TrendChartProps> = ({
  data,
  title,
  dataKey = "value",
  color = "#4ADE80",
  unit = "",
  height = 180
}) => {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
      <h3 className="text-white text-lg font-semibold mb-4">{title}</h3>
      <div style={{ width: '100%', height }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 10, fill: '#a1a1aa' }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            />
            <YAxis 
              tick={{ fontSize: 10, fill: '#a1a1aa' }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              unit={unit}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#27272a', 
                border: '1px solid #3f3f46',
                borderRadius: '8px',
                color: 'white'
              }}
              labelStyle={{ color: 'white' }}
              formatter={(value) => [`${value}${unit}`, ""]}
            />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              strokeWidth={2}
              dot={{ fill: color, r: 4 }}
              activeDot={{ r: 6, fill: color }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrendChart;
