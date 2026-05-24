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
              
              <div className="education-documents">
                <h4>Documents</h4>
                <div className="documents-list">
                  <a
                    href="/Doc/Anatcha_NU_BEngineer_CertificateOfGraduation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    Certificate of Graduation
                  </a>
                  <a
                    href="/Doc/Anatcha_NU_BEngineer_Transcript.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    Academic Transcript
                  </a>
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