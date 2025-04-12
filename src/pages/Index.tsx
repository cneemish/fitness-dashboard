
import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  ArrowRight, 
  ChevronRight, 
  Trophy, 
  Users,
  Check
} from 'lucide-react';
import MainLayout from '@/components/MainLayout';
import MultiRing from '@/components/MultiRing';
import ActivityCard from '@/components/ActivityCard';
import WeeklyProgress from '@/components/WeeklyProgress';
import TrendChart from '@/components/TrendChart';
import BodyCompositionCard from '@/components/BodyCompositionCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  activityData, 
  weeklyProgressData, 
  trendsData, 
  bodyCompositionData 
} from '@/data/mockData';

const Index = () => {
  const [showWeight, setShowWeight] = useState(true);
  const [ringProgress, setRingProgress] = useState([0, 0, 0]);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Animate the rings on component mount
  useEffect(() => {
    const interval = setInterval(() => {
      setRingProgress(prev => {
        const [steps, active, calories] = prev;
        return [
          steps >= 85 ? 85 : steps + 2,
          active >= 70 ? 70 : active + 1.5,
          calories >= 65 ? 65 : calories + 1.2
        ];
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Update current date every minute
  useEffect(() => {
    const dateInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(dateInterval);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <MainLayout>
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-white">Health & Performance Science - Your Personal Dashboard</h1>
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
            <span className="text-white">JD</span>
          </div>
        </div>
        <p className="text-zinc-400 text-sm mb-6">
          {formatDate(currentDate)}
        </p>

        {/* Daily Activity Summary */}
        <div className="mb-6 animate-fade-in">
          <div className="flex justify-center mb-4">
            <MultiRing
              rings={[
                { progress: ringProgress[0], color: '#4ADE80', strokeWidth: 10 },
                { progress: ringProgress[1], color: '#60A5FA', strokeWidth: 10 },
                { progress: ringProgress[2], color: '#FF4D8F', strokeWidth: 10 }
              ]}
              size={180}
            >
              <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-black/80">
                <Activity className="text-white mb-1 animate-pulse" size={28} />
                <span className="text-xs text-zinc-400">
                  TODAY
                </span>
              </div>
            </MultiRing>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="transform transition-transform hover:scale-105 duration-300">
              <ActivityCard
                title="Steps"
                icon={activityData.steps.icon}
                value={activityData.steps.current.toLocaleString()}
                target={activityData.steps.goal.toLocaleString()}
                iconColor="bg-fitness-green"
              />
            </div>
            
            <div className="transform transition-transform hover:scale-105 duration-300">
              <ActivityCard
                title="Active Time"
                icon={activityData.activeTime.icon}
                value={activityData.activeTime.current}
                unit="min"
                target={`${activityData.activeTime.goal} min`}
                iconColor="bg-fitness-blue"
              />
            </div>
            
            <div className="transform transition-transform hover:scale-105 duration-300">
              <ActivityCard
                title="Calories"
                icon={activityData.calories.icon}
                value={activityData.calories.current}
                unit="kcal"
                target={`${activityData.calories.goal} kcal`}
                iconColor="bg-fitness-pink"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-zinc-900 rounded-xl p-4 flex justify-between border border-zinc-800 transition-all duration-300 hover:border-fitness-pink hover:shadow-md hover:shadow-fitness-pink/20">
              <div>
                <span className="text-zinc-400 text-sm">Total Burned</span>
                <div className="flex items-baseline">
                  <span className="text-white text-2xl font-bold">
                    {activityData.totalCalories.toLocaleString()}
                  </span>
                  <span className="text-zinc-400 ml-1">kcal</span>
                </div>
              </div>
              <div className="h-full flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-fitness-pink/20 flex items-center justify-center">
                  <Activity className="text-fitness-pink" size={20} />
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-4 flex justify-between border border-zinc-800 transition-all duration-300 hover:border-fitness-blue hover:shadow-md hover:shadow-fitness-blue/20">
              <div>
                <span className="text-zinc-400 text-sm">Distance</span>
                <div className="flex items-baseline">
                  <span className="text-white text-2xl font-bold">{activityData.distance}</span>
                  <span className="text-zinc-400 ml-1">km</span>
                </div>
              </div>
              <div className="h-full flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-fitness-blue/20 flex items-center justify-center">
                  <Activity className="text-fitness-blue" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
          <WeeklyProgress data={weeklyProgressData} />
        </div>

        <div className="my-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Body Metrics</h2>
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white group transition-all duration-300">
              See All <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          <BodyCompositionCard metrics={bodyCompositionData} />
        </div>

        <div className="my-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Trends</h2>
            <div className="flex space-x-2">
              <Button 
                variant={showWeight ? "default" : "outline"} 
                size="sm"
                onClick={() => setShowWeight(true)}
                className={`transition-all duration-300 ${showWeight ? "bg-fitness-green text-black hover:bg-fitness-green/90" : ""}`}
              >
                Weight
              </Button>
              <Button 
                variant={!showWeight ? "default" : "outline"} 
                size="sm"
                onClick={() => setShowWeight(false)}
                className={`transition-all duration-300 ${!showWeight ? "bg-fitness-purple text-white hover:bg-fitness-purple/90" : ""}`}
              >
                Workouts
              </Button>
            </div>
          </div>
          
          <div className="transition-opacity duration-500 ease-in-out">
            {showWeight ? (
              <TrendChart 
                data={trendsData.weight} 
                title="Weight Progress" 
                color="#4ADE80"
                unit=" kg"
              />
            ) : (
              <TrendChart 
                data={trendsData.workouts} 
                title="Workout Duration" 
                color="#9b87f5"
                unit=" min"
              />
            )}
          </div>
        </div>

        <div className="my-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button 
              className="h-auto py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all duration-300 hover:border-fitness-green hover:shadow-md hover:shadow-fitness-green/20"
              onClick={() => window.location.href = '/workouts'}
            >
              <div className="flex flex-col items-center text-center">
                <Trophy size={24} className="mb-2 text-fitness-green" />
                <span className="text-sm font-medium">Start Workout</span>
                <span className="text-xs text-zinc-400 mt-1">Begin your fitness journey</span>
              </div>
            </Button>
            
            <Button 
              className="h-auto py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all duration-300 hover:border-fitness-blue hover:shadow-md hover:shadow-fitness-blue/20"
              onClick={() => window.location.href = '/connect'}
            >
              <div className="flex flex-col items-center text-center">
                <Users size={24} className="mb-2 text-fitness-blue" />
                <span className="text-sm font-medium">Connect Devices</span>
                <span className="text-xs text-zinc-400 mt-1">Sync with your wearables</span>
              </div>
            </Button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4 mb-6 border border-zinc-800 animate-fade-in transition-all duration-300 hover:border-fitness-green" style={{ animationDelay: '500ms' }}>
          <div className="flex items-start">
            <div className="bg-fitness-green text-black rounded-full p-1 mr-3">
              <Check size={16} />
            </div>
            <div>
              <h3 className="text-white font-medium">You're doing great!</h3>
              <p className="text-zinc-400 text-sm">You've completed 5 of 7 workouts this week. Keep going!</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
