
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface ActivityCardProps {
  title: string;
  icon?: React.ReactNode;
  value: string | number;
  unit?: string;
  target?: string | number;
  className?: string;
  iconColor?: string;
  children?: React.ReactNode;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  icon,
  value,
  unit,
  target,
  className,
  iconColor = "bg-fitness-green",
  children
}) => {
  return (
    <Card className={cn("bg-zinc-900 border-zinc-800", className)}>
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          {icon && (
            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center mr-2", iconColor)}>
              {icon}
            </div>
          )}
          <h3 className="text-zinc-400 text-sm font-medium">{title}</h3>
        </div>
        <div className="flex items-baseline">
          <span className="text-white text-2xl font-bold">{value}</span>
          {unit && <span className="text-zinc-400 ml-1">{unit}</span>}
          {target && <span className="text-zinc-500 text-sm ml-1">/{target}</span>}
        </div>
        {children}
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
