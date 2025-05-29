import React from 'react';
import { CheckCircle, AlertCircle, HelpCircle, Zap } from 'lucide-react';
import { Module } from '../types';
import StatusIndicator from './StatusIndicator';

interface ResultsDisplayProps {
  currentSemesterAvg: number | null;
  generalAvg: number | null;
  modules: Module[];
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ currentSemesterAvg, generalAvg, modules }) => {
  const formatAverage = (average: number | null): string => {
    if (average === null) return '—';
    return average.toFixed(2);
  };

  const getModuleStatusMessage = (average: number | null): string => {
    if (average === null) return '';
    if (average <= 6) return 'Elimination Note';
    return '';
  };

  const getSemesterStatusMessage = (average: number | null): string => {
    if (average === null) return '';
    if (average < 10) return 'At risk of retake exams';
    return 'Semester passed';
  };

  const hasAllRequiredInputs = modules.every(module => {
    if (module.hasTP) {
      return module.exam !== null && module.td !== null && module.tp !== null;
    }
    return module.exam !== null && module.td !== null;
  });

  return (
    <div className="bg-gradient-to-br from-violet-50 via-violet-100 to-violet-50 rounded-lg p-6 border border-violet-200 shadow-lg">
      <h3 className="text-xl font-bold text-violet-900 mb-6 flex items-center gap-2">
        <Zap size={24} className="text-violet-600" />
        Final Results
      </h3>
      
      <div className="space-y-6">        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-6 bg-white rounded-xl border border-violet-200 shadow-sm">
            <h4 className="text-lg font-semibold text-violet-900 mb-4">Current Semester Average</h4>
            <div className="flex flex-col gap-3">
              <StatusIndicator status={currentSemesterAvg !== null ? (currentSemesterAvg >= 10 ? 'success' : 'warning') : 'neutral'}>
                {getSemesterStatusMessage(currentSemesterAvg)}
              </StatusIndicator>
              <div className="text-3xl font-bold text-center p-4 rounded-lg bg-violet-50">
                <span className={currentSemesterAvg !== null ? 
                  (currentSemesterAvg >= 10 ? 'text-green-600' : 'text-amber-600') :
                  'text-gray-400'}>
                  {formatAverage(currentSemesterAvg)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-xl border border-violet-200 shadow-sm">
            <h4 className="text-lg font-semibold text-violet-900 mb-4">General Year Average</h4>
            <div className="flex flex-col gap-3">
              <StatusIndicator status={generalAvg !== null ? (generalAvg >= 10 ? 'success' : 'warning') : 'neutral'}>
                {getSemesterStatusMessage(generalAvg)}
              </StatusIndicator>
              <div className="text-3xl font-bold text-center p-4 rounded-lg bg-violet-50">
                <span className={generalAvg !== null ? 
                  (generalAvg >= 10 ? 'text-green-600' : 'text-amber-600') :
                  'text-gray-400'}>
                  {formatAverage(generalAvg)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {!hasAllRequiredInputs && (
        <div className="mt-6 text-sm text-violet-600 italic bg-violet-50 p-4 rounded-lg border border-violet-200 flex items-center gap-2">
          <HelpCircle size={18} />
          <span>Complete all module inputs to see accurate results</span>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;