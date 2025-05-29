import React, { useState, useEffect } from 'react';
import ModuleInput from './ModuleInput';
import ResultsDisplay from './ResultsDisplay';
import SemesterInput from './SemesterInput';
import { calculateModuleAverage, calculateSemesterAverage } from '../utils/calculations';
import { Module } from '../types';

const GradeCalculator: React.FC = () => {
  const [firstSemesterAvg, setFirstSemesterAvg] = useState<number | null>(null);
  const [modules, setModules] = useState<Module[]>([
    { id: 1, name: 'ENG 1', coefficient: 2, exam: null, td: null, tp: null, average: null },
    { id: 2, name: 'TEO', coefficient: 2, exam: null, td: null, tp: null, average: null },
    { id: 3, name: 'ANA 2', coefficient: 5, exam: null, td: null, tp: null, average: null },
    { id: 4, name: 'ALG 2', coefficient: 3, exam: null, td: null, tp: null, average: null },
    { id: 5, name: 'ELCF 1', coefficient: 4, exam: null, td: null, tp: null, average: null },
    { id: 6, name: 'MECA', coefficient: 3, exam: null, td: null, tp: null, average: null },
    { id: 7, name: 'SYS 2', coefficient: 3, exam: null, td: null, tp: null, average: null },
    { id: 8, name: 'ALSDD', coefficient: 5, exam: null, td: null, tp: null, average: null, hasTP: true },
  ]);
  const [currentSemesterAvg, setCurrentSemesterAvg] = useState<number | null>(null);
  const [generalAvg, setGeneralAvg] = useState<number | null>(null);

  useEffect(() => {
    const updatedModules = modules.map(module => ({
      ...module,
      average: calculateModuleAverage(module)
    }));
    
    setModules(updatedModules);
    
    const semesterAverage = calculateSemesterAverage(updatedModules);
    setCurrentSemesterAvg(semesterAverage);
    
    if (firstSemesterAvg !== null && semesterAverage !== null) {
      setGeneralAvg((firstSemesterAvg + semesterAverage) / 2);
    } else {
      setGeneralAvg(null);
    }
  }, [modules, firstSemesterAvg]);

  const handleModuleChange = (moduleId: number, field: string, value: number | null) => {
    setModules(prevModules => 
      prevModules.map(module => 
        module.id === moduleId ? { ...module, [field]: value } : module
      )
    );
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-6 animate-fadeIn">
      <div className="mb-8">
        <SemesterInput 
          value={firstSemesterAvg} 
          onChange={setFirstSemesterAvg} 
        />
      </div>
      
      <div className="mb-8">
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map(module => (
            <ModuleInput
              key={module.id}
              module={module}
              onChange={handleModuleChange}
            />
          ))}
        </div>
      </div>
      
      <ResultsDisplay
        currentSemesterAvg={currentSemesterAvg}
        generalAvg={generalAvg}
        modules={modules}
      />
    </div>
  );
};

export default GradeCalculator;