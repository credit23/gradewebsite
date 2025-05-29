import React from 'react';
import { GraduationCap as Graduation } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/10 backdrop-blur-sm shadow-lg py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="/GRADE.png" 
            alt="Grade Calculator Logo" 
            className="h-10 w-auto"
          />
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white">CP1-MI S2</h1>
          </div>
        </div>
        <p className="text-sm md:text-base italic text-white/80">Grade Calculator</p>
      </div>
    </header>
  );
};

export default Header;