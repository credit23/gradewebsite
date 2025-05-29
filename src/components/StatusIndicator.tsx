import React from 'react';
import { CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

interface StatusIndicatorProps {
  status: 'success' | 'warning' | 'neutral';
  children: React.ReactNode;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, children }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return <CheckCircle size={18} className="text-green-500" />;
      case 'warning':
        return <AlertCircle size={18} className="text-amber-500" />;
      case 'neutral':
      default:
        return <HelpCircle size={18} className="text-gray-400" />;
    }
  };
  
  const getStatusClass = () => {
    switch (status) {
      case 'success':
        return 'text-green-700 bg-green-50 border-green-100';
      case 'warning':
        return 'text-amber-700 bg-amber-50 border-amber-100';
      case 'neutral':
      default:
        return 'text-gray-500 bg-gray-50 border-gray-100';
    }
  };
  
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${getStatusClass()} border transition-all duration-300`}>
      {getStatusIcon()}
      <span>{children || 'No data available'}</span>
    </div>
  );
};

export default StatusIndicator;