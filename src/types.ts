import React from 'react';

export const ResourceType = {
  ARTICLE: 'article',
  COURSE: 'course',
  TOOL: 'tool',
  VIDEO: 'video',
  BOOK: 'book',
  COMMUNITY: 'community',
  PROJECT_IDEA: 'project_idea',
  ADVICE: 'advice',
  GITHUB: 'github',
} as const;

export type ResourceType = typeof ResourceType[keyof typeof ResourceType];

export interface Resource {
  id: string;
  title: string;
  url: string;
  type: ResourceType;
  description?: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  resources?: Resource[];
  keyFocus?: boolean;
}

export interface Phase {
  id: string;
  title: string;
  summary: string;
  Icon?: React.ElementType; // Lucide icon component
  steps: Step[];
}
