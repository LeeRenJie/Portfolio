import React from 'react';
import SkillsGrid from './SkillsGrid';
// Add tags: https://dev.to/prvnbist/create-a-tags-input-component-in-reactjs-ki
// Filter tags: https://codepen.io/nregard/pen/KGbvoG

const SkillsData = () => {
  const SKILLS = [
    {
      id: 'Ruby on Rails',
    },
    {
      id: 'Python',
    },
    {
      id: 'React',
    },
  ];

  return (
    <div>
      <SkillsGrid skills={SKILLS}/>
    </div>
  );
};

export default SkillsData;