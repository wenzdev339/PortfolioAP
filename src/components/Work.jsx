// components/Work.jsx
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/work.scss';

// Import images
import Pro1 from '../assets/Project/Pro1_NSC.jpg';
import Pro2 from '../assets/Project/Pro2_Doc.png';
import Pro3 from '../assets/Project/Pro3_Survey.png';
import Pro4 from '../assets/Project/Pro4.png';
import Pro5 from '../assets/Project/Pro5.jpg';
import Pro6 from '../assets/Project/Pro6.png';
import Pro7 from '../assets/Project/Pro7.jpg';
import Pro8 from '../assets/Project/Pro8.jpg';
import Pro9 from '../assets/Project/Pro9.jpg';
import Pro10 from '../assets/Project/Pro10.jpg';
import Pro11 from '../assets/Project/Pro11.jpg';
import Pro12 from '../assets/Project/Pro12.jpg';
import Pro13 from '../assets/Project/Pro13.jpg';
import Pro14 from '../assets/Project/Pro14.jpg';
import Pro15 from '../assets/Project/Pro15.jpg';
import Pro16 from '../assets/Project/Pro16.png';
import Pro17 from '../assets/Project/Pro17.png';
import Pro18 from '../assets/Project/Pro18.png';
import Pro20 from '../assets/Project/Pro20.png';
import Pro21 from '../assets/Project/Pro21.png';
import Pro22 from '../assets/Project/Pro22.png';

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'game', label: 'Game Dev' },
  { key: 'dev', label: 'Development' },
  { key: 'data', label: 'Data Analysis' },
  { key: 'event', label: 'Events & Pitch' },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 21,
      number: '01',
      title: 'Brazilian E-Commerce Sales Analysis',
      description: 'End-to-end SQL analysis of 100K+ orders covering revenue trends, customer segmentation, delivery performance, and review insights.',
      image: Pro21,
      tags: ['SQL', 'PostgreSQL', 'Data Analysis'],
      category: 'data',
    },
    {
      id: 22,
      number: '02',
      title: 'Hotel Booking Performance Analysis',
      description: 'Analyzed 119K+ hotel bookings to uncover cancellation drivers, pricing seasonality, and revenue impact using PostgreSQL & Power BI.',
      image: Pro22,
      tags: ['SQL', 'PostgreSQL', 'Data Analysis', 'Power BI'],
      category: 'data',
    },
    {
      id: 1,
      number: '03',
      title: 'Aliment Puzzle Game NSC 2020',
      description: 'Science & math puzzle game that reached the final round of the Entertainment Program in NSC 2020.',
      image: Pro1,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design', 'Pitch'],
      category: 'game',
    },
    {
      id: 2,
      number: '04',
      title: 'Doc Guide',
      description: 'Desktop medical consultation app built with Python/Tkinter. Covers symptoms, COVID-19 stats, emergency contacts, and a built-in chatbot.',
      image: Pro2,
      tags: ['Team leader', 'Python', 'Tkinter Framework', 'UI/UX Design'],
      category: 'dev',
      youtubeLink: 'https://www.youtube.com/watch?v=rXCWabBDZfo',
    },
    {
      id: 3,
      number: '05',
      title: 'Survey Share Internship',
      description: 'Frontend built with Flutter/Dart during internship at X-TenTech. Integrated Google Drive API & OAuth for secure file sharing.',
      image: Pro3,
      tags: ['Frontend', 'Flutter', 'Dart', 'Google Console API', 'Internship'],
      category: 'dev',
    },
    {
      id: 4,
      number: '06',
      title: 'API Tester Tool with ML Hackathon',
      description: 'Full-stack tool that tests APIs and uses ML models to analyze logs & generate performance reports.',
      image: Pro4,
      tags: ['Team leader', 'React', 'Js', 'Python', 'TensorFlow', 'AI Engineer', 'Pitch'],
      category: 'dev',
    },
    {
      id: 5,
      number: '07',
      title: 'Huawei Cloud Accelerator',
      description: 'Integrated Huawei Cloud services (storage, compute, deployment) to enhance scalability and performance.',
      image: Pro5,
      tags: ['Huawei Cloud', 'Pitch'],
      category: 'event',
    },
    {
      id: 6,
      number: '08',
      title: 'Startup Thailand League 2023',
      description: 'Game project "Overlap" selected for Startup Thailand League, advanced to Demo Day at True Digital Park.',
      image: Pro6,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design', 'Pitch'],
      category: 'event',
    },
    {
      id: 7,
      number: '09',
      title: 'ELP Pitch Program',
      description: 'Selected as 1 of 35 participants for international exchange at NTUST, Taiwan. Pitched a tech startup concept and represented the university in the ELP entrepreneurship program.',
      image: Pro7,
      tags: ['ELP', 'Pitch', 'Startup', 'Tech Entrepreneurship', 'International Exchange'],
      category: 'event',
    },
    {
      id: 8,
      number: '10',
      title: 'Global Talent Entrepreneurship Program',
      description: 'Participated in startup business development and investment strategy training at NTUST, Taiwan. Pitched a tech startup product to international judges and investors.',
      image: Pro8,
      tags: ['Team leader', 'Startup', 'Tech Entrepreneurship', 'Business Strategy', 'Pitch', 'International'],
      category: 'event',
    },
    {
      id: 9,
      number: '11',
      title: 'Project Lunar NSC 2024',
      description: 'NSC 2024 Entertainment Program entry highlighting Thai culture, cuisine, and Muay Thai boxing.',
      image: Pro9,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design', 'Pitch'],
      category: 'game',
    },
    {
      id: 10,
      number: '12',
      title: 'P1 Project Lunar',
      description: 'Pitched Luna Game Project with marketing strategy and startup viability assessment.',
      image: Pro10,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design', 'Pitch'],
      category: 'event',
    },
    {
      id: 11,
      number: '13',
      title: 'IDEA Pitch Day 1',
      description: 'Presented Luna Game Project with business plan at IDEA Pitch Day.',
      image: Pro11,
      tags: ['Team leader', 'Pitch'],
      category: 'event',
    },
    {
      id: 12,
      number: '14',
      title: 'IDEA Pitch Day 2',
      description: 'Presented an AI-powered pet health & behavior app integrated with a smart collar.',
      image: Pro12,
      tags: ['Team leader', 'Pitch'],
      category: 'event',
    },
    {
      id: 13,
      number: '15',
      title: 'Startup Training Business Strategies',
      description: 'Training on BMC, RoadMap, and Lean BMC for building scalable startup business models.',
      image: Pro13,
      tags: ['Team leader', 'Pitch'],
      category: 'event',
    },
    {
      id: 14,
      number: '16',
      title: 'Guest Speaker Startup Knowledge Sharing',
      description: 'Invited speaker sharing startup principles, project experience, and strategic guidance to students.',
      image: Pro14,
      tags: ['Guest Speaker', 'Pitch'],
      category: 'event',
    },
    {
      id: 15,
      number: '17',
      title: 'Luna Game Project',
      description: 'Turn-based strategy game set in Thailand 2077, blending Muay Thai, Thai cuisine, and cultural heritage.',
      image: Pro15,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design'],
      category: 'game',
    },
    {
      id: 16,
      number: '18',
      title: 'ClipBoardPro Clipboard Manager',
      description: 'Desktop clipboard manager tracking copy history for effortless access to previous clips.',
      image: Pro16,
      tags: ['Team leader', 'React', 'Electron Framework', 'UI/UX Design', 'Js', 'Dev Ops'],
      category: 'dev',
    },
    {
      id: 17,
      number: '19',
      title: 'Phantom Drive Thailand Horror Jam 2025',
      description: 'Horror delivery-driving game created for Thailand Horror Jam 2025. Drive haunted roads from pickup to drop-off.',
      image: Pro17,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design'],
      category: 'game',
    },
    {
      id: 18,
      number: '20',
      title: '1 Ronin vs 1,000 Samurai 20 Second Jam 2025',
      description: 'Defeat 1,000 samurai in 20 seconds. Created for 20 Second Game Jam 2025.',
      image: Pro18,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design', 'Pixel Art'],
      category: 'game',
    },
    {
      id: 20,
      number: '21',
      title: 'Boba Tanuki 20 Second Jam 2025',
      description: 'Casual game with Classic (60s endless) and 20sec high-score modes. Created for 20sec Game Jam 2025.',
      image: Pro20,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design'],
      category: 'game',
    },
  ];

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="work">
      <div className="work-container">
        <h2 className="animate-in" style={{ animationDelay: '0.2s' }}>My Project</h2>

        <div className="category-tabs animate-in" style={{ animationDelay: '0.3s' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              className={`category-tab${activeCategory === cat.key ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
