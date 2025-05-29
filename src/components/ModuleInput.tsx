import React from 'react';
import { BookOpen, Award } from 'lucide-react';
import { Module } from '../types';

interface ModuleInputProps {
  module: Module;
  onChange: (moduleId: number, field: string, value: number | null) => void;
}

const ModuleInput: React.FC<ModuleInputProps> = ({ module, onChange }) => {
  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? null : parseFloat(e.target.value);
    onChange(module.id, field, value);
  };

  const getAverageColor = (average: number | null) => {
    if (average === null) return 'text-gray-400';
    if (average <= 6) return 'text-red-600';
    if (average < 10) return 'text-amber-600';
    return 'text-violet-600';
  };

  return (
    <div className={`bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-6 border transition-all duration-300 ${
      module.average === null ? 'border-violet-200' : 
      module.average <= 6 ? 'border-red-200' :
      module.average < 10 ? 'border-amber-200' : 'border-violet-300'
    } hover:shadow-lg transform hover:-translate-y-1`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BookOpen size={20} className="text-violet-700" />
          <h4 className="font-semibold text-violet-900">{module.name}</h4>
        </div>
        <span className="text-sm font-medium text-violet-600 bg-violet-100 px-2 py-1 rounded-full">
          Coef: {module.coefficient}
        </span>
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <label htmlFor={`exam-${module.id}`} className="block text-sm font-medium text-violet-700 mb-1">
            Exam Grade
          </label>
          <input
            id={`exam-${module.id}`}
            type="number"
            min="0"
            max="20"
            step="0.01"
            value={module.exam === null ? '' : module.exam}
            onChange={handleInputChange('exam')}
            className="w-full px-3 py-2 bg-white border-2 border-violet-200 rounded-md focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all"
            placeholder="Enter exam grade"
          />
        </div>
        
        <div className="relative">
          <label htmlFor={`td-${module.id}`} className="block text-sm font-medium text-violet-700 mb-1">
            TD Grade
          </label>
          <input
            id={`td-${module.id}`}
            type="number"
            min="0"
            max="20"
            step="0.01"
            value={module.td === null ? '' : module.td}
            onChange={handleInputChange('td')}
            className="w-full px-3 py-2 bg-white border-2 border-violet-200 rounded-md focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all"
            placeholder="Enter TD grade"
          />
        </div>
        
        {module.hasTP && (
          <div className="relative">
            <label htmlFor={`tp-${module.id}`} className="block text-sm font-medium text-violet-700 mb-1">
              TP Grade
            </label>
            <input
              id={`tp-${module.id}`}
              type="number"
              min="0"
              max="20"
              step="0.01"
              value={module.tp === null ? '' : module.tp}
              onChange={handleInputChange('tp')}
              className="w-full px-3 py-2 bg-white border-2 border-violet-200 rounded-md focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all"
              placeholder="Enter TP grade"
            />
          </div>
        )}

        <div className={`mt-4 p-3 rounded-lg flex items-center justify-between ${
          module.average === null ? 'bg-gray-50' :
          module.average <= 6 ? 'bg-red-50' :
          module.average < 10 ? 'bg-amber-50' : 'bg-violet-50'
        }`}>
          <div className="flex items-center gap-2">
            <Award size={20} className={getAverageColor(module.average)} />
            <span className="font-medium text-violet-900">Module Average:</span>
          </div>
          <span className={`text-xl font-bold ${getAverageColor(module.average)}`}>
            {module.average === null ? '—' : module.average.toFixed(2)}
          </span>
        </div>

        {module.average !== null && module.average <= 6 && (
          <div className="mt-2 text-sm text-red-600 font-medium flex items-center gap-1 justify-center bg-red-50 py-1 px-2 rounded-md">
            ⚠️ Elimination Note
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleInput;