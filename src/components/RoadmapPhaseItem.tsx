import React from 'react';

interface RoadmapPhaseItemProps {
  title: string;
  description: string;
  steps: string[];
}

const RoadmapPhaseItem: React.FC<RoadmapPhaseItemProps> = ({ title, description, steps }) => {
  return (
    <div className="roadmap-phase-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapPhaseItem;