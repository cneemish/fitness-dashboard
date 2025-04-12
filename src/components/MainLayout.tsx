
import React from 'react';
import { Home, Dumbbell, BarChart2, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Dumbbell, label: 'Workouts', path: '/workouts' },
    { icon: BarChart2, label: 'Progress', path: '/progress' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 container max-w-5xl mx-auto px-4 pb-16">
        {children}
      </main>
      <nav className="fixed bottom-0 w-full bg-zinc-950 border-t border-zinc-800 py-2 px-4">
        <div className="max-w-5xl mx-auto">
          <ul className="flex justify-between items-center">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`flex flex-col items-center ${isActive ? 'text-fitness-green' : 'text-zinc-400'}`}
                  >
                    <item.icon size={20} />
                    <span className="text-xs mt-1">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MainLayout;
