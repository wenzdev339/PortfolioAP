// components/Experience.jsx
import React from 'react';
import '../styles/experience.scss';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'BPM / Business Intelligence Developer',
      company: 'CP-MEIJI',
      location: 'Saraburi, Thailand',
      period: 'May 2026 - Present',
      type: 'Full-time',
      description: 'Developing and maintaining Business Process Management and Business Intelligence solutions to support data-driven decision making.',
      tags: ['BPM', 'Business Intelligence', 'Data Analysis'],
    },
    {
      id: 2,
      role: 'Intern Frontend Developer (Flutter)',
      company: 'XTEN-Technology',
      location: 'Bangkok, Thailand',
      period: 'Apr 2024 - Jun 2024',
      type: 'Internship',
      description: 'Developed frontend mobile features using Flutter/Dart. Integrated Google Drive API and OAuth for secure file-sharing functionality within the Survey Share application.',
      tags: ['Flutter', 'Dart', 'Google Drive API', 'OAuth'],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="animate-in" style={{ animationDelay: '0.2s' }}>Experience</h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="experience-card animate-in"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="experience-header">
                <div className="role-info">
                  <h3>{exp.role}</h3>
                  <div className="company">{exp.company}</div>
                  <div className="location">{exp.location}</div>
                </div>
                <div className="experience-meta">
                  <div className="period">{exp.period}</div>
                  <div className="type-badge">{exp.type}</div>
                </div>
              </div>

              <p className="experience-description">{exp.description}</p>

              <div className="experience-tags">
                {exp.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
