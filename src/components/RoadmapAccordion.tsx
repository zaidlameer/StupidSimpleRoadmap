import React, { useState } from 'react';
import { Phase } from '../types';
import RoadmapPhaseItem from './RoadmapPhaseItem';

interface RoadmapAccordionProps {
  phases: Phase[];
}

const RoadmapAccordion: React.FC<RoadmapAccordionProps> = ({ phases }) => {
  const [openPhaseId, setOpenPhaseId] = useState<string | null>(phases.length > 0 ? phases[0].id : null);

  const togglePhase = (phaseId: string) => {
    setOpenPhaseId(prevOpenPhaseId => (prevOpenPhaseId === phaseId ? null : phaseId));
  };

  return (
    <div className="space-y-4 mt-8">
      {phases.map((phase, index) => (
        <RoadmapPhaseItem
          key={phase.id}
          phase={phase}
          isOpen={openPhaseId === phase.id}
          onToggle={() => togglePhase(phase.id)}
          phaseNumber={index + 1}
        />
      ))}
    </div>
  );
};

export default RoadmapAccordion;
