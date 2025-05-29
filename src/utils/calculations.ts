import { Module } from '../types';

export const calculateModuleAverage = (module: Module): number | null => {
  if (module.hasTP) {
    // Module with TP: 0.6*exam + 0.2*td + 0.2*tp
    if (module.exam === null || module.td === null || module.tp === null) {
      return null;
    }
    return 0.6 * module.exam + 0.2 * module.td + 0.2 * module.tp;
  } else {
    // Regular module: 0.4*td + 0.6*exam
    if (module.exam === null || module.td === null) {
      return null;
    }
    return 0.4 * module.td + 0.6 * module.exam;
  }
};

export const calculateSemesterAverage = (modules: Module[]): number | null => {
  const validModules = modules.filter(module => module.average !== null);
  
  if (validModules.length === 0) {
    return null;
  }
  
  const totalWeightedAverage = validModules.reduce(
    (sum, module) => sum + (module.average as number) * module.coefficient, 
    0
  );
  
  const totalCoefficients = validModules.reduce(
    (sum, module) => sum + module.coefficient, 
    0
  );
  
  return totalWeightedAverage / totalCoefficients;
};