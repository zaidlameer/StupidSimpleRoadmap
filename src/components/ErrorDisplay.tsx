import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorDisplayProps {
  message: string;
  title?: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message, title = "An Error Occurred" }) => {
  return (
    <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md shadow-sm" role="alert">
      <div className="flex items-center">
        <AlertTriangle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
