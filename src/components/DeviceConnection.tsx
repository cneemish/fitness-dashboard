
import React from 'react';
import { Check, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '@/components/ui/tooltip';

export interface DeviceProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  isConnected: boolean;
  lastSync?: string;
}

interface DeviceConnectionProps {
  device: DeviceProps;
  onConnect: (deviceId: string) => void;
  onSetup: (deviceId: string) => void;
}

const DeviceConnection: React.FC<DeviceConnectionProps> = ({
  device,
  onConnect,
  onSetup
}) => {
  return (
    <div className="flex items-center justify-between p-3 border border-zinc-800 rounded-lg mb-2 bg-zinc-900">
      <div className="flex items-center">
        <div className="w-10 h-10 flex items-center justify-center mr-3 text-white">
          {device.icon}
        </div>
        <div>
          <h3 className="text-white font-medium">{device.name}</h3>
          {device.lastSync && device.isConnected && (
            <p className="text-xs text-zinc-400">Last sync: {device.lastSync}</p>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {device.isConnected ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge className="bg-fitness-green text-black hover:bg-fitness-green/90">
                  <Check size={12} className="mr-1" /> Connected
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Device is connected and syncing data</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <Button 
            size="sm" 
            variant="outline" 
            className="text-xs border-fitness-green text-fitness-green hover:bg-fitness-green hover:text-black"
            onClick={() => onConnect(device.id)}
          >
            Connect
          </Button>
        )}
        <Button 
          size="sm" 
          variant="ghost" 
          className="text-xs text-zinc-400 hover:text-white hover:bg-zinc-800"
          onClick={() => onSetup(device.id)}
        >
          Setup
        </Button>
      </div>
    </div>
  );
};

export default DeviceConnection;
