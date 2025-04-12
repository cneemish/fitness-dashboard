
import { 
  AppleIcon, 
  Watch, 
  Activity, 
  Heart, 
  Timer, 
  Flame, 
  Footprints, 
  BarChart3 
} from 'lucide-react';
import React from 'react';

export const deviceData = [
  {
    id: 'apple-watch',
    name: 'Apple Watch',
    icon: React.createElement(AppleIcon, { size: 24 }),
    isConnected: true,
    lastSync: 'Today, 10:15 AM'
  },
  {
    id: 'samsung-watch',
    name: 'Samsung Galaxy Watch',
    icon: React.createElement(Watch, { size: 24 }),
    isConnected: true,
    lastSync: 'Today, 9:45 AM'
  },
  {
    id: 'polar-watch',
    name: 'Polar Watch',
    icon: React.createElement(Watch, { size: 24 }),
    isConnected: false
  },
  {
    id: 'polar-hr',
    name: 'Polar Heart Rate Monitor',
    icon: React.createElement(Heart, { size: 24 }),
    isConnected: false
  },
  {
    id: 'fitbit',
    name: 'Fitbit',
    icon: React.createElement(Activity, { size: 24 }),
    isConnected: false
  },
  {
    id: 'garmin',
    name: 'Garmin',
    icon: React.createElement(Activity, { size: 24 }),
    isConnected: false
  },
  {
    id: 'whoop',
    name: 'Whoop',
    icon: React.createElement(Heart, { size: 24 }),
    isConnected: false
  }
];

export const activityData = {
  steps: {
    current: 10018,
    goal: 6000,
    icon: React.createElement(Footprints, { size: 18 }),
    color: 'bg-fitness-green'
  },
  activeTime: {
    current: 160,
    goal: 90,
    unit: 'mins',
    icon: React.createElement(Timer, { size: 18 }),
    color: 'bg-fitness-blue'
  },
  calories: {
    current: 1352,
    goal: 500,
    unit: 'kcal',
    icon: React.createElement(Flame, { size: 18 }),
    color: 'bg-fitness-pink'
  },
  totalCalories: 3165,
  distance: 5.41
};

export const bodyCompositionData = [
  {
    label: 'BMI',
    value: 22.5,
    unit: 'kg/m²',
    progress: 75,
    color: '#4ADE80'
  },
  {
    label: 'Body Fat',
    value: 16.8,
    unit: '%',
    progress: 65,
    color: '#60A5FA'
  },
  {
    label: 'Muscle Mass',
    value: 36.5,
    unit: 'kg',
    progress: 80,
    color: '#FF4D8F'
  }
];

export const trendsData = {
  weight: [
    { date: 'Apr 1', value: 72.5 },
    { date: 'Apr 5', value: 72.2 },
    { date: 'Apr 10', value: 71.8 },
    { date: 'Apr 15', value: 71.5 },
    { date: 'Apr 20', value: 71.2 },
    { date: 'Apr 25', value: 70.9 },
    { date: 'Apr 30', value: 70.5 }
  ],
  workouts: [
    { date: 'Apr 1', value: 45 },
    { date: 'Apr 5', value: 55 },
    { date: 'Apr 10', value: 40 },
    { date: 'Apr 15', value: 60 },
    { date: 'Apr 20', value: 65 },
    { date: 'Apr 25', value: 55 },
    { date: 'Apr 30', value: 70 }
  ]
};

export const weeklyProgressData = [
  { day: 'Monday', shortDay: 'Mon', date: 8, completed: true, isCurrent: false },
  { day: 'Tuesday', shortDay: 'Tue', date: 9, completed: true, isCurrent: false },
  { day: 'Wednesday', shortDay: 'Wed', date: 10, completed: true, isCurrent: false },
  { day: 'Thursday', shortDay: 'Thu', date: 11, completed: false, isCurrent: false },
  { day: 'Friday', shortDay: 'Fri', date: 12, completed: true, isCurrent: false },
  { day: 'Saturday', shortDay: 'Sat', date: 13, completed: true, isCurrent: true },
  { day: 'Sunday', shortDay: 'Sun', date: 14, completed: false, isCurrent: false }
];

export const exerciseData = [
  {
    id: 1,
    name: 'Barbell Squat',
    sets: 4,
    reps: 10,
    image: 'https://via.placeholder.com/300x200.png?text=Barbell+Squat',
    duration: '8-12 min',
    muscle: 'Lower'
  },
  {
    id: 2,
    name: 'Deadlift',
    sets: 3,
    reps: 8,
    image: 'https://via.placeholder.com/300x200.png?text=Deadlift',
    duration: '6-10 min',
    muscle: 'Lower'
  },
  {
    id: 3,
    name: 'Bench Press',
    sets: 5,
    reps: 5,
    image: 'https://via.placeholder.com/300x200.png?text=Bench+Press',
    duration: '8-10 min',
    muscle: 'Upper'
  },
  {
    id: 4,
    name: 'Pull-up',
    sets: 4,
    reps: 8,
    image: 'https://via.placeholder.com/300x200.png?text=Pull-up',
    duration: '7-9 min',
    muscle: 'Upper'
  },
  {
    id: 5,
    name: 'Overhead Press',
    sets: 3,
    reps: 10,
    image: 'https://via.placeholder.com/300x200.png?text=Overhead+Press',
    duration: '5-8 min',
    muscle: 'Upper'
  },
  {
    id: 6,
    name: 'Romanian Deadlift',
    sets: 3,
    reps: 12,
    image: 'https://via.placeholder.com/300x200.png?text=Romanian+Deadlift',
    duration: '6-9 min',
    muscle: 'Lower'
  },
  {
    id: 7,
    name: 'Barbell Row',
    sets: 4,
    reps: 8,
    image: 'https://via.placeholder.com/300x200.png?text=Barbell+Row',
    duration: '7-10 min',
    muscle: 'Upper'
  },
  {
    id: 8,
    name: 'Lunges',
    sets: 3,
    reps: 12,
    image: 'https://via.placeholder.com/300x200.png?text=Lunges',
    duration: '6-8 min',
    muscle: 'Lower'
  }
];

export const workoutPlans = [
  {
    id: 'strength',
    name: 'Strength',
    description: 'Build strength and muscle mass',
    duration: '45-60 min',
    difficulty: 'Intermediate',
    exercises: [1, 2, 3, 5, 7]
  },
  {
    id: 'endurance',
    name: 'Endurance',
    description: 'Improve cardiovascular health',
    duration: '30-45 min',
    difficulty: 'Beginner',
    exercises: [4, 6, 8]
  },
  {
    id: 'fullbody',
    name: 'Full Body',
    description: 'Complete body workout',
    duration: '60-75 min',
    difficulty: 'Advanced',
    exercises: [1, 3, 4, 6, 7, 8]
  }
];
