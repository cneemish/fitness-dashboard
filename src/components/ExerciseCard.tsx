
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ExerciseCardProps {
  name: string;
  sets: number;
  reps: number;
  image: string;
  duration?: string;
  onClick?: () => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  name,
  sets,
  reps,
  image,
  duration,
  onClick
}) => {
  return (
    <Card 
      className="bg-zinc-900 border-zinc-800 cursor-pointer hover:border-zinc-700 transition-all"
      onClick={onClick}
    >
      <CardContent className="p-3">
        <div className="aspect-video bg-zinc-800 rounded-md mb-2 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-white font-medium text-sm mb-1">{name}</h3>
        <div className="flex justify-between text-xs text-zinc-400">
          <span>{sets}×{reps}</span>
          {duration && <span>{duration}</span>}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
