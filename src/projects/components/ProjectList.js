import React from 'react';
import styles from './ProjectList.module.scss'
import ProjectCard from './ProjectCard'

const ProjectList = props => {
	return(
		<div className={styles["project-container"]}>
			{props.projects.map(project =>(
        <a href={project.link}>
          <ProjectCard
            key={project.id}
            id={project.id}
            tech = {project.tech}
            image={project.image}
            title={project.title}
            desc={project.desc}
          />
        </a>
			))}
		</div>
	)
};

export default ProjectList;