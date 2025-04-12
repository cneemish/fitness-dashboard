
import React from 'react';
import { Check } from 'lucide-react';

interface DayData {
  day: string;
  shortDay: string;
  date: number;
  completed: boolean;
  isCurrent: boolean;
}

interface WeeklyProgressProps {
  data: DayData[];
  title?: string;
  subtitle?: string;
}

const WeeklyProgress: React.FC<WeeklyProgressProps> = ({
  data,
  title = "Perfect week",
  subtitle = "Completed. Well done, Athlete."
}) => {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
      <div className="mb-4">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-zinc-400 text-sm">{subtitle}</p>
      </div>
      <div className="flex justify-between">
        {data.map((day) => (
          <div 
            key={day.day}
            className={`flex flex-col items-center ${day.isCurrent ? 'bg-zinc-800 px-3 py-1 rounded-xl' : ''}`}
          >
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-1
                ${day.completed 
                  ? 'bg-fitness-blue text-white' 
                  : 'bg-zinc-800 text-zinc-500'}`
              }
            >
              {day.completed ? <Check size={16} /> : null}
            </div>
            <span className={`text-xs ${day.completed ? 'text-fitness-blue' : 'text-zinc-500'}`}>
              {day.shortDay}
            </span>
            <span className={`text-xs ${day.isCurrent ? 'text-white' : 'text-zinc-400'}`}>
              {day.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyProgress;
