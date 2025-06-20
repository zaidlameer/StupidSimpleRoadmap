import React from 'react';
import type { Step } from '../types';
import ResourceLink from './ResourceLink';
import { Star } from 'lucide-react';

interface RoadmapStepProps {
  step: Step;
}

const RoadmapStep: React.FC<RoadmapStepProps> = ({ step }) => {
  return (
    <div className={`p-5 rounded-lg ${step.keyFocus ? 'bg-sky-50 border-l-4 border-sky-500' : 'bg-slate-50 border-l-4 border-slate-300'}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-700">{step.title}</h3>
        {step.keyFocus && (
          <div className="flex items-center text-amber-500" title="Key Focus Area">
            <Star size={18} className="fill-current" /> 
            <span className="ml-1 text-xs font-medium hidden sm:inline">Key Focus</span>
          </div>
        )}
      </div>
      <p className="text-slate-600 mt-2 text-sm leading-relaxed">{step.description}</p>
      {step.resources && step.resources.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-slate-600 mb-2">Resources:</h4>
          <ul className="space-y-2">
            {step.resources.map(resource => (
              <li key={resource.id}>
                <ResourceLink resource={resource} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoadmapStep;
