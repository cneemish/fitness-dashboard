
import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Progress as ProgressBar } from '@/components/ui/progress';
import ProgressRing from '@/components/ProgressRing';
import TrendChart from '@/components/TrendChart';
import WeeklyProgress from '@/components/WeeklyProgress';
import MultiRing from '@/components/MultiRing';
import { 
  Dumbbell, 
  LineChart,
  Scale, 
  Target, 
  Trophy, 
  Calendar,
  ArrowRight,
  ArrowDown 
} from 'lucide-react';
import { trendsData, weeklyProgressData } from '@/data/mockData';

const Progress = () => {
  // Mock data for progress
  const weightReductionData = {
    current: 70.5,
    start: 75.0,
    goal: 68.0,
    progress: 64, // (75-70.5)/(75-68) * 100
    weekly: [
      { week: 'Week 1', reduction: 0.8 },
      { week: 'Week 2', reduction: 0.7 },
      { week: 'Week 3', reduction: 1.1 },
      { week: 'Week 4', reduction: 0.9 },
      { week: 'Week 5', reduction: 1.0 }
    ]
  };

  const exerciseGoals = [
    { name: 'Cardio', completed: 12, total: 15, color: '#4ADE80' },
    { name: 'Strength', completed: 8, total: 10, color: '#60A5FA' },
    { name: 'Flexibility', completed: 5, total: 8, color: '#FF4D8F' }
  ];

  const goalTimeline = {
    currentDay: 42,
    totalDays: 90,
    progress: 47, // (42/90) * 100
    milestones: [
      { day: 30, label: 'First Goal', completed: true },
      { day: 60, label: 'Second Goal', completed: false },
      { day: 90, label: 'Final Goal', completed: false }
    ]
  };

  return (
    <MainLayout>
      <div className="py-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Weight Reduction Card */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-white">
                <Scale className="h-5 w-5 text-fitness-blue" /> Weight Reduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <ProgressRing 
                  progress={weightReductionData.progress}
                  size={150}
                  strokeWidth={10}
                  color="#60A5FA"
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{weightReductionData.current} kg</p>
                    <p className="text-sm text-green-400 flex items-center justify-center">
                      <ArrowDown className="h-3 w-3 mr-1" />
                      {(weightReductionData.start - weightReductionData.current).toFixed(1)} kg
                    </p>
                  </div>
                </ProgressRing>
                
                <div className="mt-6 w-full flex justify-between text-sm">
                  <div>
                    <p className="text-gray-400">Start</p>
                    <p className="text-white font-semibold">{weightReductionData.start} kg</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Current</p>
                    <p className="text-white font-semibold">{weightReductionData.current} kg</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Goal</p>
                    <p className="text-white font-semibold">{weightReductionData.goal} kg</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-300 text-sm mb-2">Weekly reduction</p>
                <div className="grid grid-cols-5 gap-1">
                  {weightReductionData.weekly.map((week, index) => (
                    <div key={week.week} className="flex flex-col items-center">
                      <div 
                        className="bg-fitness-blue h-20 w-full rounded-t-md"
                        style={{ height: `${week.reduction * 40}px` }}
                      ></div>
                      <p className="text-xs text-gray-400 mt-1">{week.week}</p>
                      <p className="text-xs text-white font-medium">{week.reduction} kg</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exercise Timeline Card */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-white">
                <Dumbbell className="h-5 w-5 text-fitness-green" /> Exercise Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {exerciseGoals.map((goal) => (
                  <div key={goal.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{goal.name}</span>
                      <span className="text-white font-medium">
                        {goal.completed}/{goal.total} completed
                      </span>
                    </div>
                    <ProgressBar value={(goal.completed / goal.total) * 100} className="h-2.5" />
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <TrendChart 
                  data={trendsData.workouts}
                  title="Workout Duration Trend"
                  color="#4ADE80"
                  unit=" min"
                  height={160}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goal Timeline Card */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-white">
              <Target className="h-5 w-5 text-fitness-pink" /> Goal Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="flex items-center w-full mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-400">Current Day</p>
                  <p className="text-xl text-white font-bold">{goalTimeline.currentDay}</p>
                </div>
                <div className="flex-1 mx-4">
                  <ProgressBar value={goalTimeline.progress} className="h-3" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">Goal</p>
                  <p className="text-xl text-white font-bold">{goalTimeline.totalDays}</p>
                </div>
              </div>
              
              <div className="relative w-full h-20 mt-4">
                {/* Timeline bar */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-zinc-700 transform -translate-y-1/2"></div>
                
                {/* Current progress marker */}
                <div 
                  className="absolute top-1/2 w-4 h-4 rounded-full bg-fitness-pink transform -translate-y-1/2 -translate-x-1/2 z-10"
                  style={{ left: `${goalTimeline.progress}%` }}
                ></div>
                
                {/* Milestone dots */}
                {goalTimeline.milestones.map((milestone, index) => {
                  const position = (milestone.day / goalTimeline.totalDays) * 100;
                  return (
                    <div 
                      key={index}
                      className={`absolute top-1/2 w-3 h-3 rounded-full transform -translate-y-1/2 -translate-x-1/2 ${
                        milestone.completed ? 'bg-fitness-green' : 'bg-gray-500'
                      }`}
                      style={{ left: `${position}%` }}
                    >
                      <div className={`absolute -bottom-8 text-xs text-center w-20 -left-8 ${
                        milestone.completed ? 'text-fitness-green' : 'text-gray-400'
                      }`}>
                        {milestone.label}
                        <div className="text-gray-400">Day {milestone.day}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-12">
              <WeeklyProgress 
                data={weeklyProgressData}
                title="Weekly Workout Consistency"
                subtitle="Complete your workouts every day for a perfect week"
              />
            </div>
          </CardContent>
        </Card>
        
        {/* Combined Metrics Card */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-white">
              <Trophy className="h-5 w-5 text-fitness-green" /> Progress Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 flex justify-center">
                <MultiRing
                  rings={[
                    { progress: weightReductionData.progress, color: '#60A5FA', strokeWidth: 8 },
                    { progress: goalTimeline.progress, color: '#FF4D8F', strokeWidth: 8 },
                    { progress: 75, color: '#4ADE80', strokeWidth: 8 }
                  ]}
                  size={200}
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">75%</p>
                    <p className="text-sm text-gray-400">Overall Progress</p>
                  </div>
                </MultiRing>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-fitness-blue"></div>
                  <div className="flex-1">
                    <p className="text-gray-300">Weight Loss</p>
                    <ProgressBar value={weightReductionData.progress} className="h-2 mt-1" />
                  </div>
                  <span className="text-white">{weightReductionData.progress}%</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-fitness-pink"></div>
                  <div className="flex-1">
                    <p className="text-gray-300">Time Progress</p>
                    <ProgressBar value={goalTimeline.progress} className="h-2 mt-1" />
                  </div>
                  <span className="text-white">{goalTimeline.progress}%</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-fitness-green"></div>
                  <div className="flex-1">
                    <p className="text-gray-300">Exercise Completion</p>
                    <ProgressBar value={75} className="h-2 mt-1" />
                  </div>
                  <span className="text-white">75%</span>
                </div>
                
                <div className="mt-6 flex items-center">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-300 text-sm">
                    Started on: <span className="text-white">March 1, 2025</span>
                  </span>
                </div>
                
                <div className="flex items-center">
                  <Target className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-300 text-sm">
                    Goal date: <span className="text-white">May 30, 2025</span>
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Progress;
