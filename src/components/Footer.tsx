import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 text-slate-300 text-center p-6 mt-12">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Stupid Simple Roadmap. All rights reserved.</p>
        <p className="text-xs mt-1">Wishing you success on your journey!</p>
      </div>
    </footer>
  );
};

export default Footer;
