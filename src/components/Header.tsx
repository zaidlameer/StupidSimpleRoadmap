import React from 'react';
import { Compass } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-lg p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Compass size={40} className="text-white" />
          <h1 className="text-3xl font-bold tracking-tight">Graduate Software Engineer Roadmap</h1>
        </div>
        <p className="text-sm opacity-90 hidden md:block">Your guide to navigating the tech landscape and landing your dream job.</p>
      </div>
    </header>
  );
};

export default Header;
