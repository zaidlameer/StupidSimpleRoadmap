import React from 'react';
import { type Resource, ResourceType } from '../types';
import { BookOpen, Link as LinkIconLucide, Film, Code2, Users, FileText, Briefcase, Github, Zap } from 'lucide-react';

interface ResourceLinkProps {
  resource: Resource;
}

const getIconForResourceType = (type: ResourceType): React.ReactNode => {
  switch (type) {
    case ResourceType.ARTICLE:
      return <FileText size={16} className="text-sky-600" />;
    case ResourceType.BOOK:
      return <BookOpen size={16} className="text-green-600" />;
    case ResourceType.COURSE:
      return <Zap size={16} className="text-indigo-600" />;
    case ResourceType.TOOL:
      return <Code2 size={16} className="text-purple-600" />;
    case ResourceType.VIDEO:
      return <Film size={16} className="text-red-600" />;
    case ResourceType.COMMUNITY:
      return <Users size={16} className="text-orange-600" />;
    case ResourceType.PROJECT_IDEA:
      return <Briefcase size={16} className="text-teal-600" />;
    case ResourceType.GITHUB:
      return <Github size={16} className="text-gray-700" />;
    default:
      return <LinkIconLucide size={16} className="text-slate-500" />;
  }
};

const ResourceLink: React.FC<ResourceLinkProps> = ({ resource }) => {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-sm text-sky-700 hover:text-sky-900 hover:underline transition-colors duration-200 group bg-white p-2 rounded-md border border-slate-200 hover:border-sky-300"
    >
      {getIconForResourceType(resource.type)}
      <span className="flex-grow">{resource.title}</span>
      <LinkIconLucide size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};

export default ResourceLink;
