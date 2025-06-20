import type { Phase } from './types';
import { ResourceType } from './types';
import { Lightbulb, Briefcase, Users, Code, Award, CheckCircle, GitFork, BookOpen, Search, MessageSquare, Target } from 'lucide-react';

export const ROADMAP_PHASES: Phase[] = [
  {
    id: 'phase-1',
    title: 'Phase 1: Foundation & Mindset',
    summary: 'Establish a strong base and cultivate a resilient mindset for the journey ahead.',
    Icon: Lightbulb,
    steps: [
      {
        id: 's1-1',
        title: 'Understand Your "Why" & Set Clear Goals',
        description: "Define your motivations for pursuing a software engineering career and set SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals. This clarity will fuel your persistence.",
        resources: [
          { id: 'r1-1-1', title: 'Simon Sinek: Start With Why', url: 'https://www.youtube.com/watch?v=qp0HIF3SfI4', type: ResourceType.VIDEO, description: "TED talk on the power of purpose." },
          { id: 'r1-1-2', title: 'Guide to Setting SMART Goals', url: 'https://www.atlassian.com/blog/productivity/how-to-write-smart-goals', type: ResourceType.ARTICLE, description: "Practical advice on goal setting." },
        ],
        keyFocus: true,
      },
      {
        id: 's1-2',
        title: 'Embrace the Growth Mindset',
        description: "Understand that abilities can be developed through dedication and hard work. View challenges as opportunities for growth, not as setbacks.",
        resources: [
          { id: 'r1-2-1', title: 'Carol Dweck: Mindset - The New Psychology of Success', url: 'https://www.amazon.com/Mindset-New-Psychology-Success-Carol/dp/0345472322', type: ResourceType.BOOK, description: "The seminal book on growth mindset." },
          { id: 'r1-2-2', title: 'Developing a Growth Mindset', url: 'https://hbr.org/2016/01/what-having-a-growth-mindset-actually-means', type: ResourceType.ARTICLE, description: "Harvard Business Review article." },
        ],
      },
      {
        id: 's1-3',
        title: 'CS Fundamentals Refresh',
        description: "Revisit core computer science concepts: Data Structures (Arrays, Linked Lists, Trees, Graphs, Hash Tables) and Algorithms (Sorting, Searching, Recursion, Dynamic Programming). This is crucial for interviews.",
        resources: [
          { id: 'r1-3-1', title: 'freeCodeCamp: Data Structures and Algorithms', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', type: ResourceType.COURSE, description: "Interactive DSA course." },
          { id: 'r1-3-2', title: 'GeeksforGeeks Data Structures', url: 'https://www.geeksforgeeks.org/data-structures/', type: ResourceType.ARTICLE, description: "Comprehensive DSA tutorials." },
          { id: 'r1-3-3', title: 'LeetCode', url: 'https://leetcode.com/', type: ResourceType.TOOL, description: "Platform for practicing coding problems." },
        ],
        keyFocus: true,
      },
      {
        id: 's1-4',
        title: 'Master Version Control (Git & GitHub)',
        description: "Learn Git for version control and GitHub for collaboration and showcasing projects. This is a non-negotiable skill for modern software development.",
        resources: [
          { id: 'r1-4-1', title: 'Git Official Documentation', url: 'https://git-scm.com/doc', type: ResourceType.TOOL, description: "The official Git handbook." },
          { id: 'r1-4-2', title: 'GitHub Learning Lab', url: 'https://lab.github.com/', type: ResourceType.COURSE, description: "Interactive courses by GitHub." },
        ],
      },
    ],
  },
  {
    id: 'phase-2',
    title: 'Phase 2: Skill Deep Dive & Portfolio',
    summary: 'Specialize in your chosen area and build tangible projects to demonstrate your abilities.',
    Icon: Code,
    steps: [
      {
        id: 's2-1',
        title: 'Choose Your Path & Specialize',
        description: "Decide on an area to focus on: Frontend (React, Angular, Vue), Backend (Node.js, Python/Django, Java/Spring), Full-Stack, Mobile (iOS, Android), DevOps, Data Science/ML, or Cybersecurity. You can generalize later, but specialize first.",
        resources: [
          { id: 'r2-1-1', title: 'Developer Roadmaps', url: 'https://roadmap.sh/', type: ResourceType.TOOL, description: "Community-curated roadmaps for various tech paths." },
        ],
      },
      {
        id: 's2-2',
        title: 'Deep Dive into Key Technologies',
        description: "Once you've chosen a path, immerse yourself in the core technologies. For example, for Frontend: HTML, CSS, JavaScript, and a framework like React. For Backend: A language like Node.js/Python/Java, databases (SQL/NoSQL), and API design.",
        resources: [
          { id: 'r2-2-1', title: 'MDN Web Docs (for Frontend)', url: 'https://developer.mozilla.org/en-US/docs/Web', type: ResourceType.ARTICLE, description: "Comprehensive web technology documentation." },
          { id: 'r2-2-2', title: 'Official React Docs', url: 'https://react.dev/', type: ResourceType.COURSE, description: "The best place to learn React." },
        ],
        keyFocus: true,
      },
      {
        id: 's2-3',
        title: 'Build 2-3 Impactful Portfolio Projects',
        description: "Create projects that solve real-world (even if small) problems or showcase complex skills. Quality over quantity. Document them well on GitHub.",
        resources: [
          { id: 'r2-3-1', title: 'GitHub', url: 'https://github.com', type: ResourceType.TOOL, description: "Host your project code here." },
          { id: 'r2-3-2', title: '100 Projects Ideas', url: 'https://github.com/florinpop17/app-ideas', type: ResourceType.PROJECT_IDEA, description: "A list of project ideas." },
        ],
        keyFocus: true,
      },
      {
        id: 's2-4',
        title: 'Write Clean, Maintainable Code',
        description: "Learn about coding standards, design patterns, and best practices for writing readable, scalable, and maintainable code. Read 'Clean Code' by Robert C. Martin.",
        resources: [
          { id: 'r2-4-1', title: 'Clean Code by Robert C. Martin', url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882', type: ResourceType.BOOK, description: "A classic on software craftsmanship." },
        ],
      },
    ],
  },
  {
    id: 'phase-3',
    title: 'Phase 3: Job Search Toolkit',
    Icon: Briefcase,
    summary: 'Prepare all necessary materials to present yourself professionally to potential employers.',
    steps: [
      {
        id: 's3-1',
        title: 'Craft a Killer Resume & Cover Letter',
        description: 'Your resume is your marketing document. Tailor it to each job application. Write compelling cover letters that highlight your fit for the specific role and company.',
        resources: [
          { id: 'r3-1-1', title: 'The Tech Resume Inside Out', url: 'https://www.thetechresume.com/', type: ResourceType.BOOK, description: 'Book on crafting tech resumes.'},
          { id: 'r3-1-2', title: 'Harvard Resume Guide', url: 'https://hwpi.harvard.edu/files/ocs/files/hes-resume-cover-letter-guide.pdf', type: ResourceType.ARTICLE, description: 'Comprehensive guide (PDF).'}
        ],
        keyFocus: true,
      },
      {
        id: 's3-2',
        title: 'Optimize Your LinkedIn Profile',
        description: 'LinkedIn is a key platform for job seekers. Ensure your profile is complete, professional, and showcases your skills and projects. Use a professional photo.',
        resources: [
          { id: 'r3-2-1', title: 'LinkedIn Profile Checklist', url: 'https://careersidekick.com/linkedin-profile-checklist/', type: ResourceType.ARTICLE, description: 'Tips to improve your LinkedIn profile.'}
        ]
      },
      {
        id: 's3-3',
        title: 'Build a Personal Portfolio Website',
        description: 'A personal website is a great way to showcase your projects, skills, and personality. Link it from your resume and LinkedIn.',
        resources: [
          { id: 'r3-3-1', title: 'GitHub Pages', url: 'https://pages.github.com/', type: ResourceType.TOOL, description: 'Host your portfolio for free.'},
          { id: 'r3-3-2', title: 'Netlify', url: 'https://www.netlify.com/', type: ResourceType.TOOL, description: 'Another great hosting platform for static sites.'}
        ]
      },
      {
        id: 's3-4',
        title: 'Prepare Your Elevator Pitch',
        description: 'Craft a concise (30-60 second) summary of who you are, what you do, and what you’re looking for. Practice it until it sounds natural.',
        resources: [
          { id: 'r3-4-1', title: 'How to Craft an Elevator Pitch', url: 'https://www.indeed.com/career-advice/interviewing/how-to-give-an-elevator-pitch-examples', type: ResourceType.ARTICLE, description: 'Guide by Indeed.'}
        ]
      }
    ]
  },
  {
    id: 'phase-4',
    title: 'Phase 4: Networking & Market Presence',
    Icon: Users,
    summary: 'Connect with people in the industry and make your presence known.',
    steps: [
      {
        id: 's4-1',
        title: 'Effective Networking Strategies',
        description: 'Networking is about building genuine relationships. Attend virtual or local meetups, conferences, and engage in online communities. Don’t just ask for jobs; offer value.',
        resources: [
          { id: 'r4-1-1', title: 'Meetup.com', url: 'https://www.meetup.com/', type: ResourceType.TOOL, description: 'Find local tech meetups.'},
          { id: 'r4-1-2', title: 'Dev.to', url: 'https://dev.to/', type: ResourceType.COMMUNITY, description: 'Online community for developers.'}
        ],
        keyFocus: true,
      },
      {
        id: 's4-2',
        title: 'Contribute to Open Source / Engage in Communities',
        description: 'Contributing to open source or actively participating in tech communities (e.g., Stack Overflow, Dev.to, specific Discord servers) can help you learn, network, and gain visibility.',
        resources: [
          { id: 'r4-2-1', title: 'Good First Issues', url: 'https://goodfirstissue.dev/', type: ResourceType.TOOL, description: 'Find beginner-friendly open source issues.'},
          { id: 'r4-2-2', title: 'GitHub Explore', url: 'https://github.com/explore', type: ResourceType.TOOL, description: 'Discover trending repositories and topics.'}
        ]
      },
      {
        id: 's4-3',
        title: 'Practice Informational Interviews',
        description: 'Reach out to people working in roles or companies you’re interested in and ask for a brief informational interview. This is for learning and advice, not directly asking for a job.',
        resources: [
          { id: 'r4-3-1', title: 'Guide to Informational Interviews', url: 'https://www.themuse.com/advice/the-informational-interview-everything-you-need-to-know', type: ResourceType.ARTICLE, description: 'From The Muse.'}
        ]
      },
      {
        id: 's4-4',
        title: 'Research Target Companies',
        description: 'Identify companies you’d love to work for. Research their mission, culture, products, and tech stack. This helps in tailoring applications and in interviews.',
        resources: [
          { id: 'r4-4-1', title: 'Glassdoor Company Reviews', url: 'https://www.glassdoor.com/Reviews/index.htm', type: ResourceType.TOOL, description: 'Company reviews and salary data.'}
        ]
      }
    ]
  },
  {
    id: 'phase-5',
    title: 'Phase 5: Interview Mastery',
    Icon: Search,
    summary: 'Ace your interviews by preparing thoroughly for both technical and behavioral questions.',
    steps: [
      {
        id: 's5-1',
        title: 'Behavioral Interview Prep (STAR Method)',
        description: 'Prepare stories for common behavioral questions using the STAR method (Situation, Task, Action, Result). Focus on teamwork, problem-solving, and handling challenges.',
        resources: [
          { id: 'r5-1-1', title: 'STAR Method Explained', url: 'https://www.thebalancecareers.com/what-is-the-star-interview-response-technique-2061629', type: ResourceType.ARTICLE, description: 'Detailed explanation with examples.'}
        ],
        keyFocus: true,
      },
      {
        id: 's5-2',
        title: 'Technical Interview Prep',
        description: 'Practice coding problems (LeetCode, HackerRank). Understand time/space complexity. For frontend, review JS concepts, CSS, framework specifics. For backend, API design, database interactions, system design basics.',
        resources: [
          { id: 'r5-2-1', title: 'Cracking the Coding Interview', url: 'https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850', type: ResourceType.BOOK, description: 'Popular book for tech interview prep.'},
          { id: 'r5-2-2', title: 'Frontend Interview Handbook', url: 'https://www.frontendinterviewhandbook.com/', type: ResourceType.GITHUB, description: 'Free resources for frontend interviews.'}
        ]
      },
      {
        id: 's5-3',
        title: 'Conduct Mock Interviews',
        description: 'Practice with peers, mentors, or use platforms like Pramp. This helps reduce anxiety and identify areas for improvement.',
        resources: [
          { id: 'r5-3-1', title: 'Pramp', url: 'https://www.pramp.com/', type: ResourceType.TOOL, description: 'Practice live mock interviews for free.'}
        ]
      },
      {
        id: 's5-4',
        title: 'Learn to Ask Good Questions',
        description: 'At the end of an interview, asking thoughtful questions shows your engagement and interest. Prepare questions about the team, projects, culture, and growth opportunities.',
        resources: [
          { id: 'r5-4-1', title: 'Questions to Ask Interviewers', url: 'https://www.themuse.com/advice/questions-to-ask-an-interviewer', type: ResourceType.ARTICLE, description: 'List of insightful questions.'}
        ]
      }
    ]
  },
  {
    id: 'phase-6',
    title: 'Phase 6: Offer & Beyond',
    Icon: Award,
    summary: 'Navigate job offers, handle outcomes, and commit to continuous growth.',
    steps: [
      {
        id: 's6-1',
        title: 'Evaluating Job Offers & Negotiation',
        description: 'When you receive an offer, evaluate it holistically (salary, benefits, culture, growth). Don’t be afraid to negotiate respectfully. Research salary benchmarks.',
        resources: [
          { id: 'r6-1-1', title: 'Levels.fyi', url: 'https://www.levels.fyi/', type: ResourceType.TOOL, description: 'Salary comparison and negotiation tools.'},
          { id: 'r6-1-2', title: 'Book: Never Split the Difference', url: 'https://www.amazon.com/Never-Split-Difference-Negotiating-Depended/dp/0062407805', type: ResourceType.BOOK, description: 'Negotiation tactics.'}
        ],
        keyFocus: true,
      },
      {
        id: 's6-2',
        title: 'Handling Rejection Gracefully & Persisting',
        description: 'Rejection is part of the process. Don’t take it personally. Ask for feedback if possible, learn from it, and keep moving forward. Resilience is key.',
        resources: [
          { id: 'r6-2-1', title: 'How to Handle Job Rejection', url: 'https://www.mindtools.com/pages/article/job-rejection.htm', type: ResourceType.ARTICLE, description: 'Tips for coping with rejection.'}
        ]
      },
      {
        id: 's6-3',
        title: 'Continuous Learning & Staying Current',
        description: 'The tech world evolves rapidly. Commit to lifelong learning. Follow blogs, attend webinars, take courses, and explore new technologies.',
        resources: [
          { id: 'r6-3-1', title: 'Hacker News', url: 'https://news.ycombinator.com/', type: ResourceType.COMMUNITY, description: 'Tech news and discussions.'},
          { id: 'r6-3-2', title: 'TechCrunch', url: 'https://techcrunch.com/', type: ResourceType.ARTICLE, description: 'Latest technology news.'}
        ]
      },
      {
        id: 's6-4',
        title: 'First 90 Days on the Job',
        description: 'Once you land a job, focus on learning, integrating with the team, understanding expectations, and delivering value. Ask questions and seek feedback.',
        resources: [
          { id: 'r6-4-1', title: 'The First 90 Days by Michael D. Watkins', url: 'https://www.amazon.com/First-90-Days-Strategies-Expanded/dp/1422188612', type: ResourceType.BOOK, description: 'Strategies for success in a new role.'}
        ]
      }
    ]
  }
];
