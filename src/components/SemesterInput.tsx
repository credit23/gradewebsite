import React from 'react';
import { CalendarCheck } from 'lucide-react';

interface SemesterInputProps {
  value: number | null;
  onChange: (value: number | null) => void;
}

const SemesterInput: React.FC<SemesterInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value === '' ? null : parseFloat(e.target.value);
    onChange(inputValue);
  };

  return (
    <div className="bg-gradient-to-r from-violet-100 to-violet-50 rounded-lg p-6 border border-violet-200 transition-all hover:shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <CalendarCheck size={24} className="text-violet-700" />
        <h3 className="text-xl font-semibold text-violet-900">First Semester Average</h3>
      </div>
      
      <div>
        <label htmlFor="first-semester-avg" className="block text-sm font-medium text-violet-700 mb-2">
          Enter your first semester average
        </label>
        <input
          id="first-semester-avg"
          type="number"
          min="0"
          max="20"
          step="0.01"
          value={value === null ? '' : value}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border-2 border-violet-200 rounded-md focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all text-lg"
          placeholder="Enter your first semester average"
        />
      </div>
    </div>
  );
};

export default SemesterInput;