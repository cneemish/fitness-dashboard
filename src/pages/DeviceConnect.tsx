
import React, { useState } from 'react';
import { ArrowLeft, Plus, ListFilter } from 'lucide-react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import DeviceConnection, { DeviceProps } from '@/components/DeviceConnection';
import { deviceData } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const DeviceConnect = () => {
  const [devices, setDevices] = useState<DeviceProps[]>(deviceData);
  const { toast } = useToast();

  const handleConnectDevice = (deviceId: string) => {
    setDevices(prev => 
      prev.map(device => 
        device.id === deviceId 
          ? { ...device, isConnected: true, lastSync: 'Just now' } 
          : device
      )
    );
    
    toast({
      title: "Device connected",
      description: "Your device has been successfully connected",
      duration: 3000,
    });
  };

  const handleSetupDevice = (deviceId: string) => {
    toast({
      title: "Setup initiated",
      description: "Starting device setup process",
      duration: 3000,
    });
  };

  return (
    <MainLayout>
      <div className="mt-4">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4">
            <ArrowLeft size={24} className="text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Connect Devices</h1>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Your Devices</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="text-zinc-400">
              <ListFilter size={16} className="mr-1" /> Filter
            </Button>
            <Button size="sm" className="bg-fitness-green text-black hover:bg-fitness-green/90">
              <Plus size={16} className="mr-1" /> Add New
            </Button>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {devices.filter(d => d.isConnected).map(device => (
            <DeviceConnection 
              key={device.id} 
              device={device} 
              onConnect={handleConnectDevice}
              onSetup={handleSetupDevice}
            />
          ))}
        </div>

        <h3 className="text-md font-medium text-white mb-4">Available Devices</h3>
        <div className="space-y-2 mb-6">
          {devices.filter(d => !d.isConnected).map(device => (
            <DeviceConnection 
              key={device.id} 
              device={device} 
              onConnect={handleConnectDevice}
              onSetup={handleSetupDevice}
            />
          ))}
        </div>

        <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 mb-6">
          <h3 className="text-white font-medium mb-2">Sync Settings</h3>
          <p className="text-zinc-400 text-sm">Manage how and when your devices sync data with FitFusion Hub</p>
          <Button 
            variant="outline" 
            className="mt-3 w-full text-zinc-300 border-zinc-700"
          >
            Configure Settings
          </Button>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
          <h3 className="text-white font-medium mb-2">Having trouble?</h3>
          <p className="text-zinc-400 text-sm">Check our troubleshooting guide or contact support for assistance with device connections.</p>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <Button 
              variant="outline" 
              className="text-zinc-300 border-zinc-700"
            >
              Troubleshoot
            </Button>
            <Button 
              variant="outline" 
              className="text-zinc-300 border-zinc-700"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DeviceConnect;
