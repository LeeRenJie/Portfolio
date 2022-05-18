import React from 'react';
import ProjectList from './ProjectList'
// Add tags: https://dev.to/prvnbist/create-a-tags-input-component-in-reactjs-ki

const Projects = () => {
  const PROJECTS = [
    {
      id: 'p1',
      title: "First Project",
      tech: "PHP, Bootstrap, JavaScript MySQL",
      image: "/images/Splash.jpg",
      desc:  "Project one description.",
      link: "www.google.com"
    },
    {
      id: 'p2',
      title: "Second Project",
      tech: "PHP, Bootstrap, JavaScript MySQL",
      image: "/images/Neon.jpg",
      desc:  "Project two description.",
      link: "www.github.com"
    },
    {
      id: 'p3',
      title: "Third Project",
      tech: "PHP, Bootstrap, JavaScript MySQL",
      image: "/images/Yellow.jpg",
      desc:  "Project third description.",
      link: "www.w3school.com"
    },
  ];

  return(
    <div>
      <ProjectList projects={PROJECTS}/>
    </div>
  )
};

export default Projects;