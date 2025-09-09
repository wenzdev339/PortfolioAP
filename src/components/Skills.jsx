// components/Skills.jsx
import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Programming Languages' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'tools', name: 'Tools & Software' },
    { id: 'management', name: 'Management' },
    { id: 'languages-spoken', name: 'Languages' }
  ];
  
  const skillsData = [
    // Programming Languages
    { 
      id: 1, 
      name: 'C#', 
      category: 'languages', 
      level: 5, // 5 = Expert, 4 = Advanced, 3 = Intermediate, 2 = Beginner, 1 = Novice
      description: 'Expert in C# programming for game development, desktop applications, and backend services.'
    },
    { 
      id: 2, 
      name: 'Python', 
      category: 'languages', 
      level: 5,
      description: 'Expert Python developer with extensive experience in web development, data processing, and automation.'
    },
    { 
      id: 3, 
      name: 'Dart', 
      category: 'languages', 
      level: 5,
      description: 'Expert in Dart programming language, primarily for Flutter mobile and web application development.'
    },
    { 
      id: 4, 
      name: 'Java', 
      category: 'languages', 
      level: 5,
      description: 'Expert in Java development, particularly for Android applications with extensive experience in app architecture and UI implementation.'
    },
    { 
      id: 5, 
      name: 'C++', 
      category: 'languages', 
      level: 3,
      description: 'Intermediate knowledge of C++ for game development and system programming.'
    },
    { 
      id: 6, 
      name: 'Go', 
      category: 'languages', 
      level: 3,
      description: 'Intermediate experience with Go programming language for building fast and efficient backend services.'
    },
    { 
      id: 7, 
      name: 'SQL', 
      category: 'languages', 
      level: 4,
      description: 'Advanced knowledge of SQL for database management, complex queries, and data analysis.'
    },
    { 
      id: 8, 
      name: 'PHP', 
      category: 'languages', 
      level: 3,
      description: 'Intermediate skills in PHP for web development and server-side programming.'
    },
    
    // Frameworks and Libraries
    { 
      id: 9, 
      name: 'Flutter', 
      category: 'frameworks', 
      level: 5,
      description: 'Expert in Flutter framework for building cross-platform mobile applications with beautiful UI and seamless performance.'
    },
    { 
      id: 10, 
      name: 'C# UI Frameworks', 
      category: 'frameworks', 
      level: 5,
      description: 'Expert in C# UI frameworks including WPF, UWP, and Windows Forms for desktop application development.'
    },
    { 
      id: 11, 
      name: 'Django', 
      category: 'frameworks', 
      level: 4,
      description: 'Advanced proficiency with Django framework for building robust and scalable web applications.'
    },
    { 
      id: 12, 
      name: 'React.js', 
      category: 'frameworks', 
      level: 3,
      description: 'Intermediate experience with React.js for building modern, interactive front-end web applications.'
    },
    { 
      id: 13, 
      name: 'Next.js', 
      category: 'frameworks', 
      level: 3,
      description: 'Intermediate skills with Next.js for server-side rendering and static site generation for React applications.'
    },
    { 
      id: 14, 
      name: 'TensorFlow', 
      category: 'frameworks', 
      level: 3,
      description: 'Intermediate understanding of TensorFlow for machine learning model development and implementation.'
    },
    { 
      id: 15, 
      name: 'PostgreSQL', 
      category: 'frameworks', 
      level: 4,
      description: 'Advanced skills in PostgreSQL for database design, optimization, and administration.'
    },
    { 
      id: 16, 
      name: 'MongoDB', 
      category: 'frameworks', 
      level: 4,
      description: 'Advanced skills in MongoDB NoSQL database for document-based data storage and retrieval.'
    },
    { 
      id: 17, 
      name: 'Oracle', 
      category: 'frameworks', 
      level: 3,
      description: 'Intermediate experience with Oracle database management, PL/SQL, and enterprise database solutions.'
    },
    { 
      id: 18, 
      name: 'PySpark', 
      category: 'frameworks', 
      level: 4,
      description: 'Advanced proficiency in PySpark for big data processing, distributed computing, and data transformation.'
    },
    { 
      id: 19, 
      name: 'Electron', 
      category: 'frameworks', 
      level: 5,
      description: 'Expert in Electron framework for building cross-platform desktop applications using web technologies.'
    },
    
    // Development skills
    { 
      id: 20, 
      name: 'Unity Engine', 
      category: 'development', 
      level: 5,
      description: 'Expert in Unity game development with extensive experience in building complete game projects and advanced gameplay features.'
    },
    { 
      id: 21, 
      name: 'Unreal Engine', 
      category: 'development', 
      level: 5,
      description: 'Proficient in Unreal Engine development, including Blueprint visual scripting and C++ implementation for high-quality game projects.'
    },
    { 
      id: 22, 
      name: 'Frontend Development', 
      category: 'development', 
      level: 4,
      description: 'Advanced skills in HTML, CSS, JavaScript, and modern frameworks for creating responsive and interactive web applications.'
    },
    { 
      id: 23, 
      name: 'Backend Development', 
      category: 'development', 
      level: 4,
      description: 'Experienced in building robust server-side applications, APIs, and database integrations.'
    },
    { 
      id: 24, 
      name: 'Mobile Development', 
      category: 'development', 
      level: 5,
      description: 'Expert in cross-platform and native mobile application development using Flutter, Dart, and Java.'
    },
    { 
      id: 25, 
      name: 'Go Fiber', 
      category: 'development', 
      level: 3,
      description: 'Intermediate experience with Go Fiber web framework for building fast and scalable REST APIs and web applications in Go.'
    },
    { 
      id: 26, 
      name: 'Business Intelligence (BI)', 
      category: 'development', 
      level: 5,
      description: 'Expert in business intelligence solutions, data warehouse design, ETL/ELT processes, and strategic data analytics.'
    },
    { 
      id: 27, 
      name: 'Business Analysis (BA)', 
      category: 'development', 
      level: 4,
      description: 'Advanced skills in business analysis, requirements gathering, process improvement, and stakeholder management.'
    },
    { 
      id: 28, 
      name: 'Data Analytics (DA)', 
      category: 'development', 
      level: 4,
      description: 'Advanced proficiency in data analytics, statistical analysis, data visualization, and insight generation from complex datasets.'
    },
    
    // Design skills
    { 
      id: 29, 
      name: 'Figma', 
      category: 'design', 
      level: 5,
      description: 'Expert in using Figma for UI/UX design, wireframing, prototyping, and collaborative design workflows.'
    },
    { 
      id: 30, 
      name: 'Adobe Creative Suite', 
      category: 'design', 
      level: 5,
      description: 'Advanced proficiency in Adobe Photoshop, Illustrator, XD, and other Creative Suite applications for digital design and asset creation.'
    },
    { 
      id: 31, 
      name: 'UI/UX Design', 
      category: 'design', 
      level: 4,
      description: 'Strong understanding of user-centered design principles with the ability to create intuitive, accessible, and visually appealing interfaces.'
    },
    { 
      id: 32, 
      name: 'Game Design', 
      category: 'design', 
      level: 5,
      description: 'Expert knowledge of game design principles, mechanics, and player experience optimization.'
    },
    
    // Tools & Software skills
    { 
      id: 33, 
      name: 'Power BI & Tableau', 
      category: 'tools', 
      level: 5,
      description: 'Expert in data visualization, data warehouse design, ETL/ELT processes, creating interactive dashboards and comprehensive business intelligence solutions using Power BI and Tableau.'
    },
    { 
      id: 34, 
      name: 'Git, GitHub, GitLab, BitBucket', 
      category: 'tools', 
      level: 5,
      description: 'Expert with version control systems and collaborative development platforms including Git, GitHub, GitLab, and BitBucket.'
    },
    { 
      id: 35, 
      name: 'Docker', 
      category: 'tools', 
      level: 4,
      description: 'Advanced skills in containerization with Docker for application deployment, environment management, and DevOps workflows.'
    },
    { 
      id: 36, 
      name: 'Kubernetes (K8s)', 
      category: 'tools', 
      level: 3,
      description: 'Intermediate experience with Kubernetes for container orchestration, scaling, and managing distributed applications.'
    },
    { 
      id: 37, 
      name: 'AWS', 
      category: 'tools', 
      level: 3,
      description: 'Intermediate proficiency with Amazon Web Services cloud platform for scalable infrastructure and application deployment.'
    },
    { 
      id: 38, 
      name: 'Google Cloud Platform', 
      category: 'tools', 
      level: 4,
      description: 'Advanced experience with Google Cloud services for cloud computing, data analytics, and application hosting.'
    },
    { 
      id: 39, 
      name: 'Firebase', 
      category: 'tools', 
      level: 5,
      description: 'Expert in Firebase platform for mobile and web application backend services, real-time databases, and authentication.'
    },
    { 
      id: 40, 
      name: 'Microsoft Azure', 
      category: 'tools', 
      level: 3,
      description: 'Intermediate skills with Microsoft Azure cloud services for enterprise applications and data solutions.'
    },
    { 
      id: 41, 
      name: 'Nginx & Gunicorn', 
      category: 'tools', 
      level: 3,
      description: 'Intermediate experience with web server configuration using Nginx and WSGI server deployment with Gunicorn.'
    },
    { 
      id: 42, 
      name: 'Notion', 
      category: 'tools', 
      level: 5,
      description: 'Advanced usage of Notion for documentation, knowledge bases, project planning, and team collaboration.'
    },
    { 
      id: 43, 
      name: 'Jira', 
      category: 'tools', 
      level: 5,
      description: 'Expert in Jira for agile project management, issue tracking, sprint planning, and team workflow optimization.'
    },
    { 
      id: 44, 
      name: 'VS Code', 
      category: 'tools', 
      level: 4,
      description: 'Proficient with VS Code and its extensions for efficient code development across multiple languages and frameworks.'
    },
    
    // Management skills
    { 
      id: 47, 
      name: 'Project Management', 
      category: 'management', 
      level: 4,
      description: 'Experienced in leading development teams, setting milestones, and delivering projects on schedule.'
    },
    { 
      id: 48, 
      name: 'Agile & Scrum', 
      category: 'management', 
      level: 5,
      description: 'Expert in Agile and Scrum methodologies, sprint planning, daily standups, retrospectives, and iterative development approaches.'
    },
    { 
      id: 49, 
      name: 'Team Leadership', 
      category: 'management', 
      level: 4,
      description: 'Skilled in team coordination, task delegation, and fostering collaborative environments for optimal productivity.'
    },
    
    // Languages (spoken)
    { 
      id: 50, 
      name: 'English', 
      category: 'languages-spoken', 
      level: 3,
      description: 'Advanced business English skills for communication, technical documentation, and international collaboration.'
    },
    { 
      id: 51, 
      name: 'Thai', 
      category: 'languages-spoken', 
      level: 5,
      description: 'Native proficiency in Thai language for all contexts including professional and technical communication.'
    }
  ];
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);
  
  // Function to render skill level
  const renderSkillLevel = (level) => {
    const levels = [
      { value: 1, label: 'Novice' },
      { value: 2, label: 'Beginner' },
      { value: 3, label: 'Intermediate' },
      { value: 4, label: 'Advanced' },
      { value: 5, label: 'Expert' }
    ];
    
    const currentLevel = levels.find(l => l.value === level);
    
    return (
      <div className="skill-level">
        <div className="level-indicators">
          {levels.map((l, index) => (
            <div 
              key={index} 
              className={`level-dot ${index < level ? 'active' : ''}`}
              title={l.label}
            ></div>
          ))}
        </div>
        <span className="level-text">{currentLevel.label}</span>
      </div>
    );
  };
  
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="animate-in" style={{ animationDelay: '0.2s' }}>My Skills</h2>
        
        <div className="skills-filter animate-in" style={{ animationDelay: '0.3s' }}>
          {skillCategories.map(category => (
            <button 
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.id} 
              className="skill-card animate-in"
              style={{ animationDelay: `${0.4 + (index % 6) * 0.1}s` }}
            >
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                {renderSkillLevel(skill.level)}
              </div>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;