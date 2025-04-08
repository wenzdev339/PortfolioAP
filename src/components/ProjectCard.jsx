// components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  const { number, title, description, image, tags, delay, reversed, youtubeLink } = project;
  
  return (
    <div className={`project-card ${reversed ? 'reversed' : ''}`}>
      <div className="project-image animate-in" style={{ animationDelay: delay }}>
        {youtubeLink ? (
          <a href={youtubeLink} className="youtube-link" target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} />
            <div className="youtube-overlay">
              <svg className="youtube-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5401 6.42C22.4213 5.94541 22.1796 5.51057 21.8387 5.15941C21.4978 4.80824 21.0708 4.55318 20.6001 4.42C18.8801 4 12.0001 4 12.0001 4C12.0001 4 5.12008 4 3.40008 4.46C2.92933 4.59318 2.50233 4.84824 2.16143 5.19941C1.82053 5.55057 1.57878 5.98541 1.46008 6.46C1.14551 8.20556 0.991248 9.97631 1.00008 11.75C0.988741 13.537 1.14277 15.3213 1.46008 17.08C1.59076 17.5398 1.83827 17.9581 2.17815 18.2945C2.51803 18.6308 2.93878 18.8738 3.40008 19C5.12008 19.46 12.0001 19.46 12.0001 19.46C12.0001 19.46 18.8801 19.46 20.6001 19C21.0708 18.8668 21.4978 18.6118 21.8387 18.2606C22.1796 17.9094 22.4213 17.4746 22.5401 17C22.8494 15.2676 23.0024 13.5103 23.0001 11.75C23.0114 9.96295 22.8574 8.1787 22.5401 6.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Watch on YouTube</span>
            </div>
          </a>
        ) : (
          <img src={image} alt={title} />
        )}
      </div>
      
      <div className="project-details">
        <span className="project-number animate-in" style={{ animationDelay: delay }}>
          {number}
        </span>
        <h3 className="project-title animate-in" style={{ animationDelay: delay }}>
          {title}
        </h3>
        <p className="project-description animate-in" style={{ animationDelay: delay }}>
          {description}
        </p>
        
        <div className="project-tags animate-in" style={{ animationDelay: delay }}>
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;