import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = props => {
  return (
    <div className={styles["project-card"]}>
    {/* Image not loading yet */}
      <img className={styles["project-image"]} src={process.env.PUBLIC_URL + props.image} alt={props.title} />
      <h3 className={styles["project-title"]}>{props.title}</h3>
      <p className={styles["project-desc"]}>{props.tech}</p>
      <p className={styles["project-desc"]}>{props.desc}</p>
    </div>
  );
};

export default ProjectCard;