
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProgressRing from './ProgressRing';

interface CompositionMetric {
  label: string;
  value: number;
  unit: string;
  progress: number;
  color: string;
}

interface BodyCompositionCardProps {
  metrics: CompositionMetric[];
}

const BodyCompositionCard: React.FC<BodyCompositionCardProps> = ({ metrics }) => {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Body Composition</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center">
              <ProgressRing 
                progress={metric.progress} 
                color={metric.color}
                size={100}
                strokeWidth={8}
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-white">{metric.value}</span>
                  <span className="text-xs text-zinc-400">{metric.unit}</span>
                </div>
              </ProgressRing>
              <span className="mt-2 text-sm text-zinc-300">{metric.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BodyCompositionCard;
