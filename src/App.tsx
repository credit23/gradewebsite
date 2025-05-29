import React from 'react';
import { GraduationCap as Graduation } from 'lucide-react';
import Header from './components/Header';
import GradeCalculator from './components/GradeCalculator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e4b5cb] to-[#722ae6]">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <GradeCalculator />
      </main>
      <footer className="py-6 text-center text-sm text-white/90">
        <div className="flex items-center justify-center gap-2">
          <Graduation size={18} />
          <span>Made by Any4ss</span>
        </div>
      </footer>
    </div>
  );
}

export default App;