// components/Education.jsx
import React from 'react';
import '../styles/education.scss';

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Naresuan University',
      location: 'Phitsanulok, Thailand',
      period: '2021 - 2025',
      gpa: '3.09',
      description: 'Focused on software development, computer systems, and programming fundamentals. Gained hands-on experience through various practical projects in game development, web applications, and system design.',
      courses: [
        'Data Structures and Algorithms',
        'Computer Networks',
        'Database Systems',
        'Software Engineering',
        'Computer Graphics',
        'Game Development',
        'Mobile Application Development'
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="animate-in" style={{ animationDelay: '0.2s' }}>Education</h2>
        
        <div className="education-timeline">
          {educations.map((edu, index) => (
            <div 
              key={edu.id} 
              className="education-card animate-in"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="education-header">
                <div className="degree-info">
                  <h3>{edu.degree}</h3>
                  <div className="institution">{edu.institution}</div>
                  <div className="location">{edu.location}</div>
                </div>
                <div className="education-meta">
                  <div className="period">{edu.period}</div>
                  <div className="gpa">
                    <span>GPA:</span> {edu.gpa}
                  </div>
                </div>
              </div>
              
              <p className="education-description">{edu.description}</p>
              
              <div className="key-courses">
                <div className="courses-grid">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;