
import React, { useState } from 'react';
import { ArrowLeft, Play, Plus, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import ExerciseCard from '@/components/ExerciseCard';
import { exerciseData, workoutPlans } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const Workouts = () => {
  const [expandedSections, setExpandedSections] = useState({
    warmup: false,
    workout: true,
    cooldown: false
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <MainLayout>
      <div className="mt-4">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4">
            <ArrowLeft size={24} className="text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Exercise Builder</h1>
        </div>

        <Tabs defaultValue="today" className="mb-6">
          <TabsList className="grid grid-cols-2 w-full bg-zinc-900">
            <TabsTrigger value="today">Today's Plan</TabsTrigger>
            <TabsTrigger value="library">Exercise Library</TabsTrigger>
          </TabsList>
          
          <TabsContent value="today" className="mt-4">
            <div className="bg-zinc-900 rounded-xl p-4 mb-6 border border-zinc-800">
              <h2 className="text-white font-semibold mb-1">Barbell Gain</h2>
              <div className="flex items-center text-sm text-zinc-400 mb-2">
                <span className="mr-4">8 of 12 sessions</span>
                <Badge className="bg-fitness-purple text-white">STRENGTH</Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-zinc-300 mt-3">
                <div className="flex items-center">
                  <span className="mr-4">⏱️ 52-60 min</span>
                  <span>⚡ 2000 points</span>
                </div>
                <div className="flex">
                  <div className="flex -space-x-2">
                    {/* Human body icons */}
                    <div className="w-6 h-6 rounded-full bg-fitness-blue flex items-center justify-center text-xs">U</div>
                    <div className="w-6 h-6 rounded-full bg-fitness-green flex items-center justify-center text-xs">L</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warmup Section */}
            <div className="bg-zinc-900 rounded-xl mb-4 border border-zinc-800 overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleSection('warmup')}
              >
                <h3 className="text-white font-medium">Warmup</h3>
                <div className="flex items-center">
                  <span className="text-zinc-400 text-sm mr-2">6-7 min • 1 round</span>
                  {expandedSections.warmup ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              
              {expandedSections.warmup && (
                <div className="p-4 pt-0">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[0, 1, 2].map((i) => (
                      <ExerciseCard
                        key={i}
                        name="Mountain Climbers"
                        sets={1}
                        reps={30}
                        image="https://via.placeholder.com/300x200.png?text=Mountain+Climbers"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Workout Section */}
            <div className="bg-zinc-900 rounded-xl mb-4 border border-zinc-800 overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleSection('workout')}
              >
                <h3 className="text-white font-medium">Workout</h3>
                <div className="flex items-center">
                  <span className="text-zinc-400 text-sm mr-2">4 exercises • 4 rounds</span>
                  {expandedSections.workout ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              
              {expandedSections.workout && (
                <div className="p-4 pt-0">
                  <div className="mb-4">
                    <div className="bg-zinc-800 p-3 rounded-lg mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm font-medium">Interval 1</span>
                        <span className="text-zinc-400 text-xs">10-12 min • 4 rounds</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-zinc-700 rounded-md overflow-hidden mr-3">
                          <img 
                            src="https://via.placeholder.com/300x200.png?text=Deadlift"
                            alt="Deadlift"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-white text-sm font-medium">Deadlift</h4>
                          <span className="text-zinc-400 text-xs">10×8-10 reps</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-zinc-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm font-medium">Interval 2</span>
                        <span className="text-zinc-400 text-xs">8-10 min • 3 rounds</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-zinc-700 rounded-md overflow-hidden mr-3">
                          <img 
                            src="https://via.placeholder.com/300x200.png?text=Squats"
                            alt="Squats"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-white text-sm font-medium">Front Squats</h4>
                          <span className="text-zinc-400 text-xs">4×12 reps</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-zinc-800 hover:bg-zinc-700 text-white"
                    variant="outline"
                  >
                    <Plus size={16} className="mr-2" /> Add Exercise
                  </Button>
                </div>
              )}
            </div>

            {/* Cooldown Section */}
            <div className="bg-zinc-900 rounded-xl mb-6 border border-zinc-800 overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleSection('cooldown')}
              >
                <h3 className="text-white font-medium">Cooldown</h3>
                <div className="flex items-center">
                  <span className="text-zinc-400 text-sm mr-2">5 min • 1 round</span>
                  {expandedSections.cooldown ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              
              {expandedSections.cooldown && (
                <div className="p-4 pt-0">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
                    {[0, 1].map((i) => (
                      <ExerciseCard
                        key={i}
                        name="Stretching"
                        sets={1}
                        reps={5}
                        image="https://via.placeholder.com/300x200.png?text=Stretching"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="text-zinc-300 border-zinc-700">
                Adapt Session
              </Button>
              <Button className="bg-fitness-green text-black hover:bg-fitness-green/90">
                <Play size={16} className="mr-2" /> Start
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="library" className="mt-4">
            <div className="mb-4">
              <Input 
                placeholder="Search exercises..." 
                className="bg-zinc-900 border-zinc-700 text-white"
              />
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Popular Exercises</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {exerciseData.slice(0, 6).map((exercise) => (
                  <ExerciseCard
                    key={exercise.id}
                    name={exercise.name}
                    sets={exercise.sets}
                    reps={exercise.reps}
                    image={exercise.image}
                    duration={exercise.duration}
                  />
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Workout Plans</h3>
              <div className="space-y-3">
                {workoutPlans.map((plan) => (
                  <Card key={plan.id} className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-white font-medium mb-1">{plan.name}</h4>
                          <p className="text-zinc-400 text-sm mb-2">{plan.description}</p>
                          <div className="flex text-sm text-zinc-500">
                            <span className="mr-3">⏱️ {plan.duration}</span>
                            <Badge className="bg-zinc-800 text-zinc-300">{plan.difficulty}</Badge>
                          </div>
                        </div>
                        <Button size="sm" className="bg-fitness-green text-black hover:bg-fitness-green/90">
                          <Plus size={16} /> Add
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Workouts;
