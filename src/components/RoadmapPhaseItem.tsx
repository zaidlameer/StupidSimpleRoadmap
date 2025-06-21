import React from 'react';
import type { Phase, Step as StepType } from '../types';
import RoadmapStep from './RoadmapStep';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface RoadmapPhaseItemProps {
  phase: Phase;
  isOpen: boolean;
  onToggle: () => void;
  phaseNumber: number;
}

const RoadmapPhaseItem: React.FC<RoadmapPhaseItemProps> = ({ phase, isOpen, onToggle, phaseNumber }) => {
  const PhaseIcon = phase.Icon;

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-opacity-75"
        aria-expanded={isOpen}
        aria-controls={`phase-content-${phase.id}`}
      >
        <div className="flex items-center space-x-4">
          {PhaseIcon && <PhaseIcon className="w-8 h-8 text-sky-600 flex-shrink-0" />}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
              <span className="text-sky-600">Phase {phaseNumber}:</span> {phase.title}
            </h2>
            {!isOpen && <p className="text-sm text-slate-600 mt-1">{phase.summary}</p>}
          </div>
        </div>
        {isOpen ? <ChevronUp className="w-6 h-6 text-sky-600" /> : <ChevronDown className="w-6 h-6 text-slate-500" />}
      </button>
      
      {isOpen && (
        <div id={`phase-content-${phase.id}`} className="px-6 pb-6 pt-2 border-t border-slate-200">
          <p className="text-slate-700 mb-6 italic">{phase.summary}</p>
          <div className="space-y-6">
            {phase.steps.map((step: StepType) => (
              <RoadmapStep key={step.id} step={step} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapPhaseItem;
