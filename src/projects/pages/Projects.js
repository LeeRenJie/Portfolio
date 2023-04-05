import React from 'react';
import ProjectsTitle from '../components/ProjectsTitle';
import ProjectData from '../components/ProjectData';
import './Projects.scss';

const Projects = () => {
	return(
		<div className="colored-container">
			<ProjectsTitle/>
			<ProjectData/>
		</div>
	);
};

export default Projects;