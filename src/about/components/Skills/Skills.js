import React from 'react';
// import styles from './Skills.module.scss'
import style from '../../../shared/styles/Title.module.scss';
import SkillsGrid from './SkillsGrid';

const Skills = () => {
  return(
    <div>
      <div className={style['title-container']}>
        <h1 className={style.title}>
          My Skillsets
        </h1>
      </div>
      <SkillsGrid/>
    </div>
  )
};

export default Skills;