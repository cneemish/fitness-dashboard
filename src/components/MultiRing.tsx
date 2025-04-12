
import React from 'react';

interface RingData {
  progress: number;
  color: string;
  strokeWidth: number;
}

interface MultiRingProps {
  rings: RingData[];
  size?: number;
  className?: string;
  children?: React.ReactNode;
}

const MultiRing: React.FC<MultiRingProps> = ({
  rings,
  size = 200,
  className = "",
  children
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {rings.map((ring, index) => {
          const radius = (size / 2) - (rings.length - index) * (ring.strokeWidth + 4);
          const circumference = radius * 2 * Math.PI;
          const strokeDashoffset = circumference - (ring.progress / 100) * circumference;
          
          return (
            <React.Fragment key={index}>
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth={ring.strokeWidth}
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={ring.color}
                strokeWidth={ring.strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </React.Fragment>
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default MultiRing;
