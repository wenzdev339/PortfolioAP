// components/Work.jsx
import React from 'react';
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
import Pro19 from '../assets/Project/Pro19.png';
import Pro20 from '../assets/Project/Pro20.png';

const Work = () => {
  const projects = [
    {
      id: 1,
      number: '01',
      title: 'Aliment Puzzle Game NSC 2020',
      description: 'I was the programmer and team leader of a science and mathematics puzzle game project, which reached the final round of the Entertainment Program category in NSC 2020.',
      image: Pro1,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design', 'Pitch'],
      delay: '0.3s'
    },
    {
      id: 2,
      number: '02',
      title: 'Doc Guide',
      description: 'Doc Guide is a desktop application developed using Python and the Tkinter UI framework. It serves as a medical consultation tool that compiles information on various symptoms and illnesses, provides up-to-date COVID-19 statistics, and lists emergency contact numbers. The app also features a built-in chatbot for basic medical advice and support.',
      image: Pro2,
      tags: ['Team leader', 'Python', 'Tkinter Framework', 'UI/UX Design'],
      delay: '0.6s',
      reversed: true,
      youtubeLink: 'https://www.youtube.com/watch?v=rXCWabBDZfo'
    },
    {
      id: 3,
      number: '03',
      title: 'Survey Share - Intern',
      description: 'During my internship at X-TenTech, I worked as a Frontend Developer on an application called "Survey Share." The app was designed to help contractors share project-related data with the development team. I was responsible for building the frontend using Flutter and Dart, and integrating Google Drive API and OAuth for secure file sharing and authentication.',
      image: Pro3,
      tags: ['Frontend', 'Flutter', 'Dart', 'Google Console API', 'Internship'],
      delay: '0.9s'
    },
    {
      id: 4,
      number: '04',
      title: 'API Tester Tool With Machine learning - Hackathon',
      description: 'As the Frontend Developer and Team Leader, I led the development of an application designed to test APIs by sending requests to servers and collecting response data. The tool aggregates logs and system resources, which are then analyzed using machine learning models within a data center. The system generates reports and insights, providing users with valuable feedback on API performance and potential issues.',
      image: Pro4,
      tags: ['Team leader', 'React Framework', 'Js', 'UI/UX Design', 'Frontend', 'AI Engineer', 'Python', 'Numpy', 'TensorFlow', 'Pitch'],
      delay: '0.6s',
      reversed: true,
    },
    {
      id: 5,
      number: '05',
      title: 'Huawei Cloud Accelerator',
      description: 'Integrated Huawei Cloud services into our project as part of the Huawei Cloud Accelerator Program, leveraging cloud infrastructure to enhance scalability, performance, and deployment efficiency. This involved setting up cloud storage, computing resources, and deploying backend services on the Huawei Cloud platform.',
      image: Pro5,
      tags: ['Huawei Cloud', 'Pitch'],
      delay: '0.9s'
    },
    {
      id: 6,
      number: '06',
      title: 'Startup Thailand League 2023',
      description: 'Our game project "Overlap" was selected to participate in the Startup Thailand League, where we pitched the idea and successfully advanced to the Demo Day round held at True Digital Park.',
      image: Pro6,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design', 'Pitch'],
      delay: '0.6s',
      reversed: true,
    },
    {
      id: 7,
      number: '07',
      title: 'ELP Pitch Program',
      description: 'ELP Pitch Program – Game Presentation & International Exchange. Presented the game "Spin Knight" in the ELP Pitch Program and was selected as one of 35 participants for an international exchange at NTUST in Taiwan.',
      image: Pro7,
      tags: ['ELP', 'Pitch', 'International Exchange', 'Game Development'],
      delay: '0.9s'
    },
    {
      id: 8,
      number: '08',
      title: 'Global Talent Entrepreneurship Program – Pitching & Startup Training',
      description: 'Pitched the game project "SpinKnight" as part of the Global Talent Entrepreneurship Program and participated in training sessions on startup business development and investment strategies in Taiwan at National Taiwan University of Science and Technology (NTUST).',
      image: Pro8,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design', 'Pitch'],
      delay: '0.6s',
      reversed: true,
    },
    {
      id: 9,
      number: '09',
      title: 'Project Lunar NSC 2024',
      description: 'Participated in the NSC 2024 under the Entertainment Program, presenting the Luna Game Project, which highlights Thai culture, traditional Thai cuisine, and Muay Thai boxing as key themes within the game.',
      image: Pro9,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design', 'Pitch'],
      delay: '0.9s'
    },
    {
      id: 10,
      number: '10',
      title: 'P1 - Project Lunar',
      description: 'Participated in the P1 Project, presenting the Luna Game Project, which showcases Thai culture, traditional Thai cuisine, and Muay Thai boxing. I also pitched marketing strategies and assessed the startup viability of the product, highlighting its potential in the market.',
      image: Pro10,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design', 'Pitch'],
      delay: '0.6s',
      reversed: true,
    },    
    {
      id: 11,
      number: '11',
      title: 'IDEA Pitch Day 1',
      description: 'Participated in the Idea Pitch Day, where I presented the Luna Game Project along with its business plan, showcasing the game concept and its potential for success in the market.',
      image: Pro11,
      tags: ['Team leader','Pitch'],
      delay: '0.9s'
    },
    {
      id: 12,
      number: '12',
      title: 'IDEA Pitch Day 2',
      description: 'Participated in the Idea Pitch Day, where I presented an innovative pet application that analyzes pets health and behavior, integrated with a smart collar that collects data for further analysis. The project aims to provide insights into pets well-being and assist pet owners in better understanding and caring for their animals.',
      image: Pro12,
      tags: ['Team leader', 'Pitch'],
      delay: '0.6s',
      reversed: true,
    },    
    {
      id: 13,
      number: '13',
      title: 'Startup Training – Business Strategies for Success',
      description: 'Attended training on various business strategies essential for building a successful startup, including BMC (Business Model Canvas), RoadMap development, and Lean BMC. These sessions provided valuable insights on structuring business plans, optimizing processes, and creating sustainable business models.',
      image: Pro13,
      tags: ['Team leader','Pitch'],
      delay: '0.9s'
    },
    {
      id: 14,
      number: '14',
      title: 'Guest Speaker – Startup Business Knowledge Sharing',
      description: 'Invited as a guest speaker to share startup business insights, including core principles, project experiences, and strategic approaches. I provided guidance and recommendations to students and participants, helping them navigate the challenges of launching and growing their own startups.',
      image: Pro14,
      tags: ['Guest Speaker','Pitch'],
      delay: '0.6s',
      reversed: true,
    },
    {
      id: 15,
      number: '15',
      title: 'Luna Game Project – A Turn-Based Strategy Game Featuring Thai Culture',
      description: 'The Luna Game Project is a turn-based strategy game set in Thailand 2077, blending traditional Thai culture, Muay Thai boxing, and Thai cuisine into an immersive gameplay experience. Players will strategize and engage in combat while exploring a futuristic version of Thailand, highlighting the nations rich heritage and unique cultural elements.',
      image: Pro15,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design'],
      delay: '0.9s'
    },
    {
      id: 16,
      number: '16',
      title: 'ClipBoardPro - Advanced Clipboard Manager',
      description: 'Transform your productivity with ClipBoardPro, a powerful clipboard manager that tracks your copy history and makes accessing previous clips effortless.\nDownload Free: https://wenzgame.itch.io/clipboard-pro',
      image: Pro16,
      reversed: true,
      tags: ['Team leader', 'React', 'Electron Framework', 'UI/UX Design', 'Js','Dev Ops'],
      delay: '0.9s'
    },
    {
      id: 17,
      number: '17',
      title: 'Phantom Drive - Thailand Horror Jam 2025 ',
      description: 'Phantom Drive is a horror delivery-driving game created for Thailand Horror Jam 2025. Players take on the role of a delivery driver traveling from pickup to drop-off points along eerie, haunted roads.',
      image: Pro17,
      reversed: false,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design'],
      delay: '0.9s'
    },
    {
      id: 18,
      number: '18',
      title: '1 Ronin vs 1,000 Samurai - 20 Second Game Jam 2025',
      description: 'Step into the sandals of a legendary ronin who left the battlefield behind… until the afterlife calls. A mysterious deity offers you a deal: defeat 1,000 samurai in 20 seconds, or your time ends. \n Free to Play: https://wenzgame.itch.io/1-ronin-vs-1000-samurai',
      image: Pro18,
      reversed: true,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design','Pixel Art'],
      delay: '0.9s'
    },
    {
      id: 19,
      number: '19',
      title: 'SpinKnight - Thailand Game Talent Showcase 2025',
      description: 'SpinKnight is a challenging 2.5D platformer game where players control a spinning knight to overcome tricky obstacles, precise jumps, and intense action in a stylized isometric world.',
      image: Pro19,
      reversed: false,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design','Pixel Art'],
      delay: '0.9s'
    },
    {
      id: 20,
      number: '20',
      title: 'Boba Tanuki - 20 Second Game Jam 2025',
      description: 'Boba Tanuki was created for the 20sec Game Jam 2025.The game includes two modes: Classic, a 60-second chill endless mode,and 20sec, where you try to get the highest score within 20 seconds.The game is free to play and available on itch.Play the game for free here : https://wenzgame.itch.io/boba-tanuki',
      image: Pro20,
      reversed: true,
      tags: ['Team leader', 'Unity Engine', 'C#', 'UI/UX Design'],
      delay: '0.9s'
    },
  ];

  return (
    <section id="work" className="work">
      <div className="work-container">
        <h2 className="animate-in" style={{ animationDelay: '0.2s' }}>My Work</h2>
        
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;