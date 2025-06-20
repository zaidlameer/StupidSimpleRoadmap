import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RoadmapAccordion from './components/RoadmapAccordion';
import MotivationalBanner from './components/MotivationalBanner';
import { ROADMAP_PHASES } from './Constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <MotivationalBanner />
        <RoadmapAccordion phases={ROADMAP_PHASES} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
